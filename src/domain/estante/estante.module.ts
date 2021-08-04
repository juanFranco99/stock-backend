import { Module } from '@nestjs/common';
import { EstanteController } from './estante.controller';
import { EstanteService } from './estante.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estante } from './estante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estante])],
  controllers: [EstanteController],
  providers: [EstanteService]
})
export class EstanteModule {}
