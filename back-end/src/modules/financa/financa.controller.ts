import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { FinancaCreateDto } from './dtos';
import { typesEnum } from './enums';
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

  @Get('filter/:filtro')
  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.OK)
  findWithFilter(@Req() req: Request, @Param('filtro') filter: typesEnum) {
    return this.financaService.getAllFinancasWithFilter(req.user.id, filter);
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
    const value = await this.financaService.getPriceAllFinancas(req.user.id);
    return { value };
  }
}
