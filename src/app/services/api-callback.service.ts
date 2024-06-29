import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@enviroment/environment';

@Injectable({ providedIn: 'root' })
export class ApiCallback {
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  fetchData(
    endpoint: string,
    params?: { [param: string]: string | string[] }
  ): Observable<any> {
    const url = `${this.baseUrl}/api/${endpoint}`;
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (Array.isArray(value)) {
          value.forEach((item) => {
            httpParams = httpParams.append(key, item.toString());
          });
        } else {
          httpParams = httpParams.set(key, value.toString());
        }
      });
    }
    return this.http.get(url, { params: httpParams });
  }
}
