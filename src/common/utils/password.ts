import * as bcrypt from 'bcrypt';

export class Password {
  static async hash(plainPassword: string) {
    return bcrypt.hash(plainPassword, process.env.SALT_ROUND!);
  }

  static async compare(plainPassword: string, hashedPassword: string) {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}
