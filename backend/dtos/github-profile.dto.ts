import { ApiProperty } from '@nestjs/swagger';

export class VisitorProfile {
  @ApiProperty({ example: 'michaelanggriawan' })
  login: string;

  @ApiProperty({ example: 'Michael Anggriawan' })
  name: string;

  @ApiProperty({ example: 'https://avatars.githubusercontent.com/u/37749891?v=4' })
  avatar_url: string;

  @ApiProperty({ example: 'https://github.com/michaelanggriawan' })
  profile_url: string;
}

export class Visitor {
  @ApiProperty({ example: 'michaelanggriawan' })
  login: string;

  @ApiProperty({ example: 'Michael Anggriawan' })
  name: string;

  @ApiProperty({ example: 'I love programming.' })
  bio: string;

  @ApiProperty({ example: null })
  email: string;

  @ApiProperty({ example: 'https://avatars.githubusercontent.com/u/37749891?v=4' })
  avatar_url: string;

  @ApiProperty({ example: 'https://github.com/michaelanggriawan' })
  profile_url: string;

  @ApiProperty({ example: 1 })
  totalVisitor: number;

  @ApiProperty({ type: [VisitorProfile] })
  visitors: VisitorProfile[];
}

export class GithubProfileResponse {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ type: Visitor })
  data: Visitor;
}

export class ErrorMessageUnauthorized {
  @ApiProperty({ example: 'Unauthorized' })
  message: string;
}

export class UnauthorizedResponse {
  @ApiProperty({ example: 401 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ type: [ErrorMessageUnauthorized] })
  errors: ErrorMessageUnauthorized[];
}

export class ErrorMessageUserNotExist {
  @ApiProperty({ example: 'user is not exist' })
  message: string;
}


export class NotFoundResponse {
  @ApiProperty({ example: 404 })
  statusCode: number;

  @ApiProperty({ example: false })
  success: boolean;

  @ApiProperty({ type: [ErrorMessageUserNotExist] })
  errors: ErrorMessageUserNotExist[];
}

export class Owner {
  @ApiProperty({ example: 'michaelanggriawan' })
  login: string;

  @ApiProperty({ example: 37749891 })
  id: number;

  @ApiProperty({ example: 'MDQ6VXNlcjM3NzQ5ODkx' })
  node_id: string;

  @ApiProperty({ example: 'https://avatars.githubusercontent.com/u/37749891?v=4' })
  avatar_url: string;

  @ApiProperty({ example: 'https://github.com/michaelanggriawan' })
  url: string;
}

export class Repository {
  @ApiProperty({ example: 704079598 })
  id: number;

  @ApiProperty({ example: 'R_kgDOKfdm7g' })
  node_id: string;

  @ApiProperty({ example: 'atask' })
  name: string;

  @ApiProperty({ example: 'michaelanggriawan/atask' })
  full_name: string;

  @ApiProperty({ example: false })
  private: boolean;

  @ApiProperty({ type: Owner })
  owner: Owner;

  @ApiProperty({ example: 'https://github.com/michaelanggriawan/atask' })
  html_url: string;

  @ApiProperty({ example: 'Create a note app by using react native expo to finish atask assignment' })
  description: string;

  @ApiProperty({ example: false })
  fork: boolean;

  @ApiProperty({ example: 'https://api.github.com/repos/michaelanggriawan/atask' })
  url: string;
}

export class RepositoryResponse {
  @ApiProperty({ example: 200 })
  statusCode: number;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ isArray: true, type: Repository })
  data: Repository[];
}

export class UserStats {
  @ApiProperty({ example: '652a4742d8c95b2e8dc8b580' })
  _id: string;

  @ApiProperty({ example: 'michaelanggriawan' })
  login: string;

  @ApiProperty({ example: 2 })
  total: number;

  @ApiProperty({ example: '2023-10-14T07:46:10.746Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-10-14T13:28:41.950Z' })
  updatedAt: string;

  @ApiProperty({ example: 0 })
  __v: number;
}

export class UserStatsResponse {
  @ApiProperty({ example: 201 })
  statusCode: number;

  @ApiProperty({ example: true })
  success: boolean;

  @ApiProperty({ type: UserStats })
  data: UserStats;
}


