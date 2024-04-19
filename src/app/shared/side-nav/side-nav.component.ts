import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { ApiCallback } from '@services/api-callback.service';
import { screenBreakpointsService } from 'src/app/services/screen-breakpoints.service';
import { scrollService } from 'src/app/services/scroll.service';
import { viewManipulation } from 'src/app/services/view-manipulation.service';
import { ResponseTypedData } from '@models/Api/responseApi.model';
import { map } from 'rxjs';
import { isArray } from 'lodash';
import { MenuAttributes } from '@models/Api/menu.model';
@Component({
  selector: 'app-sideNav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class NavBarComponent {
  faArrowLeftLong = faArrowLeftLong;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
  faLinkedin = faLinkedin;
  public innerWidth: number | any;
  menuArray: MenuAttributes[] | [] = [];
  elwewnt: EventTarget | null = null;
  @HostListener('click', ['$event'])
  onClick(e: MouseEvent) {
    this.elwewnt = e.target;
  }

  @HostListener('document:click', ['$event'])
  hideOnClickOutside(ev: MouseEvent) {
    ev.stopPropagation();
    if ((ev.target as Element).id === 'hamburger-menu') {
      return;
    }
    if (!this.elRef.nativeElement.contains(ev.target)) {
      this.viewManipulation.toogleView();
    }
  }

  @HostListener('window:resize') onResize() {
    this.innerWidth = window.innerWidth;
  }

  constructor(
    public screenBreakpoints: screenBreakpointsService,
    public viewManipulation: viewManipulation,
    public scrollService: scrollService,
    private apiCallback: ApiCallback,
    private elRef: ElementRef
  ) {
    this.innerWidth = window.innerWidth;
    this.apiCallback
      .fetchData('menu')
      .subscribe((fetchedMenu: ResponseTypedData<MenuAttributes>) => {
        if (isArray(fetchedMenu.data)) {
          this.menuArray = fetchedMenu.data;
        }
      });
  }

  clickHandler = (anchor?: string) => {
    if (anchor) {
      this.scrollService.scroll(anchor);
    }
    this.viewManipulation.toogleView();
  };
}
