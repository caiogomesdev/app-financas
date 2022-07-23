import { Injectable } from '@nestjs/common';
import { ISpendGain } from 'src/entities/models';
import { SpendGain } from 'src/entities/spend-gain.entity';
import { AppDataSource } from '../../config/data-source';

@Injectable()
export class SpendGainRepository {
  repository = AppDataSource.getRepository(SpendGain);

  async create(spendGain: ISpendGain): Promise<ISpendGain> {
    const result = this.repository.create(spendGain);
    return this.repository.save(result);
  }

  async findAllById(id: string): Promise<ISpendGain[]> {
    return this.repository.find({
      where: {
        id,
      },
    });
  }
}
