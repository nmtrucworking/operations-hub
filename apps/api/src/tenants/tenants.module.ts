import { Module } from "@nestjs/common";
import { TenantRegistrationsController } from "./tenant-registrations.controller";
import { TenantRegistrationsService } from "./tenant-registrations.service";
import { TenantsController } from "./tenants.controller";
import { PlatformTenantRegistrationsController } from "./platform-tenant-registrations.controller";
import { PlatformTenantRegistrationsService } from "./platform-tenant-registrations.service";
import { PlatformTenantsController } from "./platform-tenants.controller";
import { PlatformTenantsService } from "./platform-tenants.service";
import { TenantManagementService } from "./tenant-management.service";
import { TenantGovernanceService } from "./tenant-governance.service";
import { PlatformTenantGovernanceController } from "./platform-tenant-governance.controller";
import { DnsVerificationProvider } from "./dns-verification.provider";

@Module({
  controllers: [
    TenantsController,
    TenantRegistrationsController,
    PlatformTenantRegistrationsController,
    PlatformTenantsController,
    PlatformTenantGovernanceController
  ],
  providers: [
    TenantRegistrationsService,
    PlatformTenantRegistrationsService,
    TenantManagementService,
    TenantGovernanceService,
    PlatformTenantsService,
    DnsVerificationProvider
  ]
})
export class TenantsModule {}
