import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'log_login',
})
export class LogLogin {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 20 })
  ip: string;

  @Column({ length: 50 })
  position: string;

  @Column({ length: 15 })
  createDate: string;
  
  @Column({ length: 50 })
  result: string;
}
