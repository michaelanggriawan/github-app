"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const nestjs_pino_1 = require("nestjs-pino");
const DEFAULT_ERROR_MESSAGE = 'Something went wrong on our end, please try again';
let AllExceptionFilter = class AllExceptionFilter {
    constructor(logger) {
        this.logger = logger;
    }
    logError(status, errorMessage) {
        if (status >= 500) {
            this.logger.error(errorMessage);
        }
        else {
            this.logger.warn(errorMessage);
        }
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        if (!exception || typeof exception.getStatus !== 'function') {
            return response.status(500).json({
                statusCode: 500,
                success: false,
                errors: [{ message: DEFAULT_ERROR_MESSAGE }],
            });
        }
        const status = exception.getStatus();
        const errorMessage = exception.getResponse()?.message ||
            exception.message ||
            DEFAULT_ERROR_MESSAGE;
        this.logError(status, errorMessage);
        let handleErrorMessageResponse = [];
        if (typeof errorMessage === 'string') {
            handleErrorMessageResponse = [{ message: errorMessage }];
        }
        else if (Array.isArray(errorMessage)) {
            handleErrorMessageResponse = errorMessage.map((message) => {
                return { message };
            });
        }
        response.status(status).json({
            statusCode: status,
            success: false,
            errors: exception.getResponse()?.errors ?? handleErrorMessageResponse,
        });
    }
};
exports.AllExceptionFilter = AllExceptionFilter;
exports.AllExceptionFilter = AllExceptionFilter = __decorate([
    (0, common_1.Catch)(),
    __param(0, (0, nestjs_pino_1.InjectPinoLogger)(AllExceptionFilter.name)),
    __metadata("design:paramtypes", [nestjs_pino_1.PinoLogger])
], AllExceptionFilter);
//# sourceMappingURL=http-exception.filter.interceptor.js.map