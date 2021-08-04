import { Module } from '@nestjs/common';
import { RegistroDepositoService } from './deposito.service';
import { RegistroDepositoController } from './deposito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroDeposito } from './deposito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroDeposito])],
  providers: [RegistroDepositoService],
  controllers: [RegistroDepositoController]
})
export class RegistroDepositoModule {}
