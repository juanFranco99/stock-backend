import { Test, TestingModule } from '@nestjs/testing';
import { MercaderiaService } from './mercaderia.service';

describe('MercaderiaService', () => {
  let service: MercaderiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MercaderiaService],
    }).compile();

    service = module.get<MercaderiaService>(MercaderiaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
