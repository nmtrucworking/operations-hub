import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { AuditModule } from "./audit/audit.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { FinanceModule } from "./finance/finance.module";
import { HealthController } from "./health.controller";
import { MembersModule } from "./members/members.module";
import { ModulesModule } from "./modules/modules.module";
import { PrismaModule } from "./prisma/prisma.module";
import { RbacModule } from "./rbac/rbac.module";
import { RequestsModule } from "./requests/requests.module";
import { CorrelationMiddleware } from "./shared/correlation.middleware";
import { JwtAuthGuard } from "./shared/guards/jwt-auth.guard";
import { ModuleGuard } from "./shared/guards/module.guard";
import { PermissionGuard } from "./shared/guards/permission.guard";
import { TenantGuard } from "./shared/guards/tenant.guard";
import { TenantsModule } from "./tenants/tenants.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ["../../.env", ".env"] }),
    PrismaModule,
    AuditModule,
    AuthModule,
    UsersModule,
    TenantsModule,
    RbacModule,
    MembersModule,
    RequestsModule,
    FinanceModule,
    DashboardModule,
    ModulesModule
  ],
  controllers: [HealthController],
  providers: [
    { provide: APP_GUARD, useClass: JwtAuthGuard },
    { provide: APP_GUARD, useClass: TenantGuard },
    { provide: APP_GUARD, useClass: ModuleGuard },
    { provide: APP_GUARD, useClass: PermissionGuard }
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationMiddleware).forRoutes("*");
  }
}
