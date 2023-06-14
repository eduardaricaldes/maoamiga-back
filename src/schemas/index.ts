import Joi from 'joi';
import { SignInParamsBody, SignUpBodyParams } from '@/services';

export const signInSchema = Joi.object<SignInParamsBody>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const signUpUserSchema = Joi.object<SignUpBodyParams>({
  email: Joi.string().email().required(),
  password:Joi.string().required(),
  name: Joi.string().required(),
  type: Joi.string().required().valid("DEFAULT"),
})