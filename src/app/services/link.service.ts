import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { scrollService } from './scroll.service';

@Injectable({ providedIn: 'root' })
export class linkService {
  constructor(private _router: Router, private scrollService: scrollService) {}
  internalLinksHandler(html: any) {
    let links: HTMLAnchorElement[] = html.querySelectorAll('a');
    links.forEach((element) => {
      //use data-scroll-id , js autoformat attributes to camelCase
      const scrollAtribute = element.dataset['scrollId'];
      let href = element.href?.toLowerCase();
      if (href?.startsWith(location.origin.toLowerCase())) {
        element.addEventListener('click', (e: MouseEvent) => {
          this._router.navigate([href.substring(location.origin.length)], {
            fragment: scrollAtribute,
          });
          e.preventDefault();
        });
      }
    });
  }
}
