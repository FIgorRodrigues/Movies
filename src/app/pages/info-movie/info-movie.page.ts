import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HttpProvider } from 'src/app/providers/http-provider';
import { NormalizeDateProvider } from 'src/app/providers/normalize-date-provider';

@Component({
  selector: 'for-info-movie',
  templateUrl: './info-movie.page.html',
  styleUrls: ['./info-movie.page.scss'],
})
export class InfoMoviePage {

  params: Params = {};
  infoMovie$: Observable<any>;
  infoMovie = {};
  lastSubscribes: Subscription;

  constructor(
      private _activatedRoute: ActivatedRoute, 
      private _httpProvider: HttpProvider
  ) { 
    this._activatedRoute.params.subscribe(params => {
      this.params = params;
      this.infoMovie$ = this._httpProvider.getInfoMovies(this.params.id);
    });
  }

  ionViewWillEnter() {
    this.lastSubscribes = this.infoMovie$
      .subscribe(infoMovie => this.infoMovie = infoMovie);
  }

  ionViewWillLeave() {
    this.lastSubscribes.unsubscribe();
  }

}
