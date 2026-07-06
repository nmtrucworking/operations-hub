import { IsArray, IsOptional, IsString } from "class-validator";

export class CreateRoleDto {
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class SetRolePermissionsDto {
  @IsArray()
  @IsString({ each: true })
  permissions!: string[];
}

export class AssignRoleDto {
  @IsString()
  roleId!: string;
}
