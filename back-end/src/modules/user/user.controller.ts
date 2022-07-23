import { Body, Controller, Post } from '@nestjs/common';
import { IUserSigniupDto } from './dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('signup')
  async signUp(@Body() body: IUserSigniupDto) {
    await this.userService.signUp(body);
    return body;
  }
}
