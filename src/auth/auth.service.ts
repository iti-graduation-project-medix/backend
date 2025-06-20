import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomJwtService } from 'src/common/services/custom-jwt.service';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dtos/signup.dto';
import { SignInDto } from './dtos/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: CustomJwtService,
  ) {}

  async signUp(data: SignUpDto) {
    const isUserExsite = await this.userRepo.findOne({
      where: { email: data.email },
    });
    if (isUserExsite) {
      throw new BadRequestException('invalid credentail');
    }

    const user = await this.userRepo.create({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      password: data.password,
      role: data.role,
      profilePhotoUrl: '',
      idCardUrl: '',
      isIdVerified: true,
      workIdUrl: '',
      isWorkIdVerified: true,
    });

    const token = this.jwtService.generateToken({
      id: user.id,
      role: user.role,
    });

    await this.userRepo.save(user);

    return {
      message: 'Signup successful',
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
      },
      token,
    };
  }

  async signIn(data: SignInDto) {
    const user = await this.userRepo.findOne({ where: { email: data.email } });

    if (!user || user.password !== data.password) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.generateToken({
      id: user.id,
      role: user.role,
    });

    return {
      message: 'Signin successful',
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
      token,
    };
  }
}
