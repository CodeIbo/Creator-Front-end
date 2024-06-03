import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class scrollService {
  lastElement: string | undefined;

  scroll = (el: string) => {
    setTimeout(() => {
      const element = document.querySelector(`#${el}`);
      if (element !== null) {
        this.lastElement = el;
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };
}
