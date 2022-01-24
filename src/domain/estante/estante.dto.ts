import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import { Status } from '../../enums/status.enum';
import { Deposito } from '../deposito/deposito.entity';

export class EstanteDto{   

    @Length(1)
    @ApiProperty()
    @IsString()
    nombre: string;

    @ApiProperty({ enum: Status })
    @IsEnum(Status)
    status: Status;

    @ApiProperty()
    @IsNotEmpty()
    deposito: Deposito;

}