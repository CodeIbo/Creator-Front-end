import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { ApiCallback } from '@services/api-callback.service';
import { BlogAttributes } from '@models/Api/blog.model';
import { ResponseTypedData } from '@models/Api/responseApi.model';
import { isArray } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class BlogResolver implements Resolve<any> {
  constructor(private apiCallback: ApiCallback, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const blogUrl = route.paramMap.get('url');
    return this.apiCallback.fetchData('blog').pipe(
      map((data: ResponseTypedData<BlogAttributes>) => {
        if (isArray(data.data)) {
          const blog = data.data.find(
            (blog: BlogAttributes) => blog.url === blogUrl
          );
          if (!blog) {
            this.router.navigate(['/not-found']);
            return EMPTY;
          }
          return blog;
        }
        this.router.navigate(['/not-found']);
        return EMPTY;
      }),
      catchError((error) => {
        this.router.navigate(['/not-found']);
        return EMPTY;
      })
    );
  }
}
