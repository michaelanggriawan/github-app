import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger, VersioningType } from '@nestjs/common';
import { AllExceptionFilter } from 'interceptors/http-exception.filter.interceptor';
import { HttpSuccessInterceptor } from 'interceptors/http-success.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger as PinoLogger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(PinoLogger));
  app.useGlobalFilters(new AllExceptionFilter(app.get(PinoLogger)));
  app.useGlobalInterceptors(new HttpSuccessInterceptor());
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Github API')
    .setDescription('All Github APIs doc')
    .setVersion('1.0')
    .addTag('github')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('v1/github/docs', app, document);

  await app.listen(configService.get<string>('PORT'));
  Logger.log(`🔵 service listening at ${configService.get<string>('PORT')}`);
}
bootstrap();
