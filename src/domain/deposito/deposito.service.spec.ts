import { Test, TestingModule } from '@nestjs/testing';
import { RegistroDepositoService } from './deposito.service';

describe('RegistroDepositoService', () => {
  let service: RegistroDepositoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroDepositoService],
    }).compile();

    service = module.get<RegistroDepositoService>(RegistroDepositoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
