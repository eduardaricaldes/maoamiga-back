import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";

import { unauthorizedError } from "@/errors";
import { prisma } from "@/config";

interface JWTPayload {
  userId?: number;
}

export type AuthenticatedRequest = Request & JWTPayload;

export async function authenticateUser(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.header("Authorization");
  if (!authHeader) return generateUnauthorizedResponse(res);

  const token = authHeader.split(" ")[1];
  if (!token) return generateUnauthorizedResponse(res);

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET || "Secret") as JWTPayload;

    const session = await prisma.session.findFirst({
      where: {
        token,
      },
    });
    if (!session) return generateUnauthorizedResponse(res);

    req.userId = userId;

    return next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

function generateUnauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}
