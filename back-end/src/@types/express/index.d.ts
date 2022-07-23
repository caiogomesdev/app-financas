declare namespace Express {
  export interface Request {
    user?: import('../../entities/models/user.model').IUser;
  }
}
