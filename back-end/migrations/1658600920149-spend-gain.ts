import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class spendGain1658600920149 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'spend_gain',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp',
          },
          {
            name: 'price',
            type: 'decimal(12,2)',
          },
          {
            name: 'created_at',
            type: 'timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('spend_gain');
  }
}
