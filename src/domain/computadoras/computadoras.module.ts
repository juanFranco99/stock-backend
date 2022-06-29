import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComputadoraController } from './computadoras.controller';
import { Computadora } from './computadoras.entity';
import { ComputadoraService } from './computadoras.service';

@Module({
  imports: [TypeOrmModule.forFeature([Computadora])],
  providers: [ComputadoraService],
  controllers: [ComputadoraController],
})
export class ComputadoraModule {}
