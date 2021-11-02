import { IsString } from "class-validator";

export class ChangeUserPasswordDto{   

    @IsString()
    login: string;

    @IsString()
    password: string;

    @IsString()
    newPassword: string;
}