import { Controller, Get, Param, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ProfileDto } from 'dtos/profile.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { GithubProfileResponse, NotFoundResponse, RepositoryResponse, UnauthorizedResponse, UserStatsResponse } from 'dtos/github-profile.dto';

@Controller({
  path: 'github',
  version: '1',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOkResponse({ type: GithubProfileResponse })
  @ApiUnauthorizedResponse({ type: UnauthorizedResponse })
  @Get('profile')
  getProfile(@Req() req) {
    const result = this.appService.getUser(req.user.username);
    return result;
  }

  @Get('/:username')
  @ApiOkResponse({ type: GithubProfileResponse })
  @ApiNotFoundResponse({ type: NotFoundResponse })
  getUser(@Param('username') username: string) {
    return this.appService.getUser(username);
  }

  @ApiOkResponse({ type: RepositoryResponse })
  @ApiNotFoundResponse({ type: NotFoundResponse })
  @Get('/:username/repos')
  getRepos(@Param('username') username: string) {
    return this.appService.getRepos(username);
  }

  @Post('/visitor/:username')
  @ApiCreatedResponse({ type: UserStatsResponse })
  updateTotalVisitor(@Param('username') username: string) {
    return this.appService.updateTotalVisitor(username);
  }

  @Post('/visitor')
  insertVisitor(@Body() body: ProfileDto) {
    return this.appService.insertTotalVisitor({ ...body });
  }
}
