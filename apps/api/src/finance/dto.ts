import { IsEnum, IsNumber, IsOptional, IsString, Min } from "class-validator";
import { FinanceTransactionStatus, FinanceTransactionType } from "@prisma/client";

export class CreateFinanceTransactionDto {
  @IsString()
  accountId!: string;

  @IsEnum(FinanceTransactionType)
  type!: FinanceTransactionType;

  @IsNumber()
  @Min(0.01)
  amount!: number;

  @IsString()
  category!: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateFinanceTransactionDto {
  @IsOptional()
  @IsEnum(FinanceTransactionStatus)
  status?: FinanceTransactionStatus;

  @IsOptional()
  @IsString()
  description?: string;
}
