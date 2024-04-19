import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class viewManipulation {
  showSideBar: boolean = false;

  toogleView = () => {
    this.showSideBar = !this.showSideBar;
  };
}
