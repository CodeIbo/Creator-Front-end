import { Component } from '@angular/core';
import { ResponseTypedData } from '@models/Api/responseApi.model';
import { SocialMediaAttributes } from '@models/Api/socialMedia.model';
import { ApiCallback } from '@services/api-callback.service';
import { SMService } from '@services/social-media.service';
import { isArray, filter } from 'lodash';

@Component({
  selector: 'app-iconTab',
  templateUrl: './icon-tab.component.html',
  styleUrls: ['./icon-tab.component.scss'],
})
export class IconTabComponent {
  smArray: SocialMediaAttributes[] | [] = [];
  constructor(public SMService: SMService, private apiCallback: ApiCallback) {
    this.apiCallback
      .fetchData('social-media')
      .subscribe((fetchedSM: ResponseTypedData<SocialMediaAttributes[]>) => {
        if (isArray(fetchedSM.data)) {
          this.smArray = filter(fetchedSM.data, ['available', 1]);
        }
      });
  }
}
