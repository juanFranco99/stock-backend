// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { DepositoDto } from './deposito.dto';
// import { RegistroDeposito } from './deposito.entity';

// @Injectable()
// export class RegistroDepositoService {

//   constructor(
//     @InjectRepository(RegistroDeposito)
//     private readonly repository: Repository<RegistroDeposito>,
//   ) {}

//   async getAll() {
//     return await this.repository.find();
//   }

//   async getById(id: number) {
//     return await this.repository.findOne(id);
//   }

//   async createOne(dto: DepositoDto) {
//     const newRow: RegistroDeposito = this.repository.create(dto);
//     return await this.repository.save(newRow);
//   }

//   async editOne(id: number, dto: DepositoDto) {
//     const row = await this.repository.findOne(id);

//     if (!row) throw new NotFoundException('Registro inexistente.');
//     await this.repository.update(id, dto);

//     const data = await this.repository.findOne(id);
//     return { data };
//   }

//   async deleteOne(id: number) {
//     const row = await this.repository.findOne(id);
//     if (!row) throw new NotFoundException('Registro inexistente.');
//     await this.repository.delete(id);
//     return row;
//   }
// }

import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/shared/Abstract/genericService';
import { Deposito } from './deposito.entity';

@Injectable()
export class DepositoService<Deposito> extends GenericService<Deposito> {
  constructor(@InjectRepository(Deposito) repository: Repository<Deposito>) {
    super(repository);
  }
}
