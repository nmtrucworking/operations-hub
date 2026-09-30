import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { MembershipStatus } from "@prisma/client";
import { AuditAction, ModuleKey } from "@operations-hub/shared";
import { AuditService } from "../audit/audit.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateMeetingDto, MarkAttendanceDto, UpdateMeetingDto } from "./dto";

const MEETING_TRANSITIONS: Record<string, string[]> = {
  DRAFT: ["SCHEDULED"],
  SCHEDULED: ["ONGOING", "CANCELLED"],
  ONGOING: ["COMPLETED"],
  COMPLETED: [],
  CANCELLED: []
};

@Injectable()
export class MeetingsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly audit: AuditService
  ) {}

  async list(tenantId: string) {
    return this.prisma.meeting.findMany({
      where: { tenantId },
      include: {
        unit: { select: { id: true, name: true, code: true } },
        _count: { select: { participants: true, attendanceRecords: true } }
      },
      orderBy: { startAt: "desc" }
    });
  }

  async detail(tenantId: string, id: string) {
    const meeting = await this.prisma.meeting.findFirst({
      where: { id, tenantId },
      include: {
        unit: { select: { id: true, name: true, code: true } },
        participants: {
          include: {
            membership: { include: { user: { select: { id: true, fullName: true, email: true } } } }
          },
          orderBy: { membership: { user: { fullName: "asc" } } }
        },
        attendanceRecords: true
      }
    });
    if (!meeting) throw new NotFoundException("Meeting not found");
    return meeting;
  }

  async create(
    tenantId: string,
    actorId: string,
    membershipId: string,
    dto: CreateMeetingDto,
    correlationId?: string
  ) {
    await this.assertUnit(tenantId, dto.unitId);
    const startAt = new Date(dto.startAt);
    const endAt = dto.endAt ? new Date(dto.endAt) : undefined;
    if (endAt && endAt <= startAt) throw new BadRequestException("Meeting end time must be after start time");
    const meeting = await this.prisma.meeting.create({
      data: {
        tenantId,
        title: dto.title,
        description: dto.description,
        unitId: dto.unitId,
        startAt,
        endAt,
        location: dto.location,
        type: dto.type ?? "MEETING",
        status: "DRAFT",
        createdByMembershipId: membershipId
      }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Create,
      entityType: ModuleKey.Meetings,
      entityId: meeting.id,
      after: meeting,
      correlationId
    });
    return meeting;
  }

  async update(
    tenantId: string,
    actorId: string,
    id: string,
    dto: UpdateMeetingDto,
    correlationId?: string
  ) {
    const before = await this.getMeeting(tenantId, id);
    if (before.status !== "DRAFT") throw new BadRequestException("Only draft meetings can be edited");
    await this.assertUnit(tenantId, dto.unitId);
    const startAt = dto.startAt ? new Date(dto.startAt) : before.startAt;
    const endAt = dto.endAt ? new Date(dto.endAt) : before.endAt;
    if (endAt && endAt <= startAt) throw new BadRequestException("Meeting end time must be after start time");
    const updated = await this.prisma.meeting.update({
      where: { id },
      data: {
        title: dto.title,
        description: dto.description,
        unitId: dto.unitId,
        startAt: dto.startAt ? startAt : undefined,
        endAt: dto.endAt ? endAt : undefined,
        location: dto.location
      }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: ModuleKey.Meetings,
      entityId: id,
      before,
      after: updated,
      correlationId
    });
    return updated;
  }

  async schedule(tenantId: string, actorId: string, id: string, correlationId?: string) {
    const before = await this.getMeeting(tenantId, id);
    this.assertTransition(before.status, "SCHEDULED");
    const participants = await this.prisma.membership.findMany({
      where: {
        tenantId,
        status: MembershipStatus.ACTIVE,
        ...(before.unitId
          ? { membershipUnits: { some: { unitId: before.unitId, effectiveTo: null } } }
          : {})
      },
      select: { id: true }
    });
    const updated = await this.prisma.$transaction(async (tx) => {
      if (participants.length) {
        await tx.meetingParticipant.createMany({
          data: participants.map(({ id: membershipId }) => ({
            meetingId: id,
            membershipId,
            participantRole: "ATTENDEE",
            invitationStatus: "INVITED"
          })),
          skipDuplicates: true
        });
      }
      return tx.meeting.update({ where: { id }, data: { status: "SCHEDULED" } });
    });
    await this.auditTransition(tenantId, actorId, before, updated, correlationId);
    return { ...updated, participantCount: participants.length };
  }

  start(tenantId: string, actorId: string, id: string, correlationId?: string) {
    return this.changeStatus(tenantId, actorId, id, "ONGOING", correlationId);
  }

  complete(tenantId: string, actorId: string, id: string, correlationId?: string) {
    return this.changeStatus(tenantId, actorId, id, "COMPLETED", correlationId);
  }

  cancel(tenantId: string, actorId: string, id: string, correlationId?: string) {
    return this.changeStatus(tenantId, actorId, id, "CANCELLED", correlationId);
  }

  async markAttendance(
    tenantId: string,
    actorId: string,
    markerMembershipId: string,
    meetingId: string,
    membershipId: string,
    dto: MarkAttendanceDto,
    correlationId?: string
  ) {
    const meeting = await this.getMeeting(tenantId, meetingId);
    if (!["ONGOING", "COMPLETED"].includes(meeting.status)) {
      throw new BadRequestException("Attendance can only be marked for ongoing or completed meetings");
    }
    const participant = await this.prisma.meetingParticipant.findFirst({
      where: {
        meetingId,
        membershipId,
        meeting: { tenantId },
        membership: { tenantId }
      }
    });
    if (!participant) throw new NotFoundException("Meeting participant not found");

    const before = await this.prisma.attendanceRecord.findUnique({
      where: { meetingId_membershipId: { meetingId, membershipId } }
    });
    const after = await this.prisma.attendanceRecord.upsert({
      where: { meetingId_membershipId: { meetingId, membershipId } },
      create: {
        meetingId,
        membershipId,
        status: dto.status,
        checkInAt: dto.checkInAt ? new Date(dto.checkInAt) : undefined,
        note: dto.note,
        markedByMembershipId: markerMembershipId
      },
      update: {
        status: dto.status,
        checkInAt: dto.checkInAt ? new Date(dto.checkInAt) : undefined,
        note: dto.note,
        markedByMembershipId: markerMembershipId
      }
    });
    await this.audit.write({
      tenantId,
      actorId,
      action: before ? AuditAction.Update : AuditAction.Create,
      entityType: "Attendance",
      entityId: after.id,
      message: `Attendance ${before?.status ?? "UNMARKED"} -> ${after.status}`,
      before,
      after,
      correlationId
    });
    return after;
  }

  private async changeStatus(
    tenantId: string,
    actorId: string,
    id: string,
    nextStatus: string,
    correlationId?: string
  ) {
    const before = await this.getMeeting(tenantId, id);
    this.assertTransition(before.status, nextStatus);
    const updated = await this.prisma.meeting.update({ where: { id }, data: { status: nextStatus } });
    await this.auditTransition(tenantId, actorId, before, updated, correlationId);
    return updated;
  }

  private async getMeeting(tenantId: string, id: string) {
    const meeting = await this.prisma.meeting.findFirst({ where: { id, tenantId } });
    if (!meeting) throw new NotFoundException("Meeting not found");
    return meeting;
  }

  private async assertUnit(tenantId: string, unitId?: string) {
    if (!unitId) return;
    const unit = await this.prisma.organizationUnit.findFirst({ where: { id: unitId, tenantId, status: "ACTIVE" } });
    if (!unit) throw new NotFoundException("Organization unit not found");
  }

  private assertTransition(current: string, next: string) {
    if (!(MEETING_TRANSITIONS[current] ?? []).includes(next)) {
      throw new BadRequestException(`Invalid meeting transition: ${current} -> ${next}`);
    }
  }

  private auditTransition(
    tenantId: string,
    actorId: string,
    before: Awaited<ReturnType<MeetingsService["getMeeting"]>>,
    after: Awaited<ReturnType<PrismaService["meeting"]["update"]>>,
    correlationId?: string
  ) {
    return this.audit.write({
      tenantId,
      actorId,
      action: AuditAction.Update,
      entityType: ModuleKey.Meetings,
      entityId: before.id,
      message: `${before.status} -> ${after.status}`,
      before,
      after,
      correlationId
    });
  }
}
