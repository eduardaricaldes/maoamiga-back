import { Request, Response } from "express";
import { SignUpBodyParams, SignUpUserService } from "@/services/user";
import httpStatus from "http-status";

export async function SignUp(req:Request, res:Response) {
  try {
    const {
      name,
      password,
      email,
      type,
    } = req.body as SignUpBodyParams
    await SignUpUserService({
      name,
      password,
      type,
      email,
    })
    return res.status(httpStatus.CREATED).send({});
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}