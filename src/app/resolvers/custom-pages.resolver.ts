import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { ApiCallback } from '@services/api-callback.service';
import { ResponseTypedData } from '@models/Api/responseApi.model';
import { isArray } from 'lodash';
import { PageAttributes } from '@models/Api/page.model';

@Injectable({
  providedIn: 'root',
})
export class CustomPageResolver implements Resolve<any> {
  constructor(private apiCallback: ApiCallback) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<any> {
    const pageUrl = route.paramMap.get('url');
    return this.apiCallback.fetchData('pages').pipe(
      map((data: ResponseTypedData<PageAttributes>) => {
        if (isArray(data.data)) {
          return data.data.find((page) => page.url === pageUrl) || null;
        }
        return null;
      }),
      catchError((_error) => {
        return of(null);
      })
    );
  }
}
