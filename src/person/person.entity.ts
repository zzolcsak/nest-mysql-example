import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  age: number;

  @Column({ length: 500 })
  name: string;

  @Column('date')
  birthday: Date;
}