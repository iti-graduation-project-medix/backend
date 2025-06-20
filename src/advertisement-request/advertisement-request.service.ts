import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdvertisementRequest } from "src/entities/advertisement-request.entity";
import { Repository } from "typeorm";
import { CreateAdvertisementRequestDto } from "./dtos/create-advertisement-request.dto";
import { UpdateAdvertisementRequestDto } from "./dtos/update-advertisement-request.dto";

@Injectable()
export class AdvertisementRequestService {
  constructor(
    @InjectRepository(AdvertisementRequest)
    private adRequestRepo: Repository<AdvertisementRequest>
  ) {}

  async create(adRequest: CreateAdvertisementRequestDto) {
    const newAdRequest = this.adRequestRepo.create(adRequest);
    return this.adRequestRepo.save(newAdRequest);
  }

  async findAll() {
    return this.adRequestRepo.find();
  }

  async findById(id: string) {
    return this.adRequestRepo.findOneBy({ id });
  }

  async updateAdRequest(id: string, adRequest: UpdateAdvertisementRequestDto) {
    const isAdRequestExiste = await this.adRequestRepo.findOneBy({ id });

    if (!isAdRequestExiste)
      throw new NotFoundException(
        `Advertisement request with ID ${id} not found`
      );

    if (!adRequest || Object.keys(adRequest).length === 0) {
      throw new BadRequestException("No fields provided for update");
    }

    await this.adRequestRepo.update(id, adRequest);
    return this.adRequestRepo.findOneBy({ id });
  }

  async delete(id: string) {
    const isAdRequestExiste = await this.adRequestRepo.findOneBy({ id });

    if (!isAdRequestExiste)
      throw new NotFoundException(
        `Advertisement request with ID ${id} not found`
      );

    await this.adRequestRepo.delete(id);
    return { message: `Advertisement request with ID ${id} deleted` };
  }
}
