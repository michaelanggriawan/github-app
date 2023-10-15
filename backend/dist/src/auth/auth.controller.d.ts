import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthController {
    private jwtService;
    private configService;
    constructor(jwtService: JwtService, configService: ConfigService);
    login(): Promise<void>;
    authCallback(req: any, res: any): Promise<void>;
}
