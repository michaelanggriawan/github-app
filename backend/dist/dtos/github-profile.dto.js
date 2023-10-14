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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStatsResponse = exports.UserStats = exports.RepositoryResponse = exports.Repository = exports.Owner = exports.NotFoundResponse = exports.ErrorMessageUserNotExist = exports.UnauthorizedResponse = exports.ErrorMessageUnauthorized = exports.GithubProfileResponse = exports.Visitor = exports.VisitorProfile = void 0;
const swagger_1 = require("@nestjs/swagger");
class VisitorProfile {
}
exports.VisitorProfile = VisitorProfile;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'michaelanggriawan' }),
    __metadata("design:type", String)
], VisitorProfile.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Michael Anggriawan' }),
    __metadata("design:type", String)
], VisitorProfile.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://avatars.githubusercontent.com/u/37749891?v=4' }),
    __metadata("design:type", String)
], VisitorProfile.prototype, "avatar_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://github.com/michaelanggriawan' }),
    __metadata("design:type", String)
], VisitorProfile.prototype, "profile_url", void 0);
class Visitor {
}
exports.Visitor = Visitor;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'michaelanggriawan' }),
    __metadata("design:type", String)
], Visitor.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Michael Anggriawan' }),
    __metadata("design:type", String)
], Visitor.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'I love programming.' }),
    __metadata("design:type", String)
], Visitor.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", String)
], Visitor.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://avatars.githubusercontent.com/u/37749891?v=4' }),
    __metadata("design:type", String)
], Visitor.prototype, "avatar_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://github.com/michaelanggriawan' }),
    __metadata("design:type", String)
], Visitor.prototype, "profile_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], Visitor.prototype, "totalVisitor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [VisitorProfile] }),
    __metadata("design:type", Array)
], Visitor.prototype, "visitors", void 0);
class GithubProfileResponse {
}
exports.GithubProfileResponse = GithubProfileResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200 }),
    __metadata("design:type", Number)
], GithubProfileResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], GithubProfileResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Visitor }),
    __metadata("design:type", Visitor)
], GithubProfileResponse.prototype, "data", void 0);
class ErrorMessageUnauthorized {
}
exports.ErrorMessageUnauthorized = ErrorMessageUnauthorized;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Unauthorized' }),
    __metadata("design:type", String)
], ErrorMessageUnauthorized.prototype, "message", void 0);
class UnauthorizedResponse {
}
exports.UnauthorizedResponse = UnauthorizedResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 401 }),
    __metadata("design:type", Number)
], UnauthorizedResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], UnauthorizedResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ErrorMessageUnauthorized] }),
    __metadata("design:type", Array)
], UnauthorizedResponse.prototype, "errors", void 0);
class ErrorMessageUserNotExist {
}
exports.ErrorMessageUserNotExist = ErrorMessageUserNotExist;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user is not exist' }),
    __metadata("design:type", String)
], ErrorMessageUserNotExist.prototype, "message", void 0);
class NotFoundResponse {
}
exports.NotFoundResponse = NotFoundResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 404 }),
    __metadata("design:type", Number)
], NotFoundResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], NotFoundResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [ErrorMessageUserNotExist] }),
    __metadata("design:type", Array)
], NotFoundResponse.prototype, "errors", void 0);
class Owner {
}
exports.Owner = Owner;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'michaelanggriawan' }),
    __metadata("design:type", String)
], Owner.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 37749891 }),
    __metadata("design:type", Number)
], Owner.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'MDQ6VXNlcjM3NzQ5ODkx' }),
    __metadata("design:type", String)
], Owner.prototype, "node_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://avatars.githubusercontent.com/u/37749891?v=4' }),
    __metadata("design:type", String)
], Owner.prototype, "avatar_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://github.com/michaelanggriawan' }),
    __metadata("design:type", String)
], Owner.prototype, "url", void 0);
class Repository {
}
exports.Repository = Repository;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 704079598 }),
    __metadata("design:type", Number)
], Repository.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'R_kgDOKfdm7g' }),
    __metadata("design:type", String)
], Repository.prototype, "node_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'atask' }),
    __metadata("design:type", String)
], Repository.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'michaelanggriawan/atask' }),
    __metadata("design:type", String)
], Repository.prototype, "full_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], Repository.prototype, "private", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Owner }),
    __metadata("design:type", Owner)
], Repository.prototype, "owner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://github.com/michaelanggriawan/atask' }),
    __metadata("design:type", String)
], Repository.prototype, "html_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Create a note app by using react native expo to finish atask assignment' }),
    __metadata("design:type", String)
], Repository.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    __metadata("design:type", Boolean)
], Repository.prototype, "fork", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://api.github.com/repos/michaelanggriawan/atask' }),
    __metadata("design:type", String)
], Repository.prototype, "url", void 0);
class RepositoryResponse {
}
exports.RepositoryResponse = RepositoryResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200 }),
    __metadata("design:type", Number)
], RepositoryResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], RepositoryResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true, type: Repository }),
    __metadata("design:type", Array)
], RepositoryResponse.prototype, "data", void 0);
class UserStats {
}
exports.UserStats = UserStats;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '652a4742d8c95b2e8dc8b580' }),
    __metadata("design:type", String)
], UserStats.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'michaelanggriawan' }),
    __metadata("design:type", String)
], UserStats.prototype, "login", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    __metadata("design:type", Number)
], UserStats.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-14T07:46:10.746Z' }),
    __metadata("design:type", String)
], UserStats.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-14T13:28:41.950Z' }),
    __metadata("design:type", String)
], UserStats.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    __metadata("design:type", Number)
], UserStats.prototype, "__v", void 0);
class UserStatsResponse {
}
exports.UserStatsResponse = UserStatsResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 201 }),
    __metadata("design:type", Number)
], UserStatsResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], UserStatsResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: UserStats }),
    __metadata("design:type", UserStats)
], UserStatsResponse.prototype, "data", void 0);
//# sourceMappingURL=github-profile.dto.js.map