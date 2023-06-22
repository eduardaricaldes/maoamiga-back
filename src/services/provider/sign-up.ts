import { Provider } from "@prisma/client";
import bcrypt from "bcrypt";

import { CategoryDoesntExist, EmailAlreadyExists } from "./error";
import { createProvider, findByEmailProvider } from "@/repositories/provider";
import { getCategoryById } from "@/repositories/category";

export type SignUpBodyParamsProvider = Pick<
  Provider,
  "name" | "email" | "password" | "location" | "availableEnd" | "availableStart" | "categoryId"
>;

export async function SignUpServiceProvider(params: SignUpBodyParamsProvider): Promise<void> {
  const provider = await findByEmailProvider(params.email, { id: true, email: true, password: true });
  if (provider) {
    throw EmailAlreadyExists();
  }

  const category = await getCategoryById(params.categoryId);
  if (!category) {
    throw CategoryDoesntExist();
  }

  const encryptedPassword = await bcrypt.hash(params.password, 10);
  params.password = encryptedPassword;

  await createProvider(params);
}
