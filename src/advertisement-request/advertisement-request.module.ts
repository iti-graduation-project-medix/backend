import { Module } from '@nestjs/common';
import { AdvertisementRequestController } from './advertisement-request.controller';
import { AdvertisementRequestService } from './advertisement-request.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertisementRequest } from 'src/entities/advertisement-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdvertisementRequest])],
  controllers: [AdvertisementRequestController],
  providers: [AdvertisementRequestService],
})
export class AdvertisementRequestModule {}
