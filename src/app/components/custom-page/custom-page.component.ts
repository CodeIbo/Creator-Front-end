import {
  Component,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomPageAttributes } from '@models/Api/customPage.model';
import { linkService } from '@services/link.service';
import { MetaService } from '@services/meta.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.scss'],
})
export class CustomPageComponent {
  customPage: Observable<CustomPageAttributes> | null = null;
  customPage$: Observable<CustomPageAttributes> | undefined;
  @ViewChild('sanitizedHtml') sanitizedHtml: ElementRef | undefined;
  constructor(
    private metaService: MetaService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private linkService: linkService
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
  afterRenderedInnterHtml() {
    this.linkService.internalLinksHandler(this.sanitizedHtml?.nativeElement);
  }
}
