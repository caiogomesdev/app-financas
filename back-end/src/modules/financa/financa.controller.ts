import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { FinancaCreateDto } from './dtos';
import { FinancaService } from './financa.service';

@Controller('financa')
export class FinancaController {
  constructor(private readonly financaService: FinancaService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  find(@Req() req: Request) {
    return this.financaService.getAllFinancas(req.user.id);
  }

  @Post('create')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.CREATED)
  create(@Req() req: Request, @Body() body: FinancaCreateDto) {
    return this.financaService.createSpendGain(req.user, body);
  }

  @Get('total')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  async count(@Req() req: Request) {
    const value = await this.financaService.sumAllFinancas(req.user.id);
    return { value };
  }
}
