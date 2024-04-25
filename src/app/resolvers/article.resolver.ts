import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { ApiCallback } from '@services/api-callback.service';
import { ResponseTypedData } from '@models/Api/responseApi.model';
import { isEmpty } from 'lodash';
import { ArticlesAttributes } from '@models/Api/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleResolver implements Resolve<any> {
  constructor(private apiCallback: ApiCallback, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const articleUrl = route.paramMap.get('article-url');
    if (!articleUrl) {
      this.router.navigate(['/not-found']);
      return EMPTY;
    }
    return this.apiCallback
      .fetchData('article/key', {
        url: articleUrl,
      })
      .pipe(
        map((data: ResponseTypedData<ArticlesAttributes>) => {
          const article = data.data;
          if (isEmpty(data.data)) {
            this.router.navigate(['/not-found']);
            return EMPTY;
          }
          return article;
        }),
        catchError((error) => {
          this.router.navigate(['/not-found']);
          return EMPTY;
        })
      );
  }
}
