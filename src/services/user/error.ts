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