import { Controller, Get, Post, Body } from '@nestjs/common';
import { SubscribesService } from './subscribes.service';
import { CreateSubscribeDto } from './dto/CreateSubscribes.dto';

@Controller('api/subscribes')
export class SubscribesController {
    constructor(private readonly service: SubscribesService) {}

    @Get()
    async index() {
        return await this.service.getMenuList();
    }

    @Post()
    async createSubscribe(@Body() body:CreateSubscribeDto) {
        return await this.service.addSubscribe(body);
    }
}
