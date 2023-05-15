import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HomeService } from './home.service';


@ApiTags('Home menu')
@Controller('api/home')
export class HomeController {
    constructor(private homeService: HomeService) {}

    @ApiOperation({summary: 'Get list of all baners on home page'})
    @ApiResponse({status: 200})
    @Get('/baner')
    getAll() {
        return this.homeService.getAllBaners();
    }

}
