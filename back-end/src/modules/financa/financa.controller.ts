import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('financa')
export class FinancaController {
  @Get('')
  @UseGuards(AuthGuard('jwt'))
  find(@Req() req: Request) {
    return req.user;
  }
}
