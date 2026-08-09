import { IsEmail, IsOptional, IsString, Length, MaxLength } from "class-validator";

export class CreateTenantRegistrationDto {
  @IsString()
  @Length(2, 160)
  proposedName!: string;

  @IsString()
  @Length(2, 80)
  proposedSlug!: string;

  @IsEmail()
  @MaxLength(254)
  contactEmail!: string;

  @IsString()
  @Length(10, 2000)
  purpose!: string;

  @IsOptional()
  @IsString()
  @MaxLength(160)
  representativeName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  websiteOrReference?: string;
}
