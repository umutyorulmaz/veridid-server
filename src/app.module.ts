import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConnectionsModule } from './connections/connections.module';
import { AfjModule } from './afj/afj.module';

@Module({
  imports: [ConnectionsModule, AfjModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
