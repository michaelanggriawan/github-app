import { ConfigService } from '@nestjs/config';
import { Profile } from 'passport-github';
declare const GithubStrategy_base: new (...args: any[]) => any;
export declare class GithubStrategy extends GithubStrategy_base {
    constructor(configService: ConfigService);
    validate(accessToken: string, _refreshToken: string, profile: Profile): Promise<Profile>;
}
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: any): Promise<{
        id: any;
        username: any;
    }>;
}
export {};
