import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class SpendGain {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ nullable: false, type: 'float' })
  price: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
