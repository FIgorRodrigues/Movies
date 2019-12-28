import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { InfoMoviePageRoutingModule } from './info-movie-routing.module';
import { InfoMoviePage } from './info-movie.page';
import { CardMovieInfoComponent } from 'src/app/components/card-movie-info/card-movie-info.component';
import { HttpProvider } from 'src/app/providers/http-provider';
import { NormalizeDateProvider } from 'src/app/providers/normalize-date-provider';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    InfoMoviePageRoutingModule
  ],
  declarations: [
    InfoMoviePage, 
    CardMovieInfoComponent
  ],
  providers: [HttpProvider, NormalizeDateProvider]
})
export class InfoMoviePageModule {}
