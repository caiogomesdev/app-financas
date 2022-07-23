import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ISpendGain, IUser } from './models';
import { User } from './user.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity('spend_gain')
export class SpendGain implements ISpendGain {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  userId: IUser;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'float' })
  price: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return;
    }
    this.id = uuidv4();
  }
}
