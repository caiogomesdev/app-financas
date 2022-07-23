import { Injectable, NotFoundException } from '@nestjs/common';
import { IUser } from 'src/entities/models';
import { compare } from 'bcrypt';

@Injectable()
export class UserValidator {
  async validate(user: IUser, password: string): Promise<void> {
    this.validateUser(user);
    await this.validatePassword(user.password, password);
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
