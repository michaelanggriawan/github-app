import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { ApiExcludeEndpoint } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private jwtService: JwtService, private configService: ConfigService) {}

  @Get()
  @ApiExcludeEndpoint()
  @UseGuards(AuthGuard('github'))
  async login() {
    //
  }

  @Get('callback')
  @UseGuards(AuthGuard('github'))
  async authCallback(@Req() req, @Res() res) {
    const user = req.user;
    const payload = { sub: user.id, username: user.username };
    const token = this.jwtService.sign(payload);
    res.cookie('access_token', token, {
      secure: this.configService.get<string>('ENV') === 'PRODUCTION',
      httpOnly: true,
    });
    res.redirect(
      `https://github-app-production-b24a.up.railway.app/${user.username}`,
    );
  }
}
