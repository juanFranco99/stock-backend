import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/shared/Abstract/genericService';
import { Status } from 'src/enums/status.enum';
import { Computadora } from './computadoras.entity';
import { ComputadoraDto } from './computadoras.dto';

@Injectable()
export class ComputadoraService<Computadora> extends GenericService<Computadora, ComputadoraDto> {
  constructor(@InjectRepository(Computadora) repository: Repository<Computadora>) {
    super(repository);
  }

  async getActivos(): Promise<Computadora[]> {
    return await this.repository.find({ where: { status: Status.ACTIVO } });
  }

  async getActivoById(id: number): Promise<Computadora> {
    return await this.repository.findOne(id, {
      where: { status: Status.ACTIVO },
    });
  }
}
