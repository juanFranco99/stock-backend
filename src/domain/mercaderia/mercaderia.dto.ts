import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString, Length } from 'class-validator';
import { Condicional } from 'src/enums/condicional.enum';
import { Status } from 'src/enums/status.enum';
import { PrimaryColumn } from 'typeorm';

export class MercaderiaDto {
  @IsInt()
  @ApiProperty()
  @PrimaryColumn()
  cod_mercaderia: number;

  @ApiProperty()
  @IsOptional()
  cod_departamento: number;

  @IsInt()
  @ApiProperty()
  cod_envase: number;

  @IsString()
  @ApiProperty()
  @IsOptional()
  cod_fabricante: string;

  @IsInt()
  @ApiProperty()
  cod_subgrupo: number;

  @ApiProperty()
  @IsOptional()
  cod_sucursal: number;

  @IsInt()
  @ApiProperty()
  cod_unidad_medida: number;

  @IsString()
  @Length(13)
  @IsOptional()
  @ApiProperty()
  codigo_barras: string;

  @IsEnum(Condicional, { message: `Condicional invalida` })
  @ApiProperty({ enum: Condicional })
  controlaLoteMercaderia: Condicional;

  @IsString()
  @IsOptional()
  @ApiProperty()
  descripcion: string;

  @IsString()
  @IsOptional()
  envase_desc: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  fabricante_desc: string;

  @IsEnum(Status, { message: `Status invalido` })
  @ApiProperty({ enum: Status })
  situacion: Status;
}
