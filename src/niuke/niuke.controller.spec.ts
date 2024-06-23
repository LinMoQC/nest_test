import { Test, TestingModule } from '@nestjs/testing';
import { NiukeController } from './niuke.controller';

describe('NiukeController', () => {
  let controller: NiukeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NiukeController],
    }).compile();

    controller = module.get<NiukeController>(NiukeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
