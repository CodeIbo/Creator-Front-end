import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './static/home-page/home-page.component';
import { PodcastSpotifySubsiteComponent } from './dynamic/podcast-spotify-subsite/podcast-spotify-subsite.component';
import { ErrorNotFoundComponent } from './static/error-not-found/error-not-found.component';
import { BlogSubsiteComponent } from './dynamic/blog-subsite/blog-subsite.component';
import { SingleBlogPostComponent } from './dynamic/single-blog-post/single-blog-post.component';
import { PublicationsComponent } from './Pages/Publications/publications.component';
import { ZabrzankaComponent } from './Pages/Zabrzanka/zabrzanka.component';
import { TedxComponent } from './Pages/tedx/tedx.component';
import { Mtw4Component } from './Pages/Mtw4/mtw4.component';
import { BlogComponent } from './dynamic/blog/blog-classic/blog.component';
import { PostComponent } from './dynamic/blog/post-classic/app-post.component';
import { SzkoleniaComMed } from './Pages/SzkoleniazKomMed/szkolenia-kom-med.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'podcast', component: PodcastSpotifySubsiteComponent },
  { path: 'komunikacja-medyczna', component: BlogSubsiteComponent },
  { path: 'komunikacja-medyczna/:id', component: SingleBlogPostComponent },
  { path: 'publikacje', component: PublicationsComponent },
  { path: 'publikacje/zabrzanka', component: ZabrzankaComponent },
  { path: 'wystąpienie-tedx', component: TedxComponent },
  { path: 'warsztaty-ngo', component: SzkoleniaComMed },
  { path: 'mtw4', component: Mtw4Component },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: PostComponent },
  { path: '**', component: ErrorNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
