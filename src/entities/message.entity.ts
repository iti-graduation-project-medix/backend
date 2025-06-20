import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne('ChatRoom', 'messages')
  chatRoom: any;

  @ManyToOne('User', 'messages')
  sender: any;

  @Column('text')
  text: string;

  @CreateDateColumn()
  sentAt: Date;
}
