import { IsEnum, IsOptional, IsString } from "class-validator";
import { RequestStatus } from "@prisma/client";

export class CreateRequestDto {
  @IsString()
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  typeId?: string;
}

export class UpdateRequestDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(RequestStatus)
  status?: RequestStatus;
}
