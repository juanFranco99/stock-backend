import { IsEnum, IsInt, IsString } from "class-validator";

export class UserDto {
    
    @IsInt()
    id: number;

    @IsString()
    nombre: string;

    @IsString()
    login: string;

    @IsString()
    password: string;

}