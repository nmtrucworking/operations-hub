import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { AppRequest } from "./request-context";

@Injectable()
export class ApiResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const req = context.switchToHttp().getRequest<AppRequest>();
    return next.handle().pipe(
      map((data) => {
        if (data && typeof data === "object" && "data" in data && "meta" in data) {
          return { ...data, traceId: req.correlationId };
        }
        return { data, traceId: req.correlationId };
      })
    );
  }
}
