import { Module } from '@nestjs/common';
import { GitModule } from './git/git.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [GitModule, ConfigModule.forRoot()],
})
export class AppModule {}
