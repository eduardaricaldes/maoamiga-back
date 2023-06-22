import { Request, Response } from "express";
import httpStatus from "http-status";
import { SignUpBodyParams, SignUpUserService } from "@/services/user";

export async function SignUp(req: Request, res: Response) {
  try {
    const { name, password, email, location } = req.body as SignUpBodyParams;
    await SignUpUserService({
      name,
      password,
      email,
      location,
    });
    return res.status(httpStatus.CREATED).send({});
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
