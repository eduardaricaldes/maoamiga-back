import { createUserDefault, findByEmail } from "@/repositories/user";
import { User } from "@prisma/client";
import { EmailAlreadyExists, InvalidType } from "./error";
import bcrypt from 'bcrypt';

export type SignUpBodyParams = Pick<User, "name" | "email" | "password" | "type" >


export async function SignUpUserService(params: SignUpBodyParams): Promise<void> {
  const user = await findByEmail(params.email, { id: true, email: true, password: true })
  if(user){
    throw EmailAlreadyExists();
  }

  if (params.type !== "" && params.type !== "DEFAULT") {
    throw InvalidType();
  }

  const encryptedPassword = await bcrypt.hash(params.password, 10);
  params.password = encryptedPassword;

  await createUserDefault(params)
}