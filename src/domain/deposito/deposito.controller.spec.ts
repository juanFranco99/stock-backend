import { Test, TestingModule } from '@nestjs/testing';
import { DepositoController } from './deposito.controller';

describe('RegistroDepositoController', () => {
  let controller: DepositoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepositoController],
    }).compile();

    controller = module.get<DepositoController>(DepositoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
