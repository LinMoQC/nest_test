import { Test, TestingModule } from '@nestjs/testing';
import { NiukeService } from './niuke.service';

describe('NiukeService', () => {
  let service: NiukeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NiukeService],
    }).compile();

    service = module.get<NiukeService>(NiukeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
