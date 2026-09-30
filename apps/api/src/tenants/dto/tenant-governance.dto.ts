import { ServiceSubscriptionStatus, TenantClosureStatus } from "@prisma/client";
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Matches,
  Max,
  Min,
  MinLength
} from "class-validator";

export class UpdateServiceContactsDto {
  @IsOptional()
  @IsEmail()
  serviceContactEmail?: string;

  @IsOptional()
  @IsEmail()
  billingContactEmail?: string;
}

export class CreateServicePlanDto {
  @IsString()
  @Matches(/^[A-Z0-9][A-Z0-9_-]{1,31}$/)
  code!: string;

  @IsString()
  @MinLength(2)
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  currency?: string;

  @IsOptional()
  @IsString()
  billingInterval?: string;
}

export class UpsertServicePlanLimitDto {
  @IsString()
  @Matches(/^[a-zA-Z0-9][a-zA-Z0-9_.:-]{1,63}$/)
  metricKey!: string;

  @IsInt()
  @Min(0)
  maxValue!: number;

  @IsOptional()
  @IsString()
  unit?: string;
}

export class AssignTenantServiceDto {
  @IsString()
  planId!: string;

  @IsOptional()
  @IsEnum(ServiceSubscriptionStatus)
  status?: ServiceSubscriptionStatus;

  @IsOptional()
  @IsEmail()
  serviceContactEmail?: string;

  @IsOptional()
  @IsEmail()
  billingContactEmail?: string;
}

export class SetTenantUsageDto {
  @IsString()
  @Matches(/^[a-zA-Z0-9][a-zA-Z0-9_.:-]{1,63}$/)
  metricKey!: string;

  @IsOptional()
  @IsString()
  @Matches(/^[a-zA-Z0-9][a-zA-Z0-9_.:-]{0,63}$/)
  periodKey?: string;

  @IsInt()
  @Min(0)
  usedValue!: number;
}

export class UpdateRetentionPolicyDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(365)
  gracePeriodDays?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(3650)
  retentionDays?: number;

  @IsOptional()
  @IsString()
  @Matches(/^(ANONYMIZE|DELETE)$/)
  disposition?: string;
}

export class CreateClosureRequestDto {
  @IsString()
  @MinLength(3)
  reason!: string;
}

export class DecideClosureRequestDto {
  @IsEnum(TenantClosureStatus)
  status!: TenantClosureStatus;

  @IsString()
  @MinLength(3)
  note!: string;
}

export class CreateDataExportRequestDto {
  @IsOptional()
  @IsString()
  @Matches(/^[A-Z0-9_-]{2,16}$/)
  format?: string;

  @IsOptional()
  @IsString()
  closureRequestId?: string;
}

export class CreateSupportRequestDto {
  @IsString()
  @MinLength(5)
  reason!: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(20)
  @IsString({ each: true })
  scopes!: string[];

  @IsInt()
  @Min(15)
  @Max(1440)
  durationMinutes!: number;
}

export class GrantSupportRequestDto {
  @IsString()
  platformUserId!: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(20)
  @IsString({ each: true })
  scopes!: string[];

  @IsInt()
  @Min(15)
  @Max(1440)
  durationMinutes!: number;

  @IsOptional()
  @IsString()
  reviewNote?: string;
}

export class RejectSupportRequestDto {
  @IsString()
  @MinLength(3)
  reviewNote!: string;
}
