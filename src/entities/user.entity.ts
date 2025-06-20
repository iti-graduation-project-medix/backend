import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['admin', 'user', 'pharmacist'] })
  role: 'admin' | 'user' | 'pharmacist';

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

  @OneToMany('Medicine', 'postedBy')
  medicines: any;

  @OneToMany('Message', 'sender')
  messages: any;

  @OneToMany('OTP', 'user')
  otps: any;

  @OneToOne('Subscription', 'user')
  subscription: any;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
