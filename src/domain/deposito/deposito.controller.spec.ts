import { Test, TestingModule } from '@nestjs/testing';
import { RegistroDepositoController } from './deposito.controller';

describe('RegistroDepositoController', () => {
  let controller: RegistroDepositoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroDepositoController],
    }).compile();

    controller = module.get<RegistroDepositoController>(RegistroDepositoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
