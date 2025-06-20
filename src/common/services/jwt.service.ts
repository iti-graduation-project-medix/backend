import { User } from 'src/entities/user.entity';
import { JwtService as NestJwtService, JwtSignOptions } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtService {
  constructor(private readonly jwt: NestJwtService) {}

  generateToken(payload: Partial<User>, options?: JwtSignOptions): string {
    return this.jwt.sign(payload, {
      expiresIn: '15d',
      ...options,
    });
  }

  verifyToken<T = any>(token: string): T {
    return this.jwt.verify(token) as T;
  }
}
