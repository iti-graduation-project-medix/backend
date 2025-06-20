import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
} from "typeorm";

import { Medicine } from "./medicine.entity";
import { Message } from "./message.entity";
import { OTP } from "./otp.entity";
import { Subscription } from "./subscription.entity";

enum VerificationStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  BLOCKED = "blocked",
}

enum status {
  USER = "user",
  ADMIN = "admin",
  PHARMACIST = "pharmacist",
}

enum subscriptionStatus {
  MONTHLY = "monthly",
  YEARLY = "yearly",
}

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  password: string;

  @Column({ type: "enum", enum: status, default: status.USER })
  role: status;

  @Column({ nullable: true })
  profilePhotoUrl: string;

  @Column()
  idFrontCardUrl: object;

  @Column()
  idBackCardUrl: object;

  @Column({ default: false })
  isIdVerified: boolean;

  @Column()
  workIdUrl: string;

  @Column({
    type: "enum",
    enum: VerificationStatus,
    default: VerificationStatus.PENDING,
  })
  isWorkIdVerified: VerificationStatus;

  @Column({ type: "boolean", default: false })
  subscriptionStatus: boolean;

  @Column({ type: "enum", enum: subscriptionStatus, nullable: true })
  subscriptionType: subscriptionStatus;

  @Column({ nullable: true })
  otpCode: string;

  @Column({ type: "timestamp", nullable: true })
  otpExpiresAt: Date;

  @OneToMany("Medicine", "postedBy")
  medicines: any;

  @OneToMany("Message", "sender")
  messages: any;

  @OneToMany("OTP", "user")
  otps: any;

  @OneToOne("Subscription", "user")
  subscription: any;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
