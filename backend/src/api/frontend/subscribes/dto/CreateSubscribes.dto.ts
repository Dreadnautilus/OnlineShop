import { IsBooleanString, IsEmail, IsNotEmpty, IsOptional } from '@nestjs/class-validator';

export class CreateSubscribeDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsBooleanString()
    isMen: boolean;

    @IsOptional()
    @IsBooleanString()
    isWomen: boolean;

    @IsOptional()
    @IsBooleanString()
    isKids: boolean;
}