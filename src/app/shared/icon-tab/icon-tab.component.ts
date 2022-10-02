import { Component } from '@angular/core';
import { faFacebook,faInstagram,faTiktok,faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-iconTab',
  templateUrl: './icon-tab.component.html',
  styleUrls: ['./icon-tab.component.scss']
})
export class IconTabComponent {
  faFacebook = faFacebook
  faInstagram = faInstagram
  faTiktok = faTiktok
  faLinkedin = faLinkedin
}
