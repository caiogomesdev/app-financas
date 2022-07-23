import { IUser } from 'src/entities/models';

export interface IUserSigninDto {
  email: string;
  password: string;
}

export interface IUserSigninResult {
  user: IUser;
  token: string;
}
