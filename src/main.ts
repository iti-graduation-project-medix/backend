import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { JwtService } from './common/services/jwt.service';
import { JwtInterceptor } from './common/interceptors/jwt.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const jwtService = app.get(JwtService);

  app.useGlobalInterceptors({
    intercept(context, next) {
      const controller = context.getClass().name;

      if (controller === 'AuthController') {
        return next.handle();
      }
      const interceptor = new JwtInterceptor(jwtService);
      return interceptor.intercept(context, next);
    },
  });

  app.setGlobalPrefix('/api/v1');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
