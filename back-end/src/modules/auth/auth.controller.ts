import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dtos';

@Controller('auth')
export class AuthController {
  @Post()
  auth(@Body() body: LoginDto) {
    return body;
  }
}
