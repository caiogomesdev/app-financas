import { Body, Controller, Post } from '@nestjs/common';
import { IUserCreateDto } from './dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(@Body() body: IUserCreateDto) {
    await this.userService.create(body);
    return body;
  }
}
