import { classToPlain, Exclude } from "class-transformer";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    login: string;

    @Column()
    @Exclude({ toPlainOnly: true})
    password: string;

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