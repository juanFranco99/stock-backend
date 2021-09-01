import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/shared/Abstract/genericService';
import { Estante } from './estante.entity';

@Injectable()
export class EstanteService<Estante> extends GenericService<Estante> {

  constructor(@InjectRepository(Estante) repository: Repository<Estante>) {
    super(repository);
  }

  async getByIdDeposito(depositoId: number) {
    const data = getRepository(Estante)
      .createQueryBuilder('estante')
      .where('estante.depositoId = :depositoId', { depositoId: depositoId })
      .getMany();
    return data;
  }
  
}