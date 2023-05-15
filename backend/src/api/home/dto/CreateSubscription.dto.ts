import { IsBoolean, IsEmail, IsNotEmpty, IsOptional } from "@nestjs/class-validator";

export class CreateSubscriptionDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsBoolean()
    isMen: boolean;
    
    @IsOptional()
    @IsBoolean()
    isWomen: boolean;

    @IsOptional()
    @IsBoolean()
    isKids: boolean;
}