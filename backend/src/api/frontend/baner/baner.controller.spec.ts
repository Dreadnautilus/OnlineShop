import { Test, TestingModule } from '@nestjs/testing';
import { BanerController } from './baner.controller';

describe('BanerController', () => {
  let controller: BanerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BanerController],
    }).compile();

    controller = module.get<BanerController>(BanerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
