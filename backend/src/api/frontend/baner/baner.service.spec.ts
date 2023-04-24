import { Test, TestingModule } from '@nestjs/testing';
import { BanerService } from './baner.service';

describe('BanerService', () => {
  let service: BanerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BanerService],
    }).compile();

    service = module.get<BanerService>(BanerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
