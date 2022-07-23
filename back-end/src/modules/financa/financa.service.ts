import { Injectable } from '@nestjs/common';
import { ISpendGain, IUser } from 'src/entities/models';
import { SpendGainRepository } from 'src/repositories/spend-gain/spend-gain.repository';
import { FinancaCreateDto } from './dtos';

@Injectable()
export class FinancaService {
  constructor(private readonly spendGainRepository: SpendGainRepository) {}

  getAllFinancas(userId: string): Promise<ISpendGain[]> {
    return this.spendGainRepository.findAllByUserId(userId);
  }

  createSpendGain(user: IUser, body: FinancaCreateDto): Promise<ISpendGain> {
    const spendGain: ISpendGain = {
      ...body,
      userId: user,
    };
    return this.spendGainRepository.create(spendGain);
  }

  async sumAllFinancas(userId: string): Promise<number> {
    const { sum } = await this.spendGainRepository.sumAllPricesByUser(userId);
    return sum;
  }
}
