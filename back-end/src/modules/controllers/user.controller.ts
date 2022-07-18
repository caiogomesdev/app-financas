import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(@Body() body) {
    await this.userService.create();
    return body;
  }
}
