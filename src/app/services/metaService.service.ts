import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(private meta: Meta, private metaTitle: Title) {}

  updateMetaInfo(title: string, content: string, keywords: string) {
    this.metaTitle.setTitle(`${title} | Pani Komunikolog`);
    this.meta.updateTag({ name: 'description', content: content });
    this.meta.updateTag({ name: 'author', content: 'KK' });
    this.meta.updateTag({ name: 'keywords', content: keywords });
  }
}
