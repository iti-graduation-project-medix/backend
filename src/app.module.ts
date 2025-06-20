import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { AdvertisementRequestModule } from './advertisement-request/advertisement-request.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtService } from './common/services/jwt.service';

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
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '15d' },
    }),
    AdvertisementModule,
    AdvertisementRequestModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService],
  exports: [JwtService],
})
export class AppModule {}
