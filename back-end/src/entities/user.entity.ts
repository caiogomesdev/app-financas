import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';
import { IUser } from './models';

@Entity('user')
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

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
