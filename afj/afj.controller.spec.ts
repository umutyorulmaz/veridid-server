import { Test, TestingModule } from '@nestjs/testing';
import { AfjController } from './afj.controller';

describe('AfjController', () => {
  let controller: AfjController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AfjController],
    }).compile();

    controller = module.get<AfjController>(AfjController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
