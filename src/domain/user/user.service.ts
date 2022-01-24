import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { GenericService } from '../../shared/Abstract/genericService';
import { UserDto } from './user.dto';
import { ChangeUserPasswordDto } from './change-user-pass.dto';

@Injectable()
export class UserService extends GenericService<User>{
    constructor(
        @InjectRepository(User)
        readonly repository:Repository<User>
    ){
        super(repository);
    }

    async getAll(){
        return await this.repository.find();
    }

    async getUserByLogin(login:string){
        return await this.repository.findOne({login});
    }

    async changePassword(dto:ChangeUserPasswordDto){
        const user = await this.repository.findOne({login:dto.login});
        if(user && await user.validatePassword(dto.password)){
            const editUser = Object.assign(user,{password:dto.newPassword});
            return await this.repository.save(editUser);
        }else{
            throw new NotFoundException('User dont exist or password incorrect');
        }
    }
}
