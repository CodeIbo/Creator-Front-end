import { Component, HostListener } from "@angular/core";
import { faFacebook, faInstagram, faTiktok, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { screenBreakpointsService } from "src/app/services/screen-breakpoints.service";
@Component({
    selector:'app-sideNav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})

export class NavBarComponent {
    faArrowLeftLong = faArrowLeftLong
    faFacebook = faFacebook
    faInstagram = faInstagram
    faTiktok = faTiktok
    faLinkedin = faLinkedin
    public innerWidth: number | any;
    
    constructor(public screenBreakpoints: screenBreakpointsService){
        this.innerWidth = window.innerWidth
      }
    
      @HostListener('window:resize') onResize() {
        this.innerWidth = window.innerWidth;
      };
}