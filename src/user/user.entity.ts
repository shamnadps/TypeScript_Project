import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 15 })
  phoneNumber: string;
}
