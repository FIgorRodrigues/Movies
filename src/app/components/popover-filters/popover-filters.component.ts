import { Component } from '@angular/core';
import { HttpProvider } from 'src/app/providers/http-provider';
import { Observable, Subscription } from 'rxjs';
import { Gender } from '../../models/gender';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'for-popover-filters',
  templateUrl: './popover-filters.component.html',
  styleUrls: ['./popover-filters.component.scss'],
})
export class PopoverFiltersComponent {

  searchbarMovie: string = '';
  genders$: Observable<any>;
  genders: Gender[] = [];
  gendersSelected: number = 0;
  minPopularity = 0;
  maxPopularity = 500;
  popularity: number = 0;
  subscribes: Subscription[] = [];

  constructor(
    private _httpProvider: HttpProvider,
    private _popoverCtrl: PopoverController
  ) { 
    this.genders$ = this._httpProvider.getListGenders();
  }

  ionViewWillEnter() {
    this.subscribes.push(this.genders$.subscribe(
      genders => this.genders = genders.genres));
  }

  doFilter() {
    this._popoverCtrl.dismiss({
      searchbarMovie: this.searchbarMovie,
      gendersSelected: this.gendersSelected,
      popularity: this.popularity
    });
  }

  resetFilter() {
    this._popoverCtrl.dismiss({ resetFilter: true });
  }

}
