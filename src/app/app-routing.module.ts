import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullStaticPageComponent } from './static/full-static-page/full-static-page.component';
import { PodcastSpotifySubsiteComponent } from './dynamic/podcast-spotify-subsite/podcast-spotify-subsite.component';
import { ErrorNotFoundComponent } from './static/error-not-found/error-not-found.component';
import { BlogSubsiteComponent } from './dynamic/blog-subsite/blog-subsite.component';
import { SingleBlogPostComponent } from './dynamic/single-blog-post/single-blog-post.component';

const routes: Routes = [
  {path:'',component: FullStaticPageComponent },
  {path: 'podcast', component: PodcastSpotifySubsiteComponent},
  {path: 'blog',component: BlogSubsiteComponent},
  {path:'blog/:id',component: SingleBlogPostComponent},
  {path:'**', component: ErrorNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

