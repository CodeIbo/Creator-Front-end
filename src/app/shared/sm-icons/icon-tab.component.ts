import { Component, Input } from '@angular/core';
import { ResponseTypedData } from '@models/Api/responseApi.model';
import { SocialMediaAttributes } from '@models/Api/socialMedia.model';
import { ApiCallback } from '@services/api-callback.service';
import { Icons } from '@services/icons.service';
import { isArray, filter } from 'lodash';

@Component({
  selector: 'app-sm-icons',
  templateUrl: './icon-tab.component.html',
  styleUrls: ['./icon-tab.component.scss'],
})
export class SMIconsComponent {
  @Input() cssClass = '';
  smArray: SocialMediaAttributes[] | [] = [];
  constructor(public Icons: Icons, private apiCallback: ApiCallback) {
    this.apiCallback
      .fetchData('social-media')
      .subscribe((fetchedSM: ResponseTypedData<SocialMediaAttributes[]>) => {
        if (isArray(fetchedSM.data)) {
          this.smArray = filter(fetchedSM.data, ['available', 1]);
        }
      });
  }
}
