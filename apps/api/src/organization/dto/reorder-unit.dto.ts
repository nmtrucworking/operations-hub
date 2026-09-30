import { IsInt, IsOptional, IsString, Min } from "class-validator";

export class ReorderOrganizationUnitDto {
  @IsOptional()
  @IsString()
  parentId?: string | null;

  @IsInt()
  @Min(0)
  sortOrder!: number;
}
