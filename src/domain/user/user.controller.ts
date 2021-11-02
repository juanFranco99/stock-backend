import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { ChangeUserPasswordDto } from './change-user-pass.dto';
import { GenericController } from 'src/shared/Abstract/genericController';
import { User } from './user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('api/v1/user')
export class UserController extends GenericController<User, UserDto>{

    constructor(readonly service: UserService){
        super(service);
    }

    @Post("ChangePassword")
    async changePass(@Body() dto: ChangeUserPasswordDto) {
      const data = await this.service.changePassword(dto);
      return data;
    }
}
