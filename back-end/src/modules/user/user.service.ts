import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { UserRepository } from 'src/repositories/user/user.repository';
import { IUserSigniupDto } from './dtos';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
  async signUp({ name, email, password }: IUserSigniupDto) {
    const passwordHash = await hash(password, 8);
    await this.userRepository.create({ name, email, password: passwordHash });
  }
}
