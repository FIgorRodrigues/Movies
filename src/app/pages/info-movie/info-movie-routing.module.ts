import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoMoviePage } from './info-movie.page';

const routes: Routes = [
  {
    path: '',
    component: InfoMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoMoviePageRoutingModule {}
