import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  color: string;

  @Column()
  engine_displacement: number;

  @Column()
  mileage: number;

  @Column()
  year: number;
}