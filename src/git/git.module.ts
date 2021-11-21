import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GitService } from './git.service';
import { GitController } from './git.controller';

@Module({
  imports: [HttpModule],
  controllers: [GitController],
  providers: [GitService],
})
export class GitModule {}
