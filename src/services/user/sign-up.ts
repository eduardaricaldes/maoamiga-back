import { createUserDefault, findByEmail } from "@/repositories/user";
import { User } from "@prisma/client";
import { EmailAlreadyExists } from "./error";
import bcrypt from "bcrypt";

export type SignUpBodyParams = Pick<
  User,
  "name" | "email" | "password" | "location"
>;

export async function SignUpUserService(
  params: SignUpBodyParams
): Promise<void> {
  const user = await findByEmail(params.email, {
    id: true,
    email: true,
    password: true,
    location: true,
  });
  if (user) {
    throw EmailAlreadyExists();
  }

  const encryptedPassword = await bcrypt.hash(params.password, 10);
  params.password = encryptedPassword;

  const createdUser = await createUserDefault(params);
}
