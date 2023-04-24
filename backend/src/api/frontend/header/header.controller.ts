import {Controller, Get} from '@nestjs/common';
import { HeaderService } from './header.service';


@Controller('api/header/menu')
export class HeaderController {
    constructor(private readonly service: HeaderService) {}

    @Get()
    async index() {
        return await this.service.findAll();
    }
}
