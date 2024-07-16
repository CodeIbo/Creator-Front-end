import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiCallback } from './api-callback.service';
import { ResponseTypedData } from '@models/Api/responseApi.model';
import { SettingsAttributes } from '@models/Api/settings.model';
import { environment } from '@enviroment/environment';
import { UISettingsAttributes } from '@models/Api/ui-settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private settings: any;

  constructor(private apiCallback: ApiCallback) {}

  fetchSettings(): Observable<any> {
    const globalSettings$ = this.apiCallback.fetchData('settings/default');
    const uiSettings$ = this.apiCallback.fetchData('settings/ui');

    return forkJoin([globalSettings$, uiSettings$]).pipe(
      map(
        ([globalResponse, uiResponse]: [
          ResponseTypedData<SettingsAttributes>,
          ResponseTypedData<UISettingsAttributes>
        ]) => {
          this.settings = {
            global: globalResponse.data,
            ui: uiResponse.data,
          };
          return this.settings;
        }
      )
    );
  }

  getSettings(): any {
    return this.settings;
  }

  getSetting(path: string, scope: 'global' | 'ui' = 'global'): any {
    const keys = path.split('.');
    let current = this.settings ? this.settings[scope] : null;
    for (const key of keys) {
      if (current && key in current) {
        current = current[key];
      } else {
        return null;
      }
    }
    return current;
  }
}
