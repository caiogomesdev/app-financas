import { Injectable } from '@nestjs/common';
import { ISpendGain, IUser } from 'src/entities/models';
import { SpendGainRepository } from 'src/repositories/spend-gain/spend-gain.repository';
import { FinancaCreateDto } from './dtos';
import { typesEnum } from './enums';

@Injectable()
export class FinancaService {
  constructor(private readonly spendGainRepository: SpendGainRepository) {}

  getAllFinancas(userId: string): Promise<ISpendGain[]> {
    return this.spendGainRepository.findAllByUserId(userId);
  }

  getAllFinancasWithFilter(
    userId: string,
    filter: typesEnum,
  ): Promise<ISpendGain[]> {
    return this.spendGainRepository.findAllByUserIdWithFilter(userId, filter);
  }

  createSpendGain(user: IUser, body: FinancaCreateDto): Promise<ISpendGain> {
    const spendGain: ISpendGain = {
      ...body,
      userId: user,
    };
    return this.spendGainRepository.create(spendGain);
  }

  async getPriceAllFinancas(userId: string): Promise<number> {
    return this.spendGainRepository.sumAllPricesByUser(userId);
  }
}
