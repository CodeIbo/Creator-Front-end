import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesAttributes } from '@models/Api/article.model';
import { ApiCallback } from '@services/api-callback.service';
import { MetaService } from '@services/metaService.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  id: any;
  article: ArticlesAttributes | undefined;
  constructor(
    public route: ActivatedRoute,
    public _apiCallback: ApiCallback,
    private metaService: MetaService
  ) {
    this.route.data.subscribe((data) => {
      const article: ArticlesAttributes = data['article'];
      this.metaService.updateMetaInfo(
        article.meta_data_title,
        article.meta_data_description,
        article.keywords
      );
      this.article = article;
    });
  }
  ngOnInit(): void {}
}
