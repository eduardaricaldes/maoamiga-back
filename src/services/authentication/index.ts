import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from "@prisma/client";

import { findByEmail } from "@/repositories/user";
import { invalidCredentialsError } from "./error";
import { create } from '@/repositories/session';


export async function SignInService(params: SignInParamsBody): Promise<SignInResult> {
  const user = await findByEmail(params.email, { id: true, email: true, password: true })
  if (!user) {
    throw invalidCredentialsError();
  }

  const isPasswordValid = await bcrypt.compare(params.password, user.password);
  if (!isPasswordValid){
    throw invalidCredentialsError()
  }

  const token = await createSession(user.id)

  return {
    id: user.id,
    email: user.email,
    token,
  };
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await create({
    token,
    userId,
  });

  return token;
}

export type SignInParamsBody = Pick<User, | "email" | "password">

interface SignInResult {
  id: number,
  email: string,
  token: string,
}