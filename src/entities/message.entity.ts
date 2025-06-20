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
  id: string;

  @ManyToOne('ChatRoom', 'messages')
  chatRoom: any;

  @ManyToOne('User', 'messages')
  sender: any;

  @Column('text')
  text: string;

  @CreateDateColumn()
  sentAt: Date;
}
