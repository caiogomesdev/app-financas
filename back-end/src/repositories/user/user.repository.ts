import { Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/config/data-source';
import { IUser } from 'src/entities/models';
import { User } from 'src/entities/user.entity';
import { IUserCreate } from './models';

@Injectable()
export class UserRepository {
  repository = AppDataSource.getRepository(User);

  async create(body: IUserCreate) {
    const user = this.repository.create(body);
    return this.repository.save(user);
  }

  async findOne(userId: string): Promise<IUser> {
    return this.repository.findOne({
      where: { id: userId },
    });
  }
}
