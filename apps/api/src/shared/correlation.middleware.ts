import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { AppRequest } from "./request-context";

@Injectable()
export class CorrelationMiddleware implements NestMiddleware {
  use(req: AppRequest, res: Response, next: NextFunction) {
    const correlationId = req.header("x-correlation-id") ?? uuidv4();
    req.correlationId = correlationId;
    res.setHeader("x-correlation-id", correlationId);
    next();
  }
}
