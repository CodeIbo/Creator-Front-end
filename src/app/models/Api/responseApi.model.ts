import { ArticlesAttributes } from './article.model';
import { BlogAttributes } from './blog.model';
import { CustomPageAttributes } from './customPage.model';
import { EpisodeAttributes } from './episode.model';
import { MenuAttributes } from './menu.model';
import { PodcastAttributes } from './podcast.model';
import { SettingsAttributes } from './settings.model';

export type ApiCallback =
  | ArticlesAttributes
  | BlogAttributes
  | CustomPageAttributes
  | EpisodeAttributes
  | PodcastAttributes
  | MenuAttributes
  | SettingsAttributes;

export interface ResponseUntypedData {
  data?: ApiCallback;
  httpStatus: string;
  message: string;
  statusCode: number;
  timeStamp: string;
}
export interface ResponseTypedData<T = ApiCallback> {
  data: T;
  httpStatus: string;
  message: string;
  statusCode: number;
  timeStamp: string;
}
