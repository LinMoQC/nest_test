import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NiukeController } from './niuke/niuke.controller';
import { NiukeService } from './niuke/niuke.service';

@Module({
  imports: [],
  controllers: [AppController, NiukeController],
  providers: [AppService, NiukeService],
})
export class AppModule {}
