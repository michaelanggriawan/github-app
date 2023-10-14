import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OctokitService } from 'modules/octokit/octokit.service';
import {
  Visitor,
  VisitorDocument,
  VisitorProfile,
  VisitorProfileDocument,
} from 'schemas/visitor.schema';
import { Model } from 'mongoose';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService {
  constructor(
    private octokitService: OctokitService,
    @InjectModel(Visitor.name) private visitorModel: Model<VisitorDocument>,
    @InjectModel(VisitorProfile.name)
    private visitorProfile: Model<VisitorProfileDocument>,
    @InjectPinoLogger(AppService.name)
    private readonly logger: PinoLogger,
  ) {}

  async getUser(username: string) {
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
    } catch (err) {
      this.logger.error(JSON.stringify(err));
      throw err;
    }
  }

  async getRepos(username: string) {
    const result = await this.octokitService.getRepos(username);
    return result;
  }

  async updateTotalVisitor(username: string) {
    try {
      let visitor = await this.visitorModel.findOne({ login: username });
      if (!visitor) {
        visitor = new this.visitorModel({
          login: username,
          total: 1,
        });
      } else {
        visitor.total += 1;
      }
      const updatedVisitor = await visitor.save();
      return updatedVisitor;
    } catch (err) {
      this.logger.error(JSON.stringify(err));
      throw err;
    }
  }

  async insertTotalVisitor({
    login,
    profile_url,
    username,
    avatar_url,
  }: {
    login: string;
    profile_url: string;
    username: string;
    avatar_url: string;
  }) {
    try {
      const visitorProfile = new this.visitorProfile({
        login,
        username,
        profile_url,
        avatar_url,
      });

      const result = await visitorProfile.save();

      return result;
    } catch (err) {
      this.logger.error(JSON.stringify(err));
      throw err;
    }
  }
}
