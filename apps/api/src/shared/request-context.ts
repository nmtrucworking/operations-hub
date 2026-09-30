import { Request } from "express";

export type AuthUser = {
  userId: string;
  email: string;
  tenantId?: string;
  membershipId?: string;
};

export type RequestContext = {
  user?: AuthUser;
  tenantId?: string;
  membershipId?: string;
  supportGrantId?: string;
  supportScopes?: string[];
  correlationId?: string;
};

export type AppRequest = Request & RequestContext;
