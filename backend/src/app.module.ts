import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ServicesPlansModule } from './services-plans/services-plans.module';

@Module({
  imports: [PrismaModule, ServicesPlansModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
