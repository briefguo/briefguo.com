import { AppController } from './app.controller';
import { CacheModule } from './cache/cache.module';
import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AppController],
  imports: [DatabaseModule, CacheModule],
})
export class AppModule {}
