import { Body, Controller, Get, Param, Patch, Post, Query, Req } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ModuleKey, PERMISSIONS } from "@operations-hub/shared";
import { RequireModule } from "../shared/decorators/module.decorator";
import { Permissions } from "../shared/decorators/permissions.decorator";
import { TenantId } from "../shared/decorators/tenant-id.decorator";
import { AppRequest } from "../shared/request-context";
import { CreateFinanceTransactionDto, UpdateFinanceTransactionDto } from "./dto";
import { FinanceService } from "./finance.service";

@ApiBearerAuth()
@ApiTags("finance")
@Controller("finance")
@RequireModule(ModuleKey.Finance)
export class FinanceController {
  constructor(private readonly finance: FinanceService) {}

  @Get("accounts")
  @Permissions(PERMISSIONS.financeRead)
  accounts(@TenantId() tenantId: string) {
    return this.finance.listAccounts(tenantId);
  }

  @Get("transactions")
  @Permissions(PERMISSIONS.financeRead)
  transactions(@TenantId() tenantId: string, @Query("page") page = "1", @Query("limit") limit = "20") {
    return this.finance.listTransactions(tenantId, Number(page) || 1, Number(limit) || 20);
  }

  @Post("transactions")
  @Permissions(PERMISSIONS.financeManage)
  createTransaction(@TenantId() tenantId: string, @Body() dto: CreateFinanceTransactionDto, @Req() req: AppRequest) {
    return this.finance.createTransaction(tenantId, req.user!.userId, dto, req.correlationId);
  }

  @Patch("transactions/:id")
  @Permissions(PERMISSIONS.financeManage)
  updateTransaction(
    @TenantId() tenantId: string,
    @Param("id") id: string,
    @Body() dto: UpdateFinanceTransactionDto,
    @Req() req: AppRequest
  ) {
    return this.finance.updateTransaction(tenantId, req.user!.userId, id, dto, req.correlationId);
  }
}
