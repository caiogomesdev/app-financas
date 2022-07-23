import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { UserRepository } from 'src/repositories/user/user.repository';
import { IUserCreateDto } from './dtos';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async create({ name, email, password }: IUserCreateDto) {
    const passwordHash = await hash(password, 8);
    await this.userRepository.create({ name, email, password: passwordHash });
  }
}
