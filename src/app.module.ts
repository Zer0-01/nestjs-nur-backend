import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoaModule } from './doa/doa.module';
import { Doa } from './doa/entities/doa.entity';
import { MosqueModule } from './mosque/mosque.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      entities: [Doa],
      username: 'postgres',
      password: 'Blackkuro01#',
      database: 'Nur',
      synchronize: true,
      logging: true,
    }),
    DoaModule,
    MosqueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
