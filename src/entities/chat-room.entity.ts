import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class ChatRoom {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne('User')
  sender: any;

  @ManyToOne('User')
  reciver: any;

  @CreateDateColumn()
  createdAt: Date;
}
