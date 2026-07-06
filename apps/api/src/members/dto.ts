import { IsEmail, IsEnum, IsOptional, IsString } from "class-validator";
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
}
