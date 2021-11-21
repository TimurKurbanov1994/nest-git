import { Controller, Get, Param, Query } from '@nestjs/common';
import { GitService } from './git.service';

@Controller('github')
export class GitController {
  constructor(private readonly gitServices: GitService) {}

  @Get('/:user/:repo/:branch')
  async gitHello(@Param() params: any, @Query('filter') filter: string) {
    return this.gitServices.getCommits(
      params.user,
      params.repo,
      params.branch,
      filter,
    );
  }
}
