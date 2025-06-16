
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { ChatRoom } from './chat-room.entity';
import { User } from './user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ChatRoom)
  chatRoom: ChatRoom;

  @ManyToOne(() => User, user => user.messages)
  sender: User;

  @Column('text')
  text: string;

  @CreateDateColumn()
  sentAt: Date;
}
