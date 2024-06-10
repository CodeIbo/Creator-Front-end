import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { SMIconsComponent } from './shared/sm-icons/icon-tab.component';
import { NavBarComponent } from './shared/side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './client/pages/home/home-page.component';
import { ErrorNotFoundComponent } from './static/error-not-found/error-not-found.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticleComponent } from './components/blog/article/article.component';
import { FilterPipe } from './filters/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { CustomPageComponent } from './components/custom-page/custom-page.component';
import { CustomTagsModule } from './modules/custom-tags.module';
import { SanitizeHtmlPipe } from './filters/sanitizeHtml.pipe';
import { DynamicComponentLoaderDirective } from './directives/dynamic-component-loader.directive';
import { SortByDatePipe } from './filters/sortByDate.pipe';
import { MenuComponent } from './shared/menu/menu.component';
import { SettingsService } from '@services/settings.service';
import { firstValueFrom } from 'rxjs';
import { MutationObserverDirective } from './directives/mutation-observer.directive';

export function initializeApp(settingsService: SettingsService) {
  return () => firstValueFrom(settingsService.fetchSettings());
}
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CustomTagsModule,
  ],
  providers: [
    SettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [SettingsService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
