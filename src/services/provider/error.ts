import { ApplicationError } from '@/protocols';


export function EmailAlreadyExists(): ApplicationError {
  return {
    name: 'EmailAlreadyExists',
    message: 'email already exists',
  };
}

export function CategoryDoesntExist(): ApplicationError {
  return {
    name: 'CategoryDoesntExist',
    message: "Category Doesn't Exist",
  };
}

export function invalidCredentialsProviderError(): ApplicationError {
  return {
    name: 'invalidCredentialsProviderError',
    message: 'email or password are incorrect',
  };
}