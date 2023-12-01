import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconTabComponent } from './shared/icon-tab/icon-tab.component';
import { NavBarComponent } from './shared/side-nav/side-nav.component';
import { MainSection } from './static/main-section/main-section.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutMe } from './static/about-me-section/about-me.component';
import { ContactSectionComponent } from './static/contact-section/contact-section/contact-section.component';
import { PodcastSpotifySubsiteComponent } from './dynamic/podcast-spotify-subsite/podcast-spotify-subsite.component';
import { HomePageComponent } from './static/home-page/home-page.component';
import { ErrorNotFoundComponent } from './static/error-not-found/error-not-found.component';
import { BlogSubsiteComponent } from './dynamic/blog-subsite/blog-subsite.component';
import { SingleBlogPostComponent } from './dynamic/single-blog-post/single-blog-post.component';
import { FilterPipe } from './filters/filter.pipe';
import { BlogPrivateComponent } from './Pages/PrivateBlog/blog-private.component';
import { PublicationsComponent } from './Pages/Publications/publications.component';
import { ZabrzankaComponent } from './Pages/Zabrzanka/zabrzanka.component';
import { TedxComponent } from './Pages/tedx/tedx.component';


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
    BlogSubsiteComponent,
    SingleBlogPostComponent,
    FilterPipe,
    BlogPrivateComponent,
    PublicationsComponent,
    ZabrzankaComponent,
    TedxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

