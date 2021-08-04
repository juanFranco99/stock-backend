import { Column, PrimaryGeneratedColumn, Entity, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { ApiTags } from '@nestjs/swagger';
import { RegistroDeposito } from '../deposito/deposito.entity';
import { Status } from "src/enums/status.enum";


@Entity()
export class Estante {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string
    
    @Column()
    status: Status;

    @ManyToOne(() => RegistroDeposito, deposito => deposito.estante,{
        eager: true, 
        onDelete: "CASCADE"
    })
    
    @JoinColumn()
    deposito: RegistroDeposito;

}