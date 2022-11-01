import { Component, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { screenBreakpointsService } from './services/screen-breakpoints.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public innerWidth: number | any;
  faBars = faBars

  constructor(public screenBreakpoints: screenBreakpointsService){
    this.innerWidth = window.innerWidth
  }

  @HostListener('window:resize') onResize() {
    this.innerWidth = window.innerWidth;
  };
}


//https://www.google.com/search?q=angular+animation+show+hide+hamburger+menu&client=opera&hs=zez&sxsrf=ALiCzsZgW7-5AnTM7RVK3qSKFojqd2iwrw%3A1667325792883&ei=YF9hY5WzNfb67_UP_66gqA4&ved=0ahUKEwiV4-_MyI37AhV2_bsIHX8XCOUQ4dUDCA4&uact=5&oq=angular+animation+show+hide+hamburger+menu&gs_lp=Egxnd3Mtd2l6LXNlcnC4AQP4AQEyBRAhGKABMgUQIRigATIFECEYoAHCAgoQABhHGNYEGLADwgIGECMYJxgTwgIHEAAYgAQYDcICCBAAGIAEGMsBwgIGEAAYFhgewgIIEAAYFhgeGA_CAggQABgIGB4YDcICCBAhGBYYHhgdwgIEECEYFcICBxAhGKABGAqQBghImkVQsAhYoUNwAXgAyAEAkAEAmAGtAaABnhKqAQQ2LjE14gMEIEEYAOIDBCBGGACIBgE&sclient=gws-wiz-serp