import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user/user.repository';
import { AuthService } from '../auth/auth.service';
import { IUserSigninDto, IUserSigniupDto } from './dtos';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
  ) {}

  async signUp({ name, email, password }: IUserSigniupDto): Promise<User> {
    const passwordHash = await hash(password, 8);
    return this.userRepository.create({ name, email, password: passwordHash });
  }

  async signin({ email, password }: IUserSigninDto) {}
}
