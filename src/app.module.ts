import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { AdvertisementRequestModule } from './advertisement-request/advertisement-request.module';
import { JwtModule } from '@nestjs/jwt';
import { CustomJwtService } from './common/services/custom-jwt.service';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT!),
      username: process.env.DB_USERNAME,
      password: String(process.env.DB_PASSWORD),
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      entities: [__dirname + '/entities/*.entity{.ts,.js}'],

      synchronize: true,
      logging: true,
    }),
    AdvertisementModule,
    AdvertisementRequestModule,
    AuthModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
