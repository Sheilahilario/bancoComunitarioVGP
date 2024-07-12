import { Test, TestingModule } from '@nestjs/testing';
import { GerenteServ } from './gerente.service';

describe('GerenteService', () => {
  let service: GerenteServ;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GerenteServ],
    }).compile();

    service = module.get<GerenteServ>(GerenteServ);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
