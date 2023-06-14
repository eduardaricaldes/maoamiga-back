import httpStatus from 'http-status';
import { Request, Response } from 'express';

import { SignInParamsBody, SignInService } from '@/services/authentication';

export async function SignIn(req: Request, res: Response) {
  try {
    const {
      email,
      password,
    } = req.body  as SignInParamsBody;

    const serviceResponse = await SignInService({ email, password });
    return res.status(httpStatus.OK).send(serviceResponse);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }

}