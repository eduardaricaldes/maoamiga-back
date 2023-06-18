import { Provider } from "@prisma/client";
import bcrypt from 'bcrypt';

import { findByEmailProvider } from "@/repositories/provider";
import { CategoryDoesntExist, EmailAlreadyExists } from "./error";
import { getCategoryById } from "@/repositories/category";

export type SignUpBodyParamsProvider = Pick<Provider, "name" | "email" | "password" |
  "location" | "availableEnd" | "availableStart" | "categoryId">


export async function SignUpServiceProvider(params: SignUpBodyParamsProvider):Promise<void>{
  const provider = await findByEmailProvider(params.email, { id: true, email:true, password: true })
  if(provider){
    throw EmailAlreadyExists();
  }
   
  const category = await getCategoryById(params.categoryId)
  if(!category){
    throw CategoryDoesntExist();
  }


  const  encryptedPassword = await bcrypt.hash(params.password, 10);
  params.password = encryptedPassword;

}




// obter parametros controller
// passar parametros para o service
// verificar se o email ja existe
// se nao existe continue o fluxo, se existe retorna error
// verificar se a categoria existe
// senao existe retorna error, se existe continua
// encriptar senha
// e seta no parametro
// salvar