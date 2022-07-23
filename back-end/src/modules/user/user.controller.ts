import { Body, Controller, Post } from '@nestjs/common';
import { IUserSigninDto, IUserSigniupDto } from './dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('signup')
  async signUp(@Body() body: IUserSigniupDto) {
    const user = await this.userService.signUp(body);
    user.password = undefined;
    return user;
  }

  @Post('signin')
  async signIn(@Body() body: IUserSigninDto) {
    await this.userService.signin(body);
  }
}
