import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Advertisement } from './advertisement.entity';

@Entity()
export class AdvertisementRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({ type: 'text' })
  content: string;

//   @OneToOne(
//     () => Advertisement,
//     (advertisement) => advertisement.advertisementRequest,
//   )
//   advertisement: Advertisement;
}
