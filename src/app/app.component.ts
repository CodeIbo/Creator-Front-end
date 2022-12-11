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
  
  loadPage = true
  preProdAccess = 'developer1flex'

  constructor(public screenBreakpoints: screenBreakpointsService,public viewManipulation: viewManipulation, public renderer: Renderer2){
    this.innerWidth = window.innerWidth

    this.renderer.listen('window','click',(e:Event)=>{
      console.log(this.sidebar?.nativeElement)
    })
  }

  getValueFromCookie = (name:string) => {
    return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1]
  }

  simpleLoginAuth = this.getValueFromCookie('validation') === this.preProdAccess ? this.preProdAccess : window.prompt('password','')

  @HostListener('window:resize') onResize() {
    this.innerWidth = window.innerWidth;
  };

  ngOnInit(): void {
    let now = new Date();
    let time = now.getTime();
    time += 3600 * 1000;
    now.setTime(time);
    if(this.simpleLoginAuth !== this.preProdAccess ){
      this.loadPage = false;
    }
    else{
      document.cookie = 
      'validation=' + 'developer1flex' + 
      '; expires=' + now.toUTCString() + 
      '; path=/';
      this.loadPage = true;
    }

  }
  

}


