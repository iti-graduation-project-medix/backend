
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class OTP {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.otps)
  user: User;

  @Column()
  code: string;

  @Column()
  expiresAt: Date;

  @Column({ default: false })
  used: boolean;
}
