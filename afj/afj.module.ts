import { Module } from '@nestjs/common';
import { AfjController } from './afj.controller';
import { AfjService } from './afj.service';

@Module({
  controllers: [AfjController],
  providers: [AfjService]
})
export class AfjModule {}
