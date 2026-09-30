import { IsDateString, IsEnum, IsNumber, IsOptional, IsString, MaxLength, Min } from "class-validator";
import { FinanceTransactionType } from "@prisma/client";

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
  @MaxLength(4000)
  description?: string;

  @IsOptional()
  @IsString()
  sourceRequestId?: string;

  @IsOptional()
  @IsDateString()
  occurredAt?: string;
}

export class UpdateFinanceTransactionDto {
  @IsOptional()
  @IsString()
  @MaxLength(4000)
  description?: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsDateString()
  occurredAt?: string;
}

export class FinanceDecisionDto {
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  note?: string;
}
