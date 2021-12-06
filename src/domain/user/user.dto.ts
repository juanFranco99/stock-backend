import { IsEnum, IsInt, IsString } from "class-validator";
import { TipoUser } from '../../enums/tipo_user.enum';

export class UserDto {
    
    @IsInt()
    id: number;

    @IsString()
    nombre: string;

    @IsString()
    login: string;

    @IsString()
    password: string;

    @IsEnum(TipoUser)
    tipo_user: TipoUser;

}