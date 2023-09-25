export interface User {
  username: string;
  password?: string;
  token?: string;
  last_login?: Date;
}

export interface Error {
  errorCategory: string;
  errorMessage: string;
}

export interface AuthSuccess {
  user: User;
  requestType: string;
  status: string;
  message: string;
  token?: string;
}
