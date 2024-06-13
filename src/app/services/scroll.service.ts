import { Injectable } from '@angular/core';
import { NavigationEnd, Router, Scroll } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class scrollService {
  constructor(private router: Router) {}
  scroll() {
    this.router.events.subscribe((event) => {
      if (event instanceof Scroll) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          setTimeout(() => {
            const element = document.querySelector('#' + tree.fragment);
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              });
            }
          });
        }
      }
    });
  }
  setTopPosition() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
