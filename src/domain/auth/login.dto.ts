import { IsString } from 'class-validator';
export class LoginDTO {

    @IsString()
    login: string;

    @IsString()
    password: string;
  }