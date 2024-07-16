import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private globalSuffix: string = '';
  private globalAuthor: string = '';
  constructor(
    private meta: Meta,
    private metaTitle: Title,
    private settings: SettingsService
  ) {
    this.globalSuffix = this.settings.getSetting('meta_data_suffix_global');
    this.globalAuthor = this.settings.getSetting('meta_author_global');
    this.meta.updateTag({ name: 'author', content: this.globalAuthor });
  }

  updateMetaInfo(title: string, content: string, keywords: string) {
    this.metaTitle.setTitle(`${title} | ${this.globalSuffix}`);
    this.meta.updateTag({ name: 'description', content: content });
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }
}
