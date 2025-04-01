import { Test, TestingModule } from '@nestjs/testing';
import { MosqueController } from './mosque.controller';
import { MosqueService } from './mosque.service';

describe('MosqueController', () => {
  let controller: MosqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MosqueController],
      providers: [MosqueService],
    }).compile();

    controller = module.get<MosqueController>(MosqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
