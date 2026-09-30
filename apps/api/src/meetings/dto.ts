import { IsDateString, IsIn, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateMeetingDto {
  @IsString()
  @MinLength(3)
  @MaxLength(180)
  title!: string;

  @IsOptional()
  @IsString()
  @MaxLength(4000)
  description?: string;

  @IsOptional()
  @IsString()
  unitId?: string;

  @IsDateString()
  startAt!: string;

  @IsOptional()
  @IsDateString()
  endAt?: string;

  @IsOptional()
  @IsString()
  @MaxLength(240)
  location?: string;

  @IsOptional()
  @IsString()
  @MaxLength(60)
  type?: string;
}

export class UpdateMeetingDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(180)
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(4000)
  description?: string;

  @IsOptional()
  @IsString()
  unitId?: string;

  @IsOptional()
  @IsDateString()
  startAt?: string;

  @IsOptional()
  @IsDateString()
  endAt?: string;

  @IsOptional()
  @IsString()
  @MaxLength(240)
  location?: string;
}

export class MarkAttendanceDto {
  @IsString()
  @IsIn(["PRESENT", "LATE", "ABSENT", "EXCUSED"])
  status!: "PRESENT" | "LATE" | "ABSENT" | "EXCUSED";

  @IsOptional()
  @IsDateString()
  checkInAt?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  note?: string;
}
