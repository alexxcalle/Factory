import { PartialType } from '@nestjs/swagger';
import { CreateServicePlanDto } from './create-services-plan.dto';

export class UpdateServicePlanDto extends PartialType(CreateServicePlanDto) {}
