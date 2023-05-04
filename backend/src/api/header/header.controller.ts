import { Controller, Get} from '@nestjs/common';
import { HeaderService } from './header.service';

@Controller('api/header/menu')
export class HeaderController {
    constructor(private headerService: HeaderService) {}

    @Get()
    getAll() {
        return this.headerService.getMenu();
    }

}
