import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomPageAttributes } from '@models/Api/customPage.model';
import { MetaService } from '@services/metaService.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.scss'],
})
export class CustomPageComponent implements OnInit {
  customPage: Observable<CustomPageAttributes> | null = null;
  customPage$: Observable<CustomPageAttributes> | undefined;
  constructor(
    private metaService: MetaService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  async ngOnInit() {
    this.route.data.subscribe((data) => {
      const customPage = data['page'];
      this.metaService.updateMetaInfo(
        customPage.meta_data_title,
        customPage.meta_data_description,
        customPage.keywords
      );
      this.customPage = customPage;
      this.cdr.detectChanges();
    });
    this.customPage$ = this.route.data.pipe(map((data) => data['page']));
  }
}
