import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../client/pages/home/home-page.component';
import { ErrorNotFoundComponent } from '../static/error-not-found/error-not-found.component';
import { apiRoutes } from './api-routing.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'not-found', component: ErrorNotFoundComponent },
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot([...routes, ...apiRoutes], routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
