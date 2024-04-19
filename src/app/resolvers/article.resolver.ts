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
    const currentState = this.router.getCurrentNavigation()?.extras.state;
    const id: string | null = currentState ? currentState['id'] : null;
    if (!id) {
      this.router.navigate(['/not-found']);
      return EMPTY;
    }
    return this.apiCallback.fetchData(`article/${id}`).pipe(
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
