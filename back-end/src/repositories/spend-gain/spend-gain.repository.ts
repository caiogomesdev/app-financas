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

  async findAllByUserId(userId: string): Promise<ISpendGain[]> {
    return this.repository.find({
      where: {
        userId: {
          id: userId,
        },
      },
    });
  }

  async sumAllPricesByUser(userId: string): Promise<number> {
    const { sum } = await this.repository
      .createQueryBuilder('spend_gain')
      .select('SUM(spend_gain.price)')
      .where('spend_gain.user_id = :userId', { userId })
      .getRawOne();
    return sum;
  }
}
