import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateAdvertisementRequestDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsPhoneNumber('EG', { message: 'Please enter a valid phone number' })
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsString()
  content: string;
}
