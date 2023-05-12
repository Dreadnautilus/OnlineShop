import { Controller, Get} from '@nestjs/common';
import { HeaderService } from './header.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Header menu')
@Controller('api/header/menu')
export class HeaderController {
    constructor(private headerService: HeaderService) {}

    @ApiOperation({summary: 'Get menu list in JSON format'})
    @ApiResponse({status: 200})
    @Get()
    getAll() {
        return this.headerService.getMenu();
    }
}
