import { Test, TestingModule } from '@nestjs/testing';
import { AdvertisementRequestController } from './advertisement-request.controller';

describe('AdvertisementRequestController', () => {
  let controller: AdvertisementRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdvertisementRequestController],
    }).compile();

    controller = module.get<AdvertisementRequestController>(AdvertisementRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
