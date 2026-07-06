import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response } from "express";
import { AppRequest } from "./request-context";

@Catch()
export class ApiExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<AppRequest>();
    const res = ctx.getResponse<Response>();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const body = exception instanceof HttpException ? exception.getResponse() : undefined;
    const message =
      typeof body === "object" && body && "message" in body
        ? Array.isArray((body as { message: unknown }).message)
          ? "Validation failed"
          : String((body as { message: unknown }).message)
        : status === 500
          ? "Internal server error"
          : "Request failed";
    const code =
      typeof body === "object" && body && "error" in body
        ? String((body as { error: unknown }).error).toUpperCase().replaceAll(" ", "_")
        : `HTTP_${status}`;

    res.status(status).json({
      error: {
        code,
        message,
        traceId: req.correlationId
      }
    });
  }
}
