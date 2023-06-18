import { Provider } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { invalidCredentialsProviderError } from "./error";
import { create } from '@/repositories/session';
import { findByEmailProvider } from '@/repositories/provider';


export async function SignInServiceProvider(params: SignInProviderParamsBody): Promise<SignInProviderResult>{
  const provider = await findByEmailProvider(params.email, {id: true, email: true, password: true })
  if(!provider){
    throw invalidCredentialsProviderError
  }

  const isPasswordValid = await bcrypt.compare(params.password, provider.password)
  if(!isPasswordValid)
  throw invalidCredentialsProviderError

  const token = await createSession(provider.id)
  return {
    id: provider.id,
    email: provider.email,
    token,
  };

  async function createSession(providerId: number) {
    const token = jwt.sign({providerId}, process.env.JWT_SECRET);
    await create({
      token,
      providerId,
    });
    return token;
  }

}

export type SignInProviderParamsBody = Pick<Provider, "email" | "password">
interface SignInProviderResult {
  id: number,
  email: string,
  token: string,
}