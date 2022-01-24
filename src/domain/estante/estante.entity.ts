import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsString, Length, IsEnum } from 'class-validator';
import { Status } from 'src/enums/status.enum';
import { Deposito } from '../deposito/deposito.entity';

@Entity()
export class Estante {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  status: Status;

  @ManyToOne(() => Deposito, (deposito) => deposito.estante, {
    eager: true,
    onDelete: 'CASCADE',
  })
  
  @JoinColumn()
  deposito: Deposito;
}
