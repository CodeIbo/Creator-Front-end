import { timeStamp } from './shared/timestamp.model';

type smIcons =
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'x'
  | 'linkedin'
  | 'spotify'
  | 'youtube';

export interface SocialMediaAttributes extends timeStamp {
  readonly id: string;
  readonly name: string;
  order: number;
  available: 0 | 1;
  link: string | null;
  title: string | null;
  readonly icon: smIcons;
}
