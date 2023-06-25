import Joi from "joi";
import { SignInProviderParamsBody, SignUpBodyParamsProvider } from "@/services/provider";

export const signInSchemaProvider = Joi.object<SignInProviderParamsBody>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const signUpProviderSchema = Joi.object<SignUpBodyParamsProvider>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  location: Joi.string().required(),
  availableEnd: Joi.date().required(),
  availableStart: Joi.date().required(),
  categoryId: Joi.number().integer().required(),
});
