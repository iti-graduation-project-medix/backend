import { Test, TestingModule } from '@nestjs/testing';
import { AdvertisementRequestService } from './advertisement-request.service';

describe('AdvertisementRequestService', () => {
  let service: AdvertisementRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdvertisementRequestService],
    }).compile();

    service = module.get<AdvertisementRequestService>(AdvertisementRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
