import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async create() {
    const password = await hash('password', 8);
    await this.userRepository.create({
      name: '123',
      email: '123',
      password,
    });
  }
}
