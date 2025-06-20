import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AdvertisementRequestService } from './advertisement-request.service';
import { CreateAdvertisementRequestDto } from './dtos/create-advertisement-request.dto';
import { UpdateAdvertisementRequestDto } from './dtos/update-advertisement-request.dto';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';

@Controller('advertisement-request')
export class AdvertisementRequestController {
  constructor(private adReqService: AdvertisementRequestService) {}

  @Get()
  getAllAdvertisementRequests() {
    return this.adReqService.findAll();
  }

  @Get('/:id')
  getAdvertisementRequestById(@Param('id', ParseIntPipe) id: number) {
    return this.adReqService.findById(id);
  }

  @Post()
  createNewAdRequest(@Body() adRequestBody: CreateAdvertisementRequestDto) {
    return this.adReqService.create(adRequestBody);
  }

  @Patch('/:id')
  @Put('/:id')
  updateAdRequest(
    @Param('id', ParseIntPipe) id: number,
    updatedField: UpdateAdvertisementRequestDto,
  ) {
    return this.updateAdRequest(id, updatedField);
  }

  @UseGuards(RolesGuard)
  @Roles('admin')
  @Delete('/:id')
  deleteAdRequest(@Param('id', ParseIntPipe) id: number) {
    return this.deleteAdRequest(id);
  }
}
