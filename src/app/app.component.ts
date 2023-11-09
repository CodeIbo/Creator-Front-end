import { slideInOut } from './animations/slide-in-out';
import {  Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { screenBreakpointsService } from './services/screen-breakpoints.service';
import { viewManipulation } from './services/view-manipulation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[slideInOut],
})
export class AppComponent implements OnInit{
  public innerWidth: number | any;
  faBars = faBars;
  @ViewChild('hamburgermenu') hamburgerMenu: ElementRef | undefined;
  @ViewChild('sidebar',{ static:false }) sidebar: ElementRef | undefined;
  

  constructor(public screenBreakpoints: screenBreakpointsService,public viewManipulation: viewManipulation, public renderer: Renderer2){
    this.innerWidth = window.innerWidth

  }



  @HostListener('window:resize') onResize() {
    this.innerWidth = window.innerWidth;
  };

  ngOnInit(): void {
  }
  

}


