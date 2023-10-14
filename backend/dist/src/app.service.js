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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const octokit_service_1 = require("../modules/octokit/octokit.service");
const visitor_schema_1 = require("../schemas/visitor.schema");
const mongoose_2 = require("mongoose");
const nestjs_pino_1 = require("nestjs-pino");
let AppService = class AppService {
    constructor(octokitService, visitorModel, visitorProfile, logger) {
        this.octokitService = octokitService;
        this.visitorModel = visitorModel;
        this.visitorProfile = visitorProfile;
        this.logger = logger;
    }
    async getUser(username) {
        try {
            const result = await this.octokitService.getUser(username);
            const totalVisitor = await this.visitorModel.findOne({ login: username });
            const visitors = await this.visitorProfile
                .find({ login: username })
                .sort({ createdAt: -1 })
                .limit(3);
            return {
                ...result,
                totalVisitor: totalVisitor?.total ?? 0,
                visitors: visitors,
            };
        }
        catch (err) {
            this.logger.error(JSON.stringify(err));
            throw err;
        }
    }
    async getRepos(username) {
        const result = await this.octokitService.getRepos(username);
        return result;
    }
    async updateTotalVisitor(username) {
        try {
            let visitor = await this.visitorModel.findOne({ login: username });
            if (!visitor) {
                visitor = new this.visitorModel({
                    login: username,
                    total: 1,
                });
            }
            else {
                visitor.total += 1;
            }
            const updatedVisitor = await visitor.save();
            return updatedVisitor;
        }
        catch (err) {
            this.logger.error(JSON.stringify(err));
            throw err;
        }
    }
    async insertTotalVisitor({ login, profile_url, username, avatar_url, }) {
        try {
            const visitorProfile = new this.visitorProfile({
                login,
                username,
                profile_url,
                avatar_url,
            });
            const result = await visitorProfile.save();
            return result;
        }
        catch (err) {
            this.logger.error(JSON.stringify(err));
            throw err;
        }
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(visitor_schema_1.Visitor.name)),
    __param(2, (0, mongoose_1.InjectModel)(visitor_schema_1.VisitorProfile.name)),
    __param(3, (0, nestjs_pino_1.InjectPinoLogger)(AppService.name)),
    __metadata("design:paramtypes", [octokit_service_1.OctokitService,
        mongoose_2.Model,
        mongoose_2.Model,
        nestjs_pino_1.PinoLogger])
], AppService);
//# sourceMappingURL=app.service.js.map