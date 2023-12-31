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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const profile_dto_1 = require("../dtos/profile.dto");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const github_profile_dto_1 = require("../dtos/github-profile.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getProfile(req) {
        const result = this.appService.getUser(req.user.username);
        return result;
    }
    getUser(username) {
        return this.appService.getUser(username);
    }
    getRepos(username) {
        return this.appService.getRepos(username);
    }
    updateTotalVisitor(username) {
        return this.appService.updateTotalVisitor(username);
    }
    insertVisitor(body) {
        return this.appService.insertTotalVisitor({ ...body });
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOkResponse)({ type: github_profile_dto_1.GithubProfileResponse }),
    (0, swagger_1.ApiUnauthorizedResponse)({ type: github_profile_dto_1.UnauthorizedResponse }),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('/:username'),
    (0, swagger_1.ApiOkResponse)({ type: github_profile_dto_1.GithubProfileResponse }),
    (0, swagger_1.ApiNotFoundResponse)({ type: github_profile_dto_1.NotFoundResponse }),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getUser", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: github_profile_dto_1.RepositoryResponse }),
    (0, swagger_1.ApiNotFoundResponse)({ type: github_profile_dto_1.NotFoundResponse }),
    (0, common_1.Get)('/:username/repos'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getRepos", null);
__decorate([
    (0, common_1.Post)('/visitor/:username'),
    (0, swagger_1.ApiCreatedResponse)({ type: github_profile_dto_1.UserStatsResponse }),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "updateTotalVisitor", null);
__decorate([
    (0, common_1.Post)('/visitor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profile_dto_1.ProfileDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "insertVisitor", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)({
        path: 'github',
        version: '1',
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map