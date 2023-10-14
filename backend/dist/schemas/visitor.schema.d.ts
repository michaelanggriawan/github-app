/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export declare class VisitorProfile {
    login: string;
    username: string;
    avatar_url: string;
    profile_url: string;
}
export type VisitorDocument = Visitor & Document;
export type VisitorProfileDocument = VisitorProfile & Document;
export declare class Visitor {
    login: string;
    total: number;
}
export declare const VisitorProfileSchema: import("mongoose").Schema<VisitorProfile, import("mongoose").Model<VisitorProfile, any, any, any, Document<unknown, any, VisitorProfile> & VisitorProfile & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, VisitorProfile, Document<unknown, {}, import("mongoose").FlatRecord<VisitorProfile>> & import("mongoose").FlatRecord<VisitorProfile> & {
    _id: import("mongoose").Types.ObjectId;
}>;
export declare const VisitorSchema: import("mongoose").Schema<Visitor, import("mongoose").Model<Visitor, any, any, any, Document<unknown, any, Visitor> & Visitor & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Visitor, Document<unknown, {}, import("mongoose").FlatRecord<Visitor>> & import("mongoose").FlatRecord<Visitor> & {
    _id: import("mongoose").Types.ObjectId;
}>;
