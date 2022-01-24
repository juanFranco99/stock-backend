import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsString } from "class-validator";
import { TipoUser } from '../../enums/tipo_user.enum';

export class UserDto {
    
    @IsInt()
    id: number;

    @ApiProperty()
    @IsString()
    nombre: string;

    @ApiProperty()
    @IsString()
    login: string;

    @ApiProperty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsEnum(TipoUser)
    tipo_user: TipoUser;

}