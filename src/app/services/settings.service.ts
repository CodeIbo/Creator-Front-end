import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiCallback } from './api-callback.service';
import { ResponseTypedData } from '@models/Api/responseApi.model';
import { SettingsAttributes } from '@models/Api/settings.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private settings: any;

  constructor(private apiCallback: ApiCallback) {}

  fetchSettings(): Observable<any> {
    return this.apiCallback.fetchData(`settings/${environment.settingsID}`).pipe(
      map((response: ResponseTypedData<SettingsAttributes>) => {
        this.settings = response.data;
        return response;
      })
    );
  }

  getSettings(): any {
    return this.settings;
  }

  getSetting(key: string): any {
    return this.settings ? this.settings[key] : null;
  }
}
