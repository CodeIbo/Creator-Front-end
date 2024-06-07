import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private globalSuffix: string = '';
  constructor(
    private meta: Meta,
    private metaTitle: Title,
    private settings: SettingsService
  ) {
    this.globalSuffix = this.settings.getSetting('meta_data_suffix_global');
  }

  updateMetaInfo(title: string, content: string, keywords: string) {
    this.metaTitle.setTitle(`${title} | ${this.globalSuffix}`);
    this.meta.updateTag({ name: 'description', content: content });
    this.meta.updateTag({ name: 'author', content: 'KK' });
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }
}
