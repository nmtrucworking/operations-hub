import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRequestDto {
  @IsString()
  @MinLength(3)
  @MaxLength(160)
  title!: string;

  @IsOptional()
  @IsString()
  @MaxLength(4000)
  description?: string;

  @IsOptional()
  @IsString()
  typeId?: string;
}

export class UpdateRequestDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(160)
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(4000)
  description?: string;

  @IsOptional()
  @IsString()
  typeId?: string;
}

export class RequestDecisionDto {
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  note?: string;
}

export class CreateRequestTypeDto {
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  name!: string;
}
