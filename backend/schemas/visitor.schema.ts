import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'visitorProfiles', timestamps: true })
export class VisitorProfile {
  @Prop({ required: true, maxlength: 50 })
  login: string;

  @Prop({ required: true, maxlength: 50 })
  username: string;

  @Prop({ required: true })
  avatar_url: string;

  @Prop({ required: true })
  profile_url: string;
}

export type VisitorDocument = Visitor & Document;

export type VisitorProfileDocument = VisitorProfile & Document;

@Schema({ collection: 'visitors', timestamps: true })
export class Visitor {
  @Prop({ required: true, maxlength: 50 })
  login: string;

  @Prop({ required: true, default: 0 })
  total: number;
}

export const VisitorProfileSchema =
  SchemaFactory.createForClass(VisitorProfile);
export const VisitorSchema = SchemaFactory.createForClass(Visitor);
