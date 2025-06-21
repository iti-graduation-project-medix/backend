import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AdvertisementModule } from "./advertisement/advertisement.module";
import { AdvertisementRequestModule } from "./advertisement-request/advertisement-request.module";
import { JwtModule } from "@nestjs/jwt";
import { CustomJwtService } from "./common/services/custom-jwt.service";
import { AuthModule } from "./auth/auth.module";
import { CommonModule } from "./common/common.module";



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: "postgresql://postgres.gahtrqxtwtsqvruzinwy:dawaback123@aws-0-eu-north-1.pooler.supabase.com:6543/postgres",
      autoLoadEntities: true,
      entities: [__dirname + '/entities/*.entity{.ts,.js}'],

      synchronize: true,
      logging: false,
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
export class AppModule { }
