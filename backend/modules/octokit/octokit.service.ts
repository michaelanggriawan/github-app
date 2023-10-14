import {
  HttpStatus,
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Octokit } from '@octokit/rest';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OctokitService {
  private octokit: Octokit;

  constructor(
    @InjectPinoLogger(OctokitService.name)
    private readonly logger: PinoLogger,
    private configService: ConfigService,
  ) {
    this.octokit = new Octokit({
      auth: this.configService.get<string>('GITHUB_TOKEN'),
    });
  }

  async getUser(username: string): Promise<{
    login: string;
    name: string;
    bio: string;
    email: string;
    avatar_url: string;
    profile_url: string;
  }> {
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
    } catch (err) {
      this.logger.error(err.response.data.message);
      if (err.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException('user is not exist');
      }
      throw new InternalServerErrorException(err.response.data.message);
    }
  }

  async getRepos(username: string) {
    try {
      const response = await this.octokit.request(
        'GET /users/{username}/repos',
        {
          username,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        },
      );

      this.logger.info(JSON.stringify(response.data));
      return response.data.slice(0, 3);
    } catch (err) {
      this.logger.error(err.response.data.message);
      if (err.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException('user is not exist');
      }
      throw new InternalServerErrorException(err.response.data.message);
    }
  }
}
