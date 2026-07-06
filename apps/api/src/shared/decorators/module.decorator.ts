import { SetMetadata } from "@nestjs/common";
import { ModuleKey } from "@operations-hub/shared";

export const MODULE_KEY = "requiredModule";
export const RequireModule = (moduleKey: ModuleKey) => SetMetadata(MODULE_KEY, moduleKey);
