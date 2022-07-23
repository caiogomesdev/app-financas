import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IUser } from 'src/entities/models';
import { compare } from 'bcrypt';
import { UserRepository } from 'src/repositories/user/user.repository';

@Injectable()
export class UserValidator {
  constructor(private readonly userRepository: UserRepository) {}
  async validate(user: IUser, password: string): Promise<void> {
    this.validateUser(user);
    await this.validatePassword(user.password, password);
  }

  async emailValidate(email: string): Promise<void> {
    const user = await this.userRepository.findByEmail(email);
    if (user) {
      throw new BadRequestException('Email indisponível');
    }
  }

  private validateUser(user: IUser): void {
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
  }

  private async validatePassword(
    hashPassword: string,
    password: string,
  ): Promise<void> {
    const isOk = await compare(password, hashPassword);

    if (!isOk) {
      throw new NotFoundException('Usuário não encontrado');
    }
  }
}
