import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { Match } from 'src/common/validators/match.decorator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsPhoneNumber('EG', { message: 'please enter a valid phone number ' })
  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @Match('password')
  confirmPassword: string;

  @IsEnum(['admin', 'user', 'pharmacist'], {
    message: 'Role must be admin, user, or pharmacist',
  })
  role: 'admin' | 'user' | 'pharmacist';
}
