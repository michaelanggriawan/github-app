"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const nestjs_pino_1 = require("nestjs-pino");
const configuration_1 = require("../config/configuration");
const octokit_module_1 = require("../modules/octokit/octokit.module");
const database_module_1 = require("../modules/database/database.module");
const mongoose_1 = require("@nestjs/mongoose");
const visitor_schema_1 = require("../schemas/visitor.schema");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
                envFilePath: '.env',
            }),
            nestjs_pino_1.LoggerModule.forRoot({
                pinoHttp: { level: process.env.prod !== 'prod' ? 'trace' : 'info' },
            }),
            mongoose_1.MongooseModule.forFeature([
                { name: visitor_schema_1.Visitor.name, schema: visitor_schema_1.VisitorSchema },
                { name: visitor_schema_1.VisitorProfile.name, schema: visitor_schema_1.VisitorProfileSchema },
            ]),
            octokit_module_1.OctokitModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map