import { Status } from 'src/enums/status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
