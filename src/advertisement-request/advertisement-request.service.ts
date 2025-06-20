import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdvertisementRequest } from 'src/entities/advertisement-request.entity';
import { Repository } from 'typeorm';
import { CreateAdvertisementRequestDto } from './dtos/create-advertisement-request.dto';
import { UpdateAdvertisementRequestDto } from './dtos/update-advertisement-request.dto';

@Injectable()
export class AdvertisementRequestService {
  constructor(
    @InjectRepository(AdvertisementRequest)
    private adRequestRepo: Repository<AdvertisementRequest>,
  ) {}

  async create(adRequest: CreateAdvertisementRequestDto) {
    const newAdRequest = this.adRequestRepo.create(adRequest);
    return this.adRequestRepo.save(newAdRequest);
  }

  async findAll() {
    return this.adRequestRepo.find();
  }

  async findById(id: number) {
    return this.adRequestRepo.findOneBy({ id });
  }

  async updateAdRequest(
    id: number,
    adRequest: Partial<UpdateAdvertisementRequestDto>,
  ) {
    const isAdRequestExiste = await this.adRequestRepo.findOneBy({ id });

    if (!isAdRequestExiste)
      throw new NotFoundException(
        `Advertisement request with ID ${id} not found`,
      );

    await this.adRequestRepo.update(id, adRequest);
    return this.adRequestRepo.findOneBy({ id });
  }

  async delete(id: number) {
    const isAdRequestExiste = await this.adRequestRepo.findOneBy({ id });

    if (!isAdRequestExiste)
      throw new NotFoundException(
        `Advertisement request with ID ${id} not found`,
      );

    await this.adRequestRepo.delete(id);
    return { message: `Advertisement request with ID ${id} deleted` };
  }
}
