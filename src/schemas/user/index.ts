import Joi from "joi";
import {
  SchedulerParamsBody,
  SignInParamsBody,
  SignUpBodyParams,
  UpdateSchedulerParams,
  UserGetProvidersParams,
} from "@/services";

export const signInSchema = Joi.object<SignInParamsBody>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const signUpUserSchema = Joi.object<SignUpBodyParams>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  location: Joi.string().required(),
});

export const SchedullingUserSchema = Joi.object<SchedulerParamsBody>({
  providerServiceId: Joi.number().required(),
  scheduleDate: Joi.string().isoDate().required(),
  scheduleTime: Joi.string().isoDate().required(),
  userId: Joi.string().isoDate().required(),
});

export const updateScheduleSchema = Joi.object<UpdateSchedulerParams>({
  scheduleDate: Joi.date().required(),
  scheduleTime: Joi.date().required(),
});

export const findProviderParams = Joi.object<UserGetProvidersParams>({
  categoryId: Joi.number().integer().required(),
  lat: Joi.number().required(),
  long: Joi.number().required(),
});
