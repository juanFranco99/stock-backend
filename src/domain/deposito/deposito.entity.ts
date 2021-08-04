import { Status } from 'src/enums/status.enum';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Estante } from '../estante/estante.entity';

@Entity('depositos')
export class RegistroDeposito {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 50,
  })
  nombre: string;

  @Column({
    type: 'varchar',
    length: 1,
  })
  status: Status;

  
  @OneToMany(() => Estante, estante => estante.deposito, {
    onDelete: "CASCADE"
  })

  estante: Estante; 

}
