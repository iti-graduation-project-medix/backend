import * as jwt from 'jsonwebtoken';
import { User } from 'src/entities/user.entity';

export class Jwt {
  private static readonly JWT_SECRET: string =
    process.env.JWT_SECRET || 'secret';

  static generateToken(
    payload: Partial<User>,
    options?: jwt.SignOptions,
  ): string {
    const signOptions: jwt.SignOptions = {
      ...options,
      expiresIn: '15d',
    };

    return jwt.sign(payload, this.JWT_SECRET, signOptions);
  }

  static verifyToken(token: string) {
    return jwt.verify(token, this.JWT_SECRET);
  }
}
