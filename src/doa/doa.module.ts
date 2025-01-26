import { Module } from '@nestjs/common';
import { DoaService } from './doa.service';
import { DoaController } from './doa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doa } from './entities/doa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doa])],
  controllers: [DoaController],
  providers: [DoaService],
})
export class DoaModule {}
