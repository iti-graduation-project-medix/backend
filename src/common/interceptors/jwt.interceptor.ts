import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CustomJwtService } from '../services/custom-jwt.service';

export class JwtInterceptor implements NestInterceptor {
  constructor(private jwtService: CustomJwtService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer '))
      throw new UnauthorizedException(
        'Missing or invalid authorization header',
      );
    const token = authHeader.split(' ')[1];
    try {
      const payload = this.jwtService.verifyToken(token);
      request.user = payload;
      return next.handle();
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
