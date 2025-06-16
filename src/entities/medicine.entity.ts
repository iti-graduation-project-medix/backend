
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Medicine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  quantity: number;

  @Column()
  expiryDate: Date;

  @Column()
  isSoldOut: boolean;

  @Column()
  imagesUrl: string[];

  @ManyToOne(() => User, (user) => user.medicines)
  postedBy: User;

  @CreateDateColumn()
  createdAt: Date;
}
