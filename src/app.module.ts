import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MercaderiaModule } from './domain/mercaderia/mercaderia.module';
import { RegistroDepositoModule } from './domain/deposito/deposito.module';
import { EstanteModule } from './domain/estante/estante.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'scsp',
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
    MercaderiaModule,
    RegistroDepositoModule,
    EstanteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
