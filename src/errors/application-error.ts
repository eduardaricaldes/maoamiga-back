export class BaseApplicationError extends Error {
  name: string;

  message: string;

  status?: number;

  cause?: any;

  constructor(name: string, message: string, status?: number, cause?: any) {
    super();
    this.name = name;
    this.message = message;
    this.status = status;
    this.cause = cause;
  }
}
