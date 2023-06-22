import httpStatus from "http-status";
import { BaseApplicationError } from "@/errors";

export function EmailAlreadyExists(): BaseApplicationError {
  return new BaseApplicationError("EmailAlreadyExists", "email already exists", httpStatus.BAD_REQUEST);
}

export function CategoryDoesntExist(): BaseApplicationError {
  return new BaseApplicationError("CategoryDoesntExist", "Category Doesn't Exist", httpStatus.NOT_FOUND);
}

export function invalidCredentialsProviderError(): BaseApplicationError {
  return new BaseApplicationError(
    "invalidCredentialsProviderError",
    "email or password are incorrect",
    httpStatus.UNAUTHORIZED,
  );
}

export function notfoundSchedulerId(): BaseApplicationError {
  return new BaseApplicationError("NotfoundSchedulerId", "schedulling with ID not foud", httpStatus.NOT_FOUND);
}

export function failupdateScheduler(): BaseApplicationError {
  return new BaseApplicationError("failupdateScheduler", "exists schedulling", httpStatus.BAD_REQUEST);
}

export function itisnotavailable(): BaseApplicationError {
  return new BaseApplicationError("itisnotavailable", "it is not available", httpStatus.BAD_REQUEST);
}

export function notExistSchedules(): BaseApplicationError {
  return new BaseApplicationError("notExistSchedules", "not exist schedulers", httpStatus.NOT_FOUND);
}

export function notExistSchedule(): BaseApplicationError {
  return new BaseApplicationError("notExistSchedule", "not exists scheduler", httpStatus.NOT_FOUND);
}
