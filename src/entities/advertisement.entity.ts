import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { AdvertisementRequest } from './advertisement-request.entity';

@Entity()
export class Advertisement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  companyName: string;

  @Column('text')
  content: string;

  @Column('text', { array: true }) // assuming PostgreSQL
  imagesUrl: string[];

  @Column({ nullable: true, type: 'text' })
  imageAlt: string;

  @Column({ type: 'boolean', default: false })
  status: boolean;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  targetPosition: string;

  // @OneToOne(
  //   () => AdvertisementRequest,
  //   (advertisementRequest) => advertisementRequest.advertisement,
  //   { cascade: true },
  // )
  // @JoinColumn() // This is the owning side
  // advertisementRequest: AdvertisementRequest;
}
