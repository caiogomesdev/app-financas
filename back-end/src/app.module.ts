import { Module } from '@nestjs/common';
import { AuthController } from './modules/auth/auth.controller';
import { UserService } from './modules/user/user.service';
import { UserController } from './modules/user/user.controller';
import { AuthService } from './modules/auth/auth.service';
import { RepositoriesModule } from './repositories/repositories.module';
import { UserValidator } from './modules/user/user.validator';

@Module({
  imports: [RepositoriesModule],
  controllers: [AuthController, UserController],
  providers: [UserService, AuthService, UserValidator],
})
export class AppModule {}
