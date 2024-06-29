import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { NgHttpCachingConfig, NgHttpCachingModule } from 'ng-http-caching';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppComponent } from './app.component';

//Components
import { SMIconsComponent } from '@components/internal/sm-icons/icon-tab.component';
import { NavBarComponent } from '@components/internal/side-nav/side-nav.component';
import { FooterComponent } from '@components/internal/footer/footer.component';
import { MenuComponent } from '@components/internal/menu/menu.component';
import { SkeletonBlogComponent } from './components/internal/skeletons/blog/skeleton-blog.component';

//Modules
import { AppRoutingModule } from '@modules/app-routing.module';
import { CustomTagsModule } from '@modules/custom-tags.module';

//Directives
import { DynamicComponentLoaderDirective } from '@directives/dynamic-component-loader.directive';
import { MutationObserverDirective } from '@directives/mutation-observer.directive';

//Pages
import { HomePageComponent } from '@client/pages/home/home-page.component';
import { ErrorNotFoundComponent } from '@pages/error-not-found/error-not-found.component';
import { CustomPageComponent } from '@pages/custom-page/custom-page.component';
import { BlogComponent } from '@pages/blog/blog.component';
import { ArticleComponent } from '@pages/blog/article/article.component';

//Filters
import { FilterPipe } from '@filters/filter.pipe';
import { SanitizeHtmlPipe } from '@filters/sanitizeHtml.pipe';
import { SortByDatePipe } from '@filters/sortByDate.pipe';

//Services
import { SettingsService } from '@services/settings.service';

//Interceptors
import { HttpInterceptorService } from './interceptors/http.interceptor';

export function initializeApp(settingsService: SettingsService) {
  return () => firstValueFrom(settingsService.fetchSettings());
}
const ngHttpCachingConfig: NgHttpCachingConfig = {
  lifetime: 1000 * 60 * 15,
  allowedMethod: ['GET'],
};
@NgModule({
  declarations: [
    AppComponent,
    SMIconsComponent,
    NavBarComponent,
    MenuComponent,
    HomePageComponent,
    ErrorNotFoundComponent,
    BlogComponent,
    ArticleComponent,
    FilterPipe,
    SanitizeHtmlPipe,
    SortByDatePipe,
    CustomPageComponent,
    DynamicComponentLoaderDirective,
    MutationObserverDirective,
    FooterComponent,
    SkeletonBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CustomTagsModule,
    NgHttpCachingModule.forRoot(ngHttpCachingConfig),
    NgxSkeletonLoaderModule,
  ],
  providers: [
    SettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [SettingsService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
