import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from "class-validator";
import { adsRequestStatus } from "src/entities/advertisement-request.entity";

export class UpdateAdvertisementRequestDto {
  @IsString()
  @IsOptional()
  fullName: string;

  @IsPhoneNumber("EG", { message: "Please enter a valid phone number" })
  @IsOptional()
  phone: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsOptional()
  @IsString()
  content: string;

  @IsOptional()
  @IsEnum(adsRequestStatus)
  status: adsRequestStatus;
}
