import { Module } from "@nestjs/common";
import { TenantRegistrationsController } from "./tenant-registrations.controller";
import { TenantRegistrationsService } from "./tenant-registrations.service";
import { TenantsController } from "./tenants.controller";

@Module({
  controllers: [TenantsController, TenantRegistrationsController],
  providers: [TenantRegistrationsService]
})
export class TenantsModule {}
