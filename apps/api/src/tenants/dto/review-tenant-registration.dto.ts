import { IsEnum, IsOptional, IsString, MaxLength } from "class-validator";
import { TenantRegistrationStatus } from "@prisma/client";

export class ReviewTenantRegistrationDto {
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  reviewNote?: string;
}

export class ListTenantRegistrationsQueryDto {
  @IsOptional()
  @IsEnum(TenantRegistrationStatus)
  status?: TenantRegistrationStatus;
}
