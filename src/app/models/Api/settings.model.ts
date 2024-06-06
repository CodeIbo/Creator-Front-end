import { timeStamp } from './shared/timestamp.model';

export interface SettingsAttributes extends timeStamp {
  readonly id: string;
  company_name: string;
  logo: string;
  logo_alt: string;
  meta_data_title_global: string;
  meta_data_description_global: string;
  keywords_global: string;
  meta_data_suffix_global: string;
}
