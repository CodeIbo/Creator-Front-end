import { Component, HostListener, ViewChild } from "@angular/core";
import { faFacebook, faInstagram, faTiktok, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { screenBreakpointsService } from "src/app/services/screen-breakpoints.service";
import { scrollService } from "src/app/services/scroll.service";
import { viewManipulation } from "src/app/services/view-manipulation.service";
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

    constructor(public screenBreakpoints: screenBreakpointsService,public viewManipulation: viewManipulation, public scrollService:scrollService){
      this.innerWidth = window.innerWidth
      
    }


    clickHandler = (anchor?:string) =>{
      if(anchor){
        this.scrollService.scroll(anchor)
      }
      this.viewManipulation.toogleView()
    }
    
    @HostListener('window:resize') onResize() {
      this.innerWidth = window.innerWidth;
    };
}

