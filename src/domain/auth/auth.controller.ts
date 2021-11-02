import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDTO } from './login.dto';

@ApiTags('Login')
@Controller('api/v1/login')
export class AuthController {
    
    constructor(private authService: AuthService) {}

    @Post()
    async login(@Body() loginDTO: LoginDTO){
        const { login, password } = loginDTO;
        const valid = await this.authService.validateUser(login, password);
        if (!valid) {
        throw new UnauthorizedException();
        }
        return await this.authService.generateAccessToken(login);
    }
}
