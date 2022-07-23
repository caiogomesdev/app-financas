import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { sign } from 'jsonwebtoken';
import { IUser } from 'src/entities/models';
import { UserRepository } from 'src/repositories/user/user.repository';
import { JwtPayload } from './models';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createAcessToken(userId: string): Promise<string> {
    return sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
  }

  public async validateUser({ userId }: JwtPayload): Promise<IUser> {
    const user = await this.userRepository.findOne(userId);
    if (!user) {
      throw new UnauthorizedException('user not found');
    }
    user.password = undefined;
    return user;
  }

  private static jwtExtractor(request: Request) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('No token in request');
    }
    return authHeader.split(' ')[1];
  }

  public returnJwtExtractor(): (request: Request) => string {
    return AuthService.jwtExtractor;
  }
}
