import { Request, Response } from "express";
import httpStatus from "http-status";
import { SignUpBodyParamsProvider, SignUpServiceProvider } from "@/services/provider";
import { BaseApplicationError } from "@/errors";

export async function SingUpProvider(req: Request, res: Response) {
  try {
    const { name, email, password, location, availableEnd, availableStart, categoryId } =
      req.body as SignUpBodyParamsProvider;
    await SignUpServiceProvider({
      name,
      email,
      password,
      location,
      availableEnd,
      availableStart,
      categoryId,
    });
    return res.status(httpStatus.CREATED).send({});
  } catch (error) {
    if (error instanceof BaseApplicationError) {
      return res.status(error.status || httpStatus.BAD_REQUEST).send(error.message);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}
