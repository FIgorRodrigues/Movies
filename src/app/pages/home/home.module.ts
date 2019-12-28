import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { CardMovieComponent } from '../../components/card-movie/card-movie.component';
import { PopoverFiltersComponent } from '../../components/popover-filters/popover-filters.component';
import { HttpProvider } from 'src/app/providers/http-provider';
import { FormsModule } from '@angular/forms';
import { NormalizeDateProvider } from 'src/app/providers/normalize-date-provider';
import { AlertProvider } from 'src/app/providers/alert-provider';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, CardMovieComponent, PopoverFiltersComponent],
  entryComponents: [PopoverFiltersComponent],
  providers: [HttpProvider, NormalizeDateProvider, AlertProvider],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
