import { Injectable } from '@nestjs/common';
import { CreateServicePlanDto } from './dto/create-services-plan.dto';
import { UpdateServicePlanDto } from './dto/update-services-plan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicesPlansService {
  constructor(private readonly prisma: PrismaService){}
  create(createServicesPlanDto: CreateServicePlanDto) {
    return this.prisma.servicesPlans.create({ data: createServicesPlanDto });
  }

  findAll() {
    return this.prisma.servicesPlans.findMany();
  }

  findOne(id: number) {
    return this.prisma.servicesPlans.findUnique({ where: { id } });
  }

  update(id: number, updateServicesPlanDto: UpdateServicePlanDto) {
    return this.prisma.servicesPlans.update({ where: { id }, data: updateServicesPlanDto });
  }

  remove(id: number) {
    return this.prisma.servicesPlans.delete({ where: { id } });
  }
}
