import { Routes } from '@angular/router';
import { BlogComponent } from '@pages/blog/blog.component';
import { BlogResolver } from '@resolvers/blog.resolver';
import { ArticleResolver } from '@resolvers/article.resolver';
import { ArticleComponent } from '@pages/blog/article/article.component';
import { CustomPageComponent } from '@pages/custom-page/custom-page.component';
import { CustomPageResolver } from '@resolvers/custom-pages.resolver';
import { CustomPageGuard } from '../guards/custom-page.guard';

export const apiRoutes: Routes = [
  {
    path: 'blog/:url',
    component: BlogComponent,
    resolve: {
      blog: BlogResolver,
    },
  },
  {
    path: 'blog/:url/:article-url',
    component: ArticleComponent,
    resolve: {
      article: ArticleResolver,
    },
  },
  {
    path: ':url',
    component: CustomPageComponent,
    resolve: {
      page: CustomPageResolver,
    },
    canActivate: [CustomPageGuard],
  },
  { path: '**', redirectTo: 'not-found' },
];
