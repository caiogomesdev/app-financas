import { IUser } from './user.model';

export interface ISpendGain {
  id: string;
  userId: IUser;
  title: string;
  type: string;
  date: Date;
  price: number;
  createdAt: Date;
}
