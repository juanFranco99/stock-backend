import { classToPlain, Exclude } from "class-transformer";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { TipoUser } from '../../enums/tipo_user.enum';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column()
    @Exclude({ toPlainOnly: true})
    password: string;

    @Column()
    tipo_user: TipoUser;

    toJSON(){
        return classToPlain(this);
    }

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
      if(!this.password){
        this.password = this.login;
      }
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }

    async validatePassword(password: string){
        return await bcrypt.compareSync(password, this.password);
      }

}