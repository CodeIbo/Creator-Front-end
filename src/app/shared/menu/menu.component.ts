import { Component, Input } from '@angular/core';
import { MenuAttributes } from '@models/Api/menu.model';
import { ResponseTypedData } from '@models/Api/responseApi.model';
import { ApiCallback } from '@services/api-callback.service';
import { screenBreakpointsService } from '@services/screen-breakpoints.service';
import { isArray } from 'lodash';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() cssClass = '';
  menu: MenuAttributes[] | [] = [];
  constructor(
    private apiCallback: ApiCallback,
    public screenBreakpoints: screenBreakpointsService
  ) {
    this.apiCallback
      .fetchData('menu')
      .subscribe((fetchedMenu: ResponseTypedData<MenuAttributes[]>) => {
        if (isArray(fetchedMenu.data)) {
          this.menu = fetchedMenu.data;
        }
      });
  }
}
