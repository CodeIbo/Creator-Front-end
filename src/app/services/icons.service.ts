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
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

@Injectable({ providedIn: 'root' })
export class Icons {
  public socialMediaIcons = {
    facebook: faFacebook,
    instagram: faInstagram,
    tiktok: faTiktok,
    linkedin: faLinkedin,
    x: faXTwitter,
    spotify: faSpotify,
    youtube: faYoutube,
  };
  public icons = {
    ...this.socialMediaIcons,
    email: faEnvelope,
    hamburgerMenu: faBars,
    leftArrow: faArrowLeftLong,
  };
}
