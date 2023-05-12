import { InjectModel } from '@nestjs/sequelize';
import { Menu } from './models/menu.model';
import { Injectable } from '@nestjs/common';
import { SubMenu } from './models/submenu.model';
import { SubMenuList } from './models/submenulist.model';

@Injectable()
export class HeaderService {
    constructor(@InjectModel(Menu) private menuRepository: typeof Menu) {}

    async getMenu() {
        return await this.menuRepository.findAll({
            include: [{
                model: SubMenu,
                include: [{
                    model: SubMenuList
                }]
            }]});
    }
}
