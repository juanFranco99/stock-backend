import { Type } from 'class-transformer';
import { IsNotEmpty, IsObject, IsOptional, IsString, Length, IsEnum } from 'class-validator';
import { Status } from 'src/enums/status.enum';
import { RegistroDeposito } from '../deposito/deposito.entity';


export class EstanteDto {

    @Length(5)
    @IsString()
    nombre: string;

    @IsEnum(Status)
    status: Status;

    @IsNotEmpty()
    deposito: RegistroDeposito;

}