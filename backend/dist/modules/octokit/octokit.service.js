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
exports.OctokitService = void 0;
const common_1 = require("@nestjs/common");
const rest_1 = require("@octokit/rest");
const nestjs_pino_1 = require("nestjs-pino");
const config_1 = require("@nestjs/config");
let OctokitService = class OctokitService {
    constructor(logger, configService) {
        this.logger = logger;
        this.configService = configService;
        this.octokit = new rest_1.Octokit({
            auth: this.configService.get('GITHUB_TOKEN'),
        });
    }
    async getUser(username) {
        try {
            const response = await this.octokit.request('GET /users/{username}', {
                username,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28',
                },
            });
            const { login, name, bio, email, avatar_url, html_url } = response.data;
            this.logger.info(JSON.stringify(response.data));
            return {
                login,
                name,
                bio,
                email,
                avatar_url,
                profile_url: html_url,
            };
        }
        catch (err) {
            this.logger.error(err.response.data.message);
            if (err.status === common_1.HttpStatus.NOT_FOUND) {
                throw new common_1.NotFoundException('user is not exist');
            }
            throw new common_1.InternalServerErrorException(err.response.data.message);
        }
    }
    async getRepos(username) {
        try {
            const response = await this.octokit.request('GET /users/{username}/repos', {
                username,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28',
                },
            });
            this.logger.info(JSON.stringify(response.data));
            return response.data.slice(0, 6);
        }
        catch (err) {
            this.logger.error(err.response.data.message);
            if (err.status === common_1.HttpStatus.NOT_FOUND) {
                throw new common_1.NotFoundException('user is not exist');
            }
            throw new common_1.InternalServerErrorException(err.response.data.message);
        }
    }
};
exports.OctokitService = OctokitService;
exports.OctokitService = OctokitService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_pino_1.InjectPinoLogger)(OctokitService.name)),
    __metadata("design:paramtypes", [nestjs_pino_1.PinoLogger,
        config_1.ConfigService])
], OctokitService);
//# sourceMappingURL=octokit.service.js.map