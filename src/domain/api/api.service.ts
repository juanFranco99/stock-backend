import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { Repository, ILike } from "typeorm";
import { User } from '../user/user.entity';
import { Interval } from '@nestjs/schedule';
import { Utils } from "../utils/utils";


const fs = require('fs');


@Injectable()
export class ApiChargeService {

    constructor( @InjectRepository(User) readonly userRep:Repository<User>,private httpServ:HttpService){}


    @Interval(60000)
    handleInterval() {
        Utils.conf.on?this.getItems():false;
    }


    getItems(){
        if(Utils.conf.security === true){
            this.findToken().subscribe({
                next:(result:any) => this.getByToken(result.data.token),
                error:(err:any) => Utils.writeInline("No se pudo authenticar con el API"),
            });  
        }else{
            this.getByToken({});
        }
    }

    getByToken(token:any){
        this.httpServ.get(Utils.conf.ip+"/api/v1/user" , { headers: {"Authorization" : `Bearer ${token}`} }).subscribe({
            next:(result:any) => this.readApi(result.data),
            error:(err:any) => Utils.writeInline("No se pudo obtener los datos del API"),
        });      
    }

    findToken() : Observable<AxiosResponse<any[]>> {
        return this.httpServ.post(Utils.conf.ipAuth+"/api/v1/user",Utils.conf.infoAuth);
    }

    async readApi(items:any){
        let insertados:number=0;
        if(items.length !== 0){
            let procesado:number=0;
            for(let item of items){
                item = Utils.reformCampos(item);
                if((await this.userRep.find({where:{login:ILike(item.login)}})).length == 0){
                  await this.userRep.save(this.userRep.create(Utils.reformData("create",item))).catch(result => Utils.writeInline("item duplicado:"+item.login));
                  insertados++;
                }
                procesado++;
                Utils.processLoading(procesado,items.length);
            }
        }
        insertados == 0? false:Utils.writeInline(insertados+" registros insertados");
        setTimeout(()=>Utils.writeInline(""),5000)
     }


}
