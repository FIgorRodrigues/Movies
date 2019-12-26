import { Component } from '@angular/core';
import { HttpProvider } from 'src/app/providers/http-provider';
import { Observable, Subscription } from 'rxjs';
import { Gender } from '../../models/gender';

@Component({
  selector: 'for-popover-filters',
  templateUrl: './popover-filters.component.html',
  styleUrls: ['./popover-filters.component.scss'],
})
export class PopoverFiltersComponent {

  searchbarMovie: string;
  genders$: Observable<any>;
  genders: Gender[] = [];
  subscribes: Subscription[] = [];

  constructor(private _httpProvider: HttpProvider) { 
    this.genders$ = this._httpProvider.getListGenders();
  }

  ionViewWillEnter() {
    this.subscribes.push(this.genders$.subscribe(
      genders => this.genders = genders.genres));
  }


}
