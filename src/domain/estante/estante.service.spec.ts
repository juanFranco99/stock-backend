import { Test, TestingModule } from '@nestjs/testing';
import { EstanteService } from './estante.service';

describe('EstanteService', () => {
  let service: EstanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstanteService],
    }).compile();

    service = module.get<EstanteService>(EstanteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
