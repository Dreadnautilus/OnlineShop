import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HomeService } from './home.service';
import { CreateSubscriptionDto } from './dto/CreateSubscription.dto';


@ApiTags('Home menu')
@Controller('api/home')
export class HomeController {
    constructor(private homeService: HomeService) {}

    @ApiOperation({summary: 'Get list of all baners on home page'})
    @ApiResponse({status: 200})
    @Get('/baner')
    async getAll() {
        return this.homeService.getAllBaners();
    }

    @ApiOperation({summary: 'Get menu list fo subscription'})
    @ApiResponse({status: 200})
    @Get('/subscription/list')
    async getList() {
        return this.homeService.getMenuList()
    }

    @ApiOperation({summary: 'Create or update subscription'})
    @ApiResponse({status: 200})
    @Post('/subscription')
    async createSubscription(@Body() dto:CreateSubscriptionDto) {
        return await this.homeService.subscribe(dto);
    }
}
