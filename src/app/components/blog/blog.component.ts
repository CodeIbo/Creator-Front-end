import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { MetaService } from '@services/metaService.service';
import { BlogAttributes } from '@models/Api/blog.model';
import { ArticlesAttributes } from '@models/Api/article.model';
import { switchMap } from 'rxjs';
import { ApiCallback } from '@services/api-callback.service';
import { ResponseTypedData } from '@models/Api/responseApi.model';
import { isArray } from 'lodash';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  faSearch = faSearch;
  search = '';
  articles: ArticlesAttributes[] = [];
  isDataArray: boolean = false;
  blog: BlogAttributes | undefined;

  constructor(
    private route: ActivatedRoute,
    private metaService: MetaService,
    private apiCallback: ApiCallback
  ) {
    this.route.data
      .pipe(
        switchMap((data) => {
          const blog: BlogAttributes = data['blog'];
          this.metaService.updateMetaInfo(
            blog.meta_data_title,
            blog.meta_data_description,
            blog.keywords
          );
          this.blog = blog;
          return this.apiCallback.fetchData('article', {
            blog_key: blog.blog_key,
          });
        })
      )
      .subscribe((fetchedArticles: ResponseTypedData<ArticlesAttributes>) => {
        this.isDataArray = isArray(fetchedArticles.data);
        if (isArray(fetchedArticles.data)) {
          this.articles = fetchedArticles.data;
        }
      });
  }

  ngOnInit(): void {}
}
