import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";

export enum adsRequestStatus {
  INPROGRESS = "in_progress",
  WAITING = "waiting",
  ACCEPTED = "accepted",
  REJECTED = "rejected",
}

@Entity()
export class AdvertisementRequest {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({ type: "text" })
  content: string;

  @Column({
    type: "enum",
    enum: adsRequestStatus,
    default: adsRequestStatus.WAITING,
  })
  status: adsRequestStatus;

  @OneToOne("Advertisement", "advertisementRequest")
  advertisement: any;
}
