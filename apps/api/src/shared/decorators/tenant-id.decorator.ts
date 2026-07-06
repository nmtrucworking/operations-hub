import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { AppRequest } from "../request-context";

export const TenantId = createParamDecorator((_data: unknown, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest<AppRequest>();
  return req.tenantId;
});
