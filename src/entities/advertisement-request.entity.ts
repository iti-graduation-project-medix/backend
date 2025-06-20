import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export class AdvertisementRequest {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  fullName: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({ type: 'text' })
  content: string;

  @OneToOne('Advertisement', 'advertisementRequest')
  advertisement: any;
}
