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
} from "@nestjs/common";
import { AdvertisementRequestService } from "./advertisement-request.service";
import { CreateAdvertisementRequestDto } from "./dtos/create-advertisement-request.dto";
import { UpdateAdvertisementRequestDto } from "./dtos/update-advertisement-request.dto";
import { RolesGuard } from "src/common/guards/roles.guard";
import { Roles } from "src/common/decorators/roles.decorator";
import { JwtAuthGuard } from "src/common/guards/jwt-auth.guard";

@Controller("advertisement-request")
export class AdvertisementRequestController {
  constructor(private adReqService: AdvertisementRequestService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @Get()
  getAllAdvertisementRequests() {
    return this.adReqService.findAll();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @Get("/:id")
  getAdvertisementRequestById(@Param("id") id: string) {
    return this.adReqService.findById(id);
  }

  @Post()
  createNewAdRequest(@Body() adRequestBody: CreateAdvertisementRequestDto) {
    return this.adReqService.create(adRequestBody);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @Put("/:id")
  updateAdRequest(
    @Param("id") id: string,
    @Body() updatedField: UpdateAdvertisementRequestDto
  ) {
    return this.adReqService.updateAdRequest(id, updatedField);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("admin")
  @Delete("/:id")
  deleteAdRequest(@Param("id") id: string) {
    return this.adReqService.delete(id);
  }
}
