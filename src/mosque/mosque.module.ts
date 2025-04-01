import { Module } from '@nestjs/common';
import { MosqueService } from './mosque.service';
import { MosqueController } from './mosque.controller';

@Module({
  controllers: [MosqueController],
  providers: [MosqueService],
})
export class MosqueModule {}
