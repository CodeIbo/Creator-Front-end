import { slideInOut } from './animations/slide-in-out';
import { Component, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { screenBreakpointsService } from './services/screen-breakpoints.service';
import { viewManipulation } from './services/view-manipulation.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[slideInOut]
})
export class AppComponent {
  public innerWidth: number | any;
  faBars = faBars
  test = false 
  swap = () => {
    this.test = !this.test
    console.log(this.test)
  }

  constructor(public screenBreakpoints: screenBreakpointsService,public viewManipulation: viewManipulation){
    this.innerWidth = window.innerWidth
  }

  @HostListener('window:resize') onResize() {
    this.innerWidth = window.innerWidth;
  };
  

}


