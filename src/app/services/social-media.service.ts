import { Injectable } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faLinkedin,
  faXTwitter,
  faSpotify,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Injectable({ providedIn: 'root' })
export class SMService {
  public socialMediaIcons = {
    facebook: faFacebook,
    instagram: faInstagram,
    tiktok: faTiktok,
    linkedin: faLinkedin,
    x: faXTwitter,
    spotify: faSpotify,
    youtube: faYoutube,
  };
}
