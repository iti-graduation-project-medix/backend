import { Module } from "@nestjs/common";
import { AdvertisementRequestController } from "./advertisement-request.controller";
import { AdvertisementRequestService } from "./advertisement-request.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdvertisementRequest } from "src/entities/advertisement-request.entity";
import { CustomJwtService } from "src/common/services/custom-jwt.service";
import { CommonModule } from "src/common/common.module";


@Module({
  imports: [TypeOrmModule.forFeature([AdvertisementRequest]), CommonModule],
  controllers: [AdvertisementRequestController],
  providers: [AdvertisementRequestService],
})
export class AdvertisementRequestModule {}
