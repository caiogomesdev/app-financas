import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { IUserSigninDto, IUserSigninResult, IUserSigniupDto } from './dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signUp(@Body() body: IUserSigniupDto) {
    const user = await this.userService.signUp(body);
    user.password = undefined;
    return user;
  }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  signIn(@Body() body: IUserSigninDto): Promise<IUserSigninResult> {
    return this.userService.signin(body);
  }
}
