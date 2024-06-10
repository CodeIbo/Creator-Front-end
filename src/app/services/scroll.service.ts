import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class scrollService {
  scroll = (el: string) => {
    setTimeout(() => {
      const element = document.querySelector(`#${el}`);
      if (element !== null) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }, 100);
  };
}
