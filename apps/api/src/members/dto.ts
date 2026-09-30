import { IsBoolean, IsDateString, IsEmail, IsEnum, IsOptional, IsString } from "class-validator";
import { MembershipStatus } from "@prisma/client";

export class CreateMemberDto {
  @IsEmail()
  email!: string;

  @IsString()
  fullName!: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  unitId?: string;

  @IsOptional()
  @IsString()
  positionId?: string;

  @IsOptional()
  @IsString()
  studentCode?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  bio?: string;
}

export class UpdateMemberDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsEnum(MembershipStatus)
  status?: MembershipStatus;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsString()
  studentCode?: string;
}

export class AssignMembershipUnitDto {
  @IsString()
  unitId!: string;

  @IsOptional()
  @IsBoolean()
  isPrimary?: boolean;

  @IsOptional()
  @IsDateString()
  effectiveFrom?: string;
}

export class AssignMembershipPositionDto {
  @IsString()
  positionId!: string;

  @IsOptional()
  @IsDateString()
  effectiveFrom?: string;
}
