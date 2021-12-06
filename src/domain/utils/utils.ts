import { Logger } from "@nestjs/common";
import { dir } from "console";
var readline = require('readline');

export class Utils{

    static conf={
      on:true,
      security:false,
      ip:"https://api-users-datapar.herokuapp.com",
      ipAuth:"https://api-users-datapar.herokuapp.com",
      infoAuth:{login:"ag", contrasena:"ag1996"},
      campos:{
        username:"login",
     }, 
    }

    static reformData(state:string, item:any){
      state === 'create' ? delete item.id:false;
        for (let i in  item) {
          (typeof item[i] === 'string') && (i !== "login" && i !== "password")?
            item[i] = item[i].toUpperCase():false;
         }
        return item;
      }

    static reformCampos(items:any){
      let target:{[key:string]:any}=items;
      for(let i in target){
        for(let t in this.conf.campos){
          if(i==t){
            target[this.conf.campos[t]]=target[i];
            delete target[i];
          }
        }
      }
      target["fecha_creacion"]? false:target["fecha_creacion"] = new Date();
      target["tipo_user"]? false:target["tipo_user"] = "USUARIO";

      return target;
    }

    static processLoading(state:number,totalLength:number){
      let increment:number = (state * 100)/totalLength ; 
      this.writeInline("Verificando API: "+Math.round(increment)+"%");
      if(increment >= 100){
      this.writeInline("");
      }
    }

    static writeInline(item:any){
      readline.clearLine(process.stdout,0);
      readline.cursorTo(process.stdout, 0, null);
      process.stdout.write(item);
    }
}