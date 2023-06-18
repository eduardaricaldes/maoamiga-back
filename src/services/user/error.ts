import { ApplicationError } from '@/protocols';

export function EmailAlreadyExists(): ApplicationError {
  return {
    name: 'EmailAlreadyExists',
    message: 'email already exists',
  };
}

export function InvalidType(): ApplicationError {
  return {
    name: 'InvalidType',
    message: 'Invalid type',
  };
}

export function invalidCredentialsError(): ApplicationError {
  return {
    name: 'InvalidCredentialsError',
    message: 'email or password are incorrect',
  };
}