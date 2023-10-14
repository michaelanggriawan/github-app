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
exports.VisitorSchema = exports.VisitorProfileSchema = exports.Visitor = exports.VisitorProfile = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let VisitorProfile = class VisitorProfile {
};
exports.VisitorProfile = VisitorProfile;
__decorate([
    (0, mongoose_1.Prop)({ required: true, maxlength: 50 }),
    __metadata("design:type", String)
], VisitorProfile.prototype, "login", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, maxlength: 50 }),
    __metadata("design:type", String)
], VisitorProfile.prototype, "username", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VisitorProfile.prototype, "avatar_url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], VisitorProfile.prototype, "profile_url", void 0);
exports.VisitorProfile = VisitorProfile = __decorate([
    (0, mongoose_1.Schema)({ collection: 'visitorProfiles', timestamps: true })
], VisitorProfile);
let Visitor = class Visitor {
};
exports.Visitor = Visitor;
__decorate([
    (0, mongoose_1.Prop)({ required: true, maxlength: 50 }),
    __metadata("design:type", String)
], Visitor.prototype, "login", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Visitor.prototype, "total", void 0);
exports.Visitor = Visitor = __decorate([
    (0, mongoose_1.Schema)({ collection: 'visitors', timestamps: true })
], Visitor);
exports.VisitorProfileSchema = mongoose_1.SchemaFactory.createForClass(VisitorProfile);
exports.VisitorSchema = mongoose_1.SchemaFactory.createForClass(Visitor);
//# sourceMappingURL=visitor.schema.js.map