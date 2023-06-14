import Joi from 'joi';
import { SignInParamsBody } from '@/services';

export const signInSchema = Joi.object<SignInParamsBody>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});