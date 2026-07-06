import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { AppRequest } from "../request-context";

export const CurrentUser = createParamDecorator((_data: unknown, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest<AppRequest>();
  return req.user;
});
