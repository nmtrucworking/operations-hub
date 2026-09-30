import { IsDateString, IsEmail, IsIn, IsObject, IsOptional, IsString, IsUrl } from "class-validator";

export class UpdateOrganizationProfileDto {
  @IsOptional()
  @IsString()
  displayName?: string;

  @IsOptional()
  @IsString()
  shortName?: string | null;

  @IsOptional()
  @IsString()
  code?: string | null;

  @IsOptional()
  @IsString()
  organizationType?: string | null;

  @IsOptional()
  @IsString()
  description?: string | null;

  @IsOptional()
  @IsUrl({ require_protocol: true })
  logoUrl?: string | null;

  @IsOptional()
  @IsDateString()
  establishedAt?: string | null;

  @IsOptional()
  @IsEmail()
  contactEmail?: string | null;

  @IsOptional()
  @IsUrl({ require_protocol: true })
  websiteUrl?: string | null;

  @IsOptional()
  @IsObject()
  socialLinks?: Record<string, string> | null;

  @IsOptional()
  @IsString()
  parentOrganization?: string | null;

  @IsOptional()
  @IsString()
  address?: string | null;

  @IsOptional()
  @IsIn(["ACTIVE", "INACTIVE"])
  status?: "ACTIVE" | "INACTIVE";
}
