import { Module } from "@nestjs/common";
import { OrganizationController } from "./organization.controller";
import { OrganizationService } from "./organization.service";
import { OrganizationProfileController } from "./profile.controller";
import { OrganizationPositionsController } from "./positions.controller";

@Module({
  controllers: [OrganizationController, OrganizationProfileController, OrganizationPositionsController],
  providers: [OrganizationService]
})
export class OrganizationModule {}
