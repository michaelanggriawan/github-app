import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import configuration from 'config/configuration';
import { OctokitModule } from 'modules/octokit/octokit.module';
import { DatabaseModule } from '../modules/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Visitor,
  VisitorProfile,
  VisitorProfileSchema,
  VisitorSchema,
} from 'schemas/visitor.schema';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: '.env',
    }),
    LoggerModule.forRoot({
      pinoHttp: { level: process.env.prod !== 'prod' ? 'trace' : 'info' },
    }),
    MongooseModule.forFeature([
      { name: Visitor.name, schema: VisitorSchema },
      { name: VisitorProfile.name, schema: VisitorProfileSchema },
    ]),
    OctokitModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
