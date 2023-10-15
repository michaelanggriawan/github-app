import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private jwtService: JwtService) {}

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
    res.cookie('access_token', token);
    res.redirect(
      `http://localhost:3001/${user.username}`,
    );
  }
}
