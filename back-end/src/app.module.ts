import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './modules/controllers/auth.controller';
import { AuthService } from './modules/services/auth.service';
import { UserRepository } from './modules/repositories/user.repository';
import { UserService } from './modules/services/user.service';
import { UserController } from './modules/controllers/user.controller';

@Module({
  imports: [],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, AuthService, UserService, UserRepository],
})
export class AppModule {}
