import { Module } from '@nestjs/common';
import { DepositoService } from './deposito.service';
import { DepositoController } from './deposito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deposito } from './deposito.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deposito])],
  providers: [DepositoService],
  controllers: [DepositoController],
})
export class DepositoModule {}
