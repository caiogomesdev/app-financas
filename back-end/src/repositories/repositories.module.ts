import { Module } from '@nestjs/common';
import { SpendGainRepository } from './spend-gain/spend-gain.repository';
import { UserRepository } from './user/user.repository';

@Module({
  providers: [UserRepository, SpendGainRepository],
  exports: [UserRepository, SpendGainRepository],
})
export class RepositoriesModule {}
