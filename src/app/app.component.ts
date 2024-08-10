import { slideInOut } from '@animations/slide-in-out';
import { AfterViewInit, Component } from '@angular/core';
import { screenBreakpointsService } from '@services/screen-breakpoints.service';
import { viewManipulation } from '@services/view-manipulation.service';
import 'zone.js';
import { Icons } from '@services/icons.service';
import { MetaService } from '@services/meta.service';
import { SettingsService } from '@services/settings.service';
import { ActivatedRoute } from '@angular/router';
import { scrollService } from '@services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInOut],
})
export class AppComponent implements AfterViewInit {
  constructor(
    public screenBreakpoints: screenBreakpointsService,
    public viewManipulation: viewManipulation,
    public icons: Icons,
    private meta: MetaService,
    public settings: SettingsService,
    private route: ActivatedRoute,
    public scrollService: scrollService
  ) {
    this.meta.updateMetaInfo(
      this.settings.getSetting('meta_data_title_global'),
      this.settings.getSetting('meta_data_description_global'),
      this.settings.getSetting('keywords_global')
    );
  }
  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.scrollService.scroll();
      }
    });
  }
}
