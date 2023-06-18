import Joi from 'joi';
import { SignInParamsBody, SignUpBodyParams, SignUpBodyParamsProvider } from '@/services';

export const signInSchema = Joi.object<SignInParamsBody>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const signUpUserSchema = Joi.object<SignUpBodyParams>({
  email: Joi.string().email().required(),
  password:Joi.string().required(),
  name: Joi.string().required(),
})

export const signUpUserProviderSchema = Joi.object<SignUpBodyParamsProvider>({
  email: Joi.string().email().required(),
  password:Joi.string().required(),
  name: Joi.string().required(),
  location: Joi.string().required(),
  availableEnd: Joi.string().isoDate().required(),
  availableStart: Joi.string().isoDate().required(),
  categoryId: Joi.number().integer().required(),
})

