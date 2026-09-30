import { TenantStatus } from "@prisma/client";
import { IsEnum, IsOptional, IsString, Matches, MinLength } from "class-validator";

export class AddOwnerDto {
  @IsString()
  membershipId!: string;
}

export class TransferOwnershipDto {
  @IsString()
  toMembershipId!: string;
}

export class UpdateBrandingDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  displayName?: string;

  @IsOptional()
  @Matches(/^#[0-9a-fA-F]{6}$/)
  primaryColor?: string;

  @IsOptional()
  @Matches(/^#[0-9a-fA-F]{6}$/)
  secondaryColor?: string;
}

export class CreateCustomDomainDto {
  @IsString()
  @MinLength(4)
  hostname!: string;
}

export class TransitionTenantDto {
  @IsEnum(TenantStatus)
  toStatus!: TenantStatus;

  @IsString()
  @MinLength(3)
  reason!: string;
}
