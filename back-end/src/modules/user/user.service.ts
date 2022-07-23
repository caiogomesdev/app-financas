import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { UserRepository } from 'src/repositories/user/user.repository';
import { AuthService } from '../auth/auth.service';
import { IUserSigninDto, IUserSigninResult, IUserSigniupDto } from './dtos';
import { UserValidator } from './user.validator';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authService: AuthService,
    private readonly userValidator: UserValidator,
  ) {}

  async signUp({ name, email, password }: IUserSigniupDto): Promise<User> {
    const passwordHash = await hash(password, 8);
    await this.userValidator.emailValidate(email);
    return this.userRepository.create({ name, email, password: passwordHash });
  }

  async signin({
    email,
    password,
  }: IUserSigninDto): Promise<IUserSigninResult> {
    const user = await this.userRepository.findByEmail(email);
    await this.userValidator.validate(user, password);
    const token = await this.authService.createAcessToken(user.id);
    user.password = undefined;
    return { user, token };
  }
}
