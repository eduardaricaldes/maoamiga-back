import Joi from "joi";
import {
  SchedulerParamsBody,
  SignInParamsBody,
  SignUpBodyParams,
  SignUpBodyParamsProvider,
} from "@/services";

export const signInSchema = Joi.object<SignInParamsBody>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const signUpUserSchema = Joi.object<SignUpBodyParams>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
});

export const signUpUserProviderSchema = Joi.object<SignUpBodyParamsProvider>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  location: Joi.string().required(),
  availableEnd: Joi.string().isoDate().required(),
  availableStart: Joi.string().isoDate().required(),
  categoryId: Joi.number().integer().required(),
});

export const SchedullingUserSchema = Joi.object<SchedulerParamsBody>({
  providerServiceId: Joi.number().required(),
  scheduleDate: Joi.string().isoDate().required(),
  scheduleTime: Joi.string().isoDate().required(),
  userId: Joi.string().isoDate().required(),
});
