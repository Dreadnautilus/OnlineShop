import { Controller, Get } from '@nestjs/common';
import { BanerService } from './baner.service';

@Controller('api/baner')
export class BanerController {
    constructor(private readonly service: BanerService) {}

    @Get()
    async findAll() {
        return await this.service.findAll();
    }
}
