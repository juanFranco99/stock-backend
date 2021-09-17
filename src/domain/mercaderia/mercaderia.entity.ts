import { IsOptional } from 'class-validator';
import { Condicional } from 'src/enums/condicional.enum';
import { Status } from 'src/enums/status.enum';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Mercaderia {
  @PrimaryColumn()
  cod_mercaderia: number;

  @Column({ nullable: true })
  cod_departamento: number;

  @Column()
  cod_envase: number;

  @Column({ nullable: true })
  cod_fabricante: string;

  @Column()
  cod_subgrupo: number;

  @Column(IsOptional)
  cod_sucursal: number;

  @Column()
  cod_unidad_medida: number;

  @Column({ nullable: true })
  codigo_barras: string;

  @Column({ length: 1 })
  controlaLoteMercaderia: Condicional;

  @Column()
  descripcion: string;

  @Column()
  envase_desc: string;

  @Column({ nullable: true })
  fabricante_desc: string;

  @Column({ length: 1 })
  situacion: Status;
}
