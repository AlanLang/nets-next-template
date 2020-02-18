import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'db_user',
})
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 50 })
  password: string;

  @Column('int')
  isDelete: number;
}
