import { ArticlesAttributes } from './article.model';
import { BlogAttributes } from './blog.model';
import { CustomPageAttributes } from './customPage.model';
import { EpisodeAttributes } from './episode.model';
import { MenuAttributes } from './menu.model';
import { PodcastAttributes } from './podcast.model';
import { SettingsAttributes } from './settings.model';
import { UISettingsAttributes } from './ui-settings';

export type ApiCallback =
  | ArticlesAttributes
  | BlogAttributes
  | CustomPageAttributes
  | EpisodeAttributes
  | PodcastAttributes
  | MenuAttributes
  | SettingsAttributes
  | UISettingsAttributes;

export interface ResponseTypedData<T = ApiCallback> {
  data: T;
  httpStatus: string;
  message: string;
  statusCode: number;
  timeStamp: string;
}
