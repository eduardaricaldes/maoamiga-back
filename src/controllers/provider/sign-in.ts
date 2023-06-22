import httpStatus from "http-status";
import { Request, Response } from "express";

import { SignInProviderParamsBody, SignInServiceProvider } from "@/services/provider";

export async function SignInProvider(req: Request, res: Response) {
  try {
    const { email, password } = req.body as SignInProviderParamsBody;

    const serviceResponse = await SignInServiceProvider({ email, password });
    return res.status(httpStatus.OK).send(serviceResponse);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}
