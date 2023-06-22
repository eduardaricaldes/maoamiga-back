import httpStatus from "http-status";
import { BaseApplicationError } from "@/errors";

export function EmailAlreadyExists(): BaseApplicationError {
  return new BaseApplicationError("EmailAlreadyExists", "email already exists", httpStatus.BAD_REQUEST);
}

export function InvalidType(): BaseApplicationError {
  return new BaseApplicationError("InvalidType", "Invalid type", httpStatus.BAD_REQUEST);
}

export function invalidCredentialsError(): BaseApplicationError {
  return new BaseApplicationError(
    "InvalidCredentialsError",
    "email or password are incorrect",
    httpStatus.UNAUTHORIZED,
  );
}

export function notfindiduser(): BaseApplicationError {
  return new BaseApplicationError("notfindiduser", "not find id user", httpStatus.NOT_FOUND);
}

export function notexistscheduler(): BaseApplicationError {
  return new BaseApplicationError("notexistscheduler", "not exists cheduler", httpStatus.NOT_FOUND);
}

export function notExistSchedules(): BaseApplicationError {
  return new BaseApplicationError("notExistSchedules", "not exists chedulers", httpStatus.NOT_FOUND);
}

export function notExistSchedule(): BaseApplicationError {
  return new BaseApplicationError("notExistSchedule", "not exists scheduler", httpStatus.NOT_FOUND);
}
