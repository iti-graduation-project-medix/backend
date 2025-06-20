import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { status, User, VerificationStatus } from "src/entities/user.entity";
import { CustomJwtService } from "src/common/services/custom-jwt.service";
import { SignUpDto } from "./dtos/signup.dto";
import { SignInDto } from "./dtos/signin.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: CustomJwtService
  ) {}

  async signUp(data: SignUpDto) {
    const isUserExist = await this.userRepo.findOne({
      where: { email: data.email },
    });
    if (isUserExist) {
      throw new BadRequestException(
        "Invalid credentials - email already used."
      );
    }

    const user = this.userRepo.create({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      password: data.password,
      //لما تيجي تكمل غير الادمن دي 
      role: status.ADMIN,
      profilePhotoUrl: "",
      idFrontCardUrl: {},
      idBackCardUrl: {},
      isIdVerified: false,
      workIdUrl: "",
      isWorkIdVerified: VerificationStatus.PENDING,
      subscriptionStatus: false,
      subscriptionType: null,
      otpCode: null,
      otpExpiresAt: null,
    });

    await this.userRepo.save(user);

    const token = this.jwtService.generateToken({
      id: user.id,
      role: user.role,
    });

    return {
      message: "Signup successful",
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
    const user = await this.userRepo.findOne({
      where: { email: data.email },
    });

    if (!user || user.password !== data.password) {
      throw new UnauthorizedException("Invalid email or password");
    }

    const token = this.jwtService.generateToken({
      id: user.id,
      role: user.role,
    });

    return {
      message: "Signin successful",
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
