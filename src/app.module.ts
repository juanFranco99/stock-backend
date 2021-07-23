import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'scsp',
    entities: [__dirname + './**/**/*entity{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
    logger: 'file',
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
