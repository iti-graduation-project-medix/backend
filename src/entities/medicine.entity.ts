import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Medicine {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  quantity: number;

  @Column()
  expiryDate: Date;

  @Column()
  isSoldOut: boolean;

  @Column('text', { array: true })
  imagesUrl: string[];

  @ManyToOne('User', 'medicines')
  postedBy: any;

  @CreateDateColumn()
  createdAt: Date;
}
