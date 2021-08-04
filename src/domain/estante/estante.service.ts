import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { EstanteDto } from './estante.dto';
import { Estante } from './estante.entity';

@Injectable()
export class EstanteService {
    constructor(
        @InjectRepository(Estante)
        private readonly repository: Repository<Estante>,
    ){}

    async getAll(){
        return await this.repository.find();
    }

    async getByIdDeposito(depositoId: number){
      const data = getRepository(Estante).createQueryBuilder('estante')
                   .where("estante.depositoId = :depositoId", {depositoId: depositoId}).getMany();
      return data;
    }

    async getById(id: number){
        const estante = await this.repository.findOne(id);
        if(!estante) throw new NotFoundException('estante does not exist');
        return estante;
    }

    async createOne(dto: EstanteDto) {
      console.log(dto);
        const estante = this.repository.create(dto);
        return await this.repository.save(estante);
    }
    
    async editOne(id: number, dto: EstanteDto) {
      const estante = await this.repository.findOne(id);
    
      if (!estante) throw new NotFoundException('Estante does not exist');
    
      const editedEstante = Object.assign(estante, dto);
      return await this.repository.save(editedEstante);
    }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}
