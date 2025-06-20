import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class UpdateAdvertisementRequestDto {
  @IsString()
  @IsOptional()
  fullName: string;

  @IsPhoneNumber('EG', { message: 'Please enter a valid phone number' })
  @IsOptional()
  phone: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsOptional()
  @IsString()
  content: string;
}
