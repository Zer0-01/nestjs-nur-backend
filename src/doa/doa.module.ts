import { Module } from '@nestjs/common';
import { DoaService } from './doa.service';
import { DoaController } from './doa.controller';

@Module({
  controllers: [DoaController],
  providers: [DoaService],
})
export class DoaModule {}
