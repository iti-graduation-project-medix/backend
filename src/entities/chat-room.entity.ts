
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class ChatRoom {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User)
  sender: User;

  @ManyToOne(() => User)
  reciver: User;

  @CreateDateColumn()
  createdAt: Date;
}
