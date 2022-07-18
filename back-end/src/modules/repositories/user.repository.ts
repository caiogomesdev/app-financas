import { Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/config/data-source';
import { DeepPartial } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  repository = AppDataSource.getRepository(User);
  async create(body: DeepPartial<User>) {
    const user = this.repository.create(body);
    return this.repository.save(user);
  }
}
