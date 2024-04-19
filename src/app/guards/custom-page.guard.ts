import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  UrlTree,
} from '@angular/router';
import { PageAttributes } from '@models/Api/page.model';
import { ResponseTypedData } from '@models/Api/responseApi.model';
import { ApiCallback } from '@services/api-callback.service';
import { isArray } from 'lodash';
import { Observable, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomPageGuard implements CanActivate {
  constructor(private apiCallback: ApiCallback, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const pageUrl = route.paramMap.get('url');
    return this.apiCallback.fetchData('pages').pipe(
      map((data: ResponseTypedData<PageAttributes>) => {
        if (isArray(data.data)) {
          const customPage = data.data.find(
            (customPage: PageAttributes) => customPage.url === pageUrl
          );
          return !!customPage
            ? true
            : this.router.createUrlTree(['/not-found']);
        }
        return this.router.createUrlTree(['/not-found']);
      }),
      catchError(() => of(this.router.createUrlTree(['/not-found'])))
    );
  }
}
