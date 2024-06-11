import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServicesPlansService } from './services-plans.service';
import { CreateServicePlanDto } from './dto/create-services-plan.dto';
import { UpdateServicePlanDto } from './dto/update-services-plan.dto';

@Controller('services-plans')
export class ServicesPlansController {
  constructor(private readonly servicesPlansService: ServicesPlansService) {}

  @Post()
  create(@Body() createServicesPlanDto: CreateServicePlanDto) {
    return this.servicesPlansService.create(createServicesPlanDto);
  }

  @Get()
  findAll() {
    return this.servicesPlansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesPlansService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServicesPlanDto: UpdateServicePlanDto) {
    return this.servicesPlansService.update(+id, updateServicesPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesPlansService.remove(+id);
  }
}
