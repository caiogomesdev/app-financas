import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'financas',
  synchronize: true,
  logging: false,
  entities: [__dirname + '../../entities/*.entity.{ts,js}'],
  migrations: [__dirname + '../../../migrations/*.{ts,js}'],
});
