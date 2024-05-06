import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class linkService {
  constructor(private _router: Router) {}
  internalLinksHandler(html: any) {
    let links: HTMLAnchorElement[] = html.querySelectorAll('a');

    links.forEach((element) => {
      let href = element.href?.toLowerCase();
      if (href?.startsWith(location.origin.toLowerCase())) {
        element.addEventListener('click', (e: MouseEvent) => {
          this._router.navigate([href.substring(location.origin.length)]);
          e.preventDefault();
        });
      }
    });
  }
}
