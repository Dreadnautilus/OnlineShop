import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('api/catalog/')
export class CatalogController {
    constructor(private readonly service: CatalogService) {}

    @Get(':id')
    async index(@Param('id') param: any) {
        const catalogItem = await this.service.findItem(param)
        if(catalogItem) {
            return catalogItem
        } else {
            return 'Page not found'
        }
    }
}
