import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class scrollService {
  lastElement: string | any;
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.resetScrollPosition();
      });
  }

  scroll = (el: string) => {
    setTimeout(() => {
      const element = document.querySelector(el);
      if (element !== null) {
        this.lastElement = el;
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };
  private resetScrollPosition = () => {
    window.scrollTo(0, 0);
  };
}
