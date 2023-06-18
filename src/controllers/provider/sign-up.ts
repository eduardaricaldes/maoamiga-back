import { SignUpBodyParamsProvider, SignUpServiceProvider } from '@/services/provider';
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function SingUpProvider (req: Request, res: Response){
  try {
    const{
      name,
      email,
      password,
      location,
      availableEnd,
      availableStart,
      categoryId,
    } = req.body as SignUpBodyParamsProvider
    await SignUpServiceProvider({
      name,
      email,
      password,
      location,
      availableEnd,
      availableStart,
      categoryId,
    })
    return res.status(httpStatus.CREATED).send({});
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
  }