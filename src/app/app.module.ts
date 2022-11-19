import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconTabComponent } from './shared/icon-tab/icon-tab.component';
import { NavBarComponent } from './shared/side-nav/side-nav.component';
import { MainSection } from './static/main-section/main-section.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutMe } from './static/about-me-section/about-me.component';
import { ContactSectionComponent } from './static/contact-section/contact-section/contact-section.component';
import { PodcastSpotifySubsiteComponent } from './dynamic/podcast-spotify-subsite/podcast-spotify-subsite.component';
import { FullStaticPageComponent } from './static/full-static-page/full-static-page.component';
import { ErrorNotFoundComponent } from './static/error-not-found/error-not-found.component';
import { BlogSubsiteComponent } from './dynamic/blog-subsite/blog-subsite.component';

@NgModule({
  declarations: [
    AppComponent,
    MainSection,
    IconTabComponent,
    NavBarComponent,
    AboutMe,
    ContactSectionComponent,
    PodcastSpotifySubsiteComponent,
    FullStaticPageComponent,
    ErrorNotFoundComponent,
    BlogSubsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

