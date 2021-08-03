import { Condicional } from 'src/enums/condicional.enum';
import { Status } from 'src/enums/status.enum';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class Mercaderia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cod_departamento: number;

  @Column()
  cod_envase: number;

  @Column()
  cod_fabricante: string;

  @Column({ unique: true })
  @Unique(['uq_mercaderia_cod_mercaderia'])
  cod_mercaderia: number;

  @Column()
  cod_sugrupo: number;

  @Column()
  cod_sucursal: number;

  @Column()
  cod_unidad_medida: number;

  @Column()
  codigo_barras: string;

  @Column({ length: 1 })
  controla_lote_mercaderia: Condicional;

  @Column()
  descripcion: string;

  @Column()
  envase_desc: string;

  @Column()
  fabricante_desc: string;

  @Column({ length: 1 })
  status: Status;
}
