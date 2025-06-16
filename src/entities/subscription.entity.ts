
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.subscription)
  @JoinColumn()
  user: User;

  @Column({ type: 'enum', enum: ['monthly', 'yearly'] })
  plan: 'monthly' | 'yearly';

  @Column({ type: 'boolean',  default: false })
  status: boolean;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
