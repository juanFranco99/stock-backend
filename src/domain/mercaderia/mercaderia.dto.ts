import { IsEnum, IsInt, IsOptional, IsString, Length } from 'class-validator';
import { Condicional } from 'src/enums/condicional.enum';
import { Status } from 'src/enums/status.enum';

export class MercaderiaDto {
  @IsInt()
  cod_departamento: number;

  @IsInt()
  cod_envase: number;

  @IsString()
  cod_fabricante: string;

  @IsInt()
  cod_mercaderia: number;

  @IsInt()
  cod_sugrupo: number;

  @IsInt()
  cod_sucursal: number;

  @IsInt()
  cod_unidad_medida: number;

  @IsString()
  @Length(13)
  @IsOptional()
  codigo_barras: string;

  @IsEnum(Condicional, { message: `Condicional invalida` })
  controla_lote_mercaderia: Condicional;

  @IsString()
  @IsOptional()
  descripcion: string;

  @IsString()
  @IsOptional()
  envase_desc: string;

  @IsString()
  @IsOptional()
  fabricante_desc: string;

  @IsEnum(Status, { message: `Status invalido` })
  status: Status;
}
