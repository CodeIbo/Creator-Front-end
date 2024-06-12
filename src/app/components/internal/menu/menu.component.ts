import { Component, Input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  IsActiveMatchOptions,
  NavigationEnd,
  Router,
} from '@angular/router';
import { MenuAttributes } from '@models/Api/menu.model';
import { ResponseTypedData } from '@models/Api/responseApi.model';
import { ApiCallback } from '@services/api-callback.service';
import { screenBreakpointsService } from '@services/screen-breakpoints.service';
import { scrollService } from '@services/scroll.service';
import { viewManipulation } from '@services/view-manipulation.service';
import { isArray } from 'lodash';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() cssClass = '';
  menu: MenuAttributes[] | [] = [];
  @Input() isMobile: boolean = false;
  private scrollTarget: string | null = null;
  public lastUrl: string | undefined;
  public configActiveRoute: IsActiveMatchOptions = {
    fragment: 'exact',
    paths: 'exact',
    queryParams: 'ignored',
    matrixParams: 'ignored',
  };
  constructor(
    private apiCallback: ApiCallback,
    public screenBreakpoints: screenBreakpointsService,
    private scrollService: scrollService,
    private viewManipulation: viewManipulation,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.apiCallback
      .fetchData('menu')
      .subscribe((fetchedMenu: ResponseTypedData<MenuAttributes[]>) => {
        if (isArray(fetchedMenu.data)) {
          this.menu = fetchedMenu.data;
        }
      });
  }
  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollTarget = fragment;
        this.scrollService.scroll(fragment);
      }
    });
  }

  clickHandler = () => {
    if (this.isMobile) {
      this.viewManipulation.toogleView();
    }
  };
}
