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
exports.ProfileResponse = exports.Visitor = exports.VisitorProfile = void 0;
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
    (0, swagger_1.ApiProperty)({ example: 'I love programming.' }),
    __metadata("design:type", String)
], VisitorProfile.prototype, "bio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: null }),
    __metadata("design:type", String)
], VisitorProfile.prototype, "email", void 0);
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
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], Visitor.prototype, "totalVisitor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [VisitorProfile] }),
    __metadata("design:type", Array)
], Visitor.prototype, "visitors", void 0);
class ProfileResponse {
}
exports.ProfileResponse = ProfileResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 200 }),
    __metadata("design:type", Number)
], ProfileResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], ProfileResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Visitor }),
    __metadata("design:type", Visitor)
], ProfileResponse.prototype, "data", void 0);
//# sourceMappingURL=github.dto.js.map