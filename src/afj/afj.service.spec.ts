import { Test, TestingModule } from '@nestjs/testing';
import { AfjService } from './afj.service';

describe('AfjService', () => {
  let service: AfjService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AfjService],
    }).compile();

    service = module.get<AfjService>(AfjService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
