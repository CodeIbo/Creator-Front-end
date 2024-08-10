import { Component, HostListener, OnInit } from '@angular/core';
import { screenBreakpointsService } from '@services/screen-breakpoints.service';
import { viewManipulation } from '@services/view-manipulation.service';
import { scrollService } from '@services/scroll.service';
import { SettingsService } from '@services/settings.service';
import { Icons } from '@services/icons.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  public innerWidth: number | any;

  @HostListener('window:resize') onResize() {
    this.innerWidth = window.innerWidth;
    if (
      this.screenBreakpoints.init().md > innerWidth &&
      this.viewManipulation.showSideBar
    ) {
      this.viewManipulation.toogleView();
    }
  }
  constructor(
    public screenBreakpoints: screenBreakpointsService,
    public viewManipulation: viewManipulation,
    public scrollService: scrollService,
    public settings: SettingsService,
    public icons: Icons
  ) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {}
}
