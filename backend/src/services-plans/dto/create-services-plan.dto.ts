import { IsString, IsInt, IsDecimal,  } from "class-validator";
export class CreateServicePlanDto {
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsDecimal()
    price: number;
    @IsInt()
    duration: number
}
