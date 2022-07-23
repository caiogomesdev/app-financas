import { Module } from '@nestjs/common';
import { UserService } from './modules/user/user.service';
import { UserController } from './modules/user/user.controller';
import { AuthService } from './modules/auth/auth.service';
import { RepositoriesModule } from './repositories/repositories.module';
import { UserValidator } from './modules/user/user.validator';
import { FinancaController } from './modules/financa/financa.controller';
import { FinancaService } from './modules/financa/financa.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './modules/auth/strategies/jwt.strategy';
import { MeController } from './modules/me/me.controller';

@Module({
  imports: [
    RepositoriesModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION },
    }),
  ],
  controllers: [UserController, FinancaController, MeController],
  providers: [
    UserService,
    AuthService,
    UserValidator,
    FinancaService,
    JwtStrategy,
  ],
})
export class AppModule {}
