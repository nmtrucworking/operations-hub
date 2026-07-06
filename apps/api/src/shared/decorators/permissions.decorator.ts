import { SetMetadata } from "@nestjs/common";
import { PermissionCode } from "@operations-hub/shared";

export const PERMISSIONS_KEY = "permissions";
export const Permissions = (...permissions: PermissionCode[]) => SetMetadata(PERMISSIONS_KEY, permissions);
