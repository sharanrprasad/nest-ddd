import { Test, TestingModule } from '@nestjs/testing';
import { PatronService } from './patron.service';

describe('LendingService', () => {
  let service: PatronService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatronService],
    }).compile();

    service = module.get<PatronService>(PatronService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
