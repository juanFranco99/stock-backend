import { Module } from '@nestjs/common';
import { MercaderiaService } from './mercaderia.service';
import { MercaderiaController } from './mercaderia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mercaderia } from './mercaderia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mercaderia])],
  controllers: [MercaderiaController],
  providers: [MercaderiaService],
})
export class MercaderiaModule {}
