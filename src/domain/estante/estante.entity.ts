import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Entity, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsString, Length, IsEnum } from 'class-validator';
import { Status } from 'src/enums/status.enum';
import { Deposito } from '../deposito/deposito.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Estante {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    type: 'string',
    maxLength: 5,
  })
  @Length(5)
  @IsString()
  @Column()
  nombre: string;

  @ApiProperty({
    enum: Status,
  })
  @IsEnum(Status)
  @Column()
  status: Status;

  @ManyToOne(() => Deposito, (deposito) => deposito.estante, {
    eager: true,
    onDelete: 'CASCADE',
  })
  @IsNotEmpty()
  @JoinColumn()
  deposito: Deposito;
}
