"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_exception_filter_interceptor_1 = require("../interceptors/http-exception.filter.interceptor");
const http_success_interceptor_1 = require("../interceptors/http-success.interceptor");
const swagger_1 = require("@nestjs/swagger");
const nestjs_pino_1 = require("nestjs-pino");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useLogger(app.get(nestjs_pino_1.Logger));
    app.useGlobalFilters(new http_exception_filter_interceptor_1.AllExceptionFilter(app.get(nestjs_pino_1.Logger)));
    app.useGlobalInterceptors(new http_success_interceptor_1.HttpSuccessInterceptor());
    app.enableCors();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Github API')
        .setDescription('All Github APIs doc')
        .setVersion('1.0')
        .addTag('github')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('v1/github/docs', app, document);
    await app.listen(configService.get('PORT'));
    common_1.Logger.log(`🔵 service listening at ${configService.get('PORT')}`);
}
bootstrap();
//# sourceMappingURL=main.js.map