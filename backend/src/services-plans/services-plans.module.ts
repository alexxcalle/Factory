import { Module } from '@nestjs/common';
import { ServicesPlansService } from './services-plans.service';
import { ServicesPlansController } from './services-plans.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ServicesPlansController],
  providers: [ServicesPlansService],
  imports: [PrismaModule],
})
export class ServicesPlansModule {}
