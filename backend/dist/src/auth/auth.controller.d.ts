import { JwtService } from '@nestjs/jwt';
export declare class AuthController {
    private jwtService;
    constructor(jwtService: JwtService);
    login(): Promise<void>;
    authCallback(req: any): Promise<{
        accessToken: string;
    }>;
}
