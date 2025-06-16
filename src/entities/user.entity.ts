
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Medicine } from './medicine.entity';
import { Message } from './message.entity';
import { OTP } from './otp.entity';
import { Subscription } from './subscription.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['user', 'pharmacist'] })
  role: 'user' | 'pharmacist';

  @Column({ nullable: true })
  profilePhotoUrl: string;

  @Column()
  idCardUrl: string;

  @Column({ default: false })
  isIdVerified: boolean;

  @Column()
  workIdUrl: string;

  @Column({ default: false })
  isWorkIdVerified: boolean;

  @Column({ type: 'boolean', default: false })
  subscriptionStatus: boolean;

  @Column({ type: 'enum', enum: ['monthly', 'yearly'], nullable: true })
  subscriptionType: 'monthly' | 'yearly';

  @Column({ nullable: true })
  otpCode: string;

  @Column({ type: 'timestamp', nullable: true })
  otpExpiresAt: Date;

  @OneToMany(() => Medicine, (medicine) => medicine.postedBy)
  medicines: Medicine[];

  @OneToMany(() => Message, (message) => message.sender)
  messages: Message[];

  @OneToMany(() => OTP, (otp) => otp.user)
  otps: OTP[];

  @OneToOne(() => Subscription, (subscription) => subscription.user)
  subscription: Subscription;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
