import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('api/items')
export class ItemsController {
    constructor(private readonly service: ItemsService) {}

    @Get()
    async findAll() {
        return await this.service.findAll();
    }
}
