import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { IconTabComponent } from './shared/icon-tab/icon-tab.component';
import { NavBarComponent } from './shared/side-nav/side-nav.component';
import { MainSection } from './static/main-section/main-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutMe } from './static/about-me-section/about-me.component';
import { ContactSectionComponent } from './static/contact-section/contact-section/contact-section.component';
import { PodcastSpotifySubsiteComponent } from './dynamic/podcast-spotify-subsite/podcast-spotify-subsite.component';
import { HomePageComponent } from './static/home-page/home-page.component';
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
@NgModule({
  declarations: [
    AppComponent,
    MainSection,
    IconTabComponent,
    NavBarComponent,
    AboutMe,
    ContactSectionComponent,
    PodcastSpotifySubsiteComponent,
    HomePageComponent,
    ErrorNotFoundComponent,
    BlogComponent,
    ArticleComponent,
    FilterPipe,
    SanitizeHtmlPipe,
    SortByDatePipe,
    CustomPageComponent,
    DynamicComponentLoaderDirective,
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
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
