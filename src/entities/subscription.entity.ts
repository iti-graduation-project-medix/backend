import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Subscription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne('User', 'subscription')
  @JoinColumn()
  user: any;

  @Column({ type: 'enum', enum: ['monthly', 'yearly'] })
  plan: 'monthly' | 'yearly';

  @Column({ type: 'boolean', default: false })
  status: boolean;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
