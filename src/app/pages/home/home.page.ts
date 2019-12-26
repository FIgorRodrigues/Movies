import { Component } from '@angular/core';
import { HttpProvider } from 'src/app/providers/http-provider';
import { Movie } from 'src/app/models/movie';
import { Observable, Subscription } from 'rxjs';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverFiltersComponent } from 'src/app/components/popover-filters/popover-filters.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  movies: Movie[] = [];
  releasesMovies$: Observable<any>;
  popularMovies$: Observable<any>;
  topRatedMovies$: Observable<any>;
  lastSubcribe: Subscription;

  constructor(
    private _httpProvider: HttpProvider,
    private _navCtrl: NavController,
    private _popoverController: PopoverController
  ) {
      this.releasesMovies$ = this._httpProvider.getReleasesMovies();
      this.popularMovies$ = this._httpProvider.getPopularMovies();
      this.topRatedMovies$ = this._httpProvider.getTopRatedMovies();
  }

  ionViewWillEnter() {
    this.lastSubcribe = this.releasesMovies$.subscribe(
      releasesMovies => this.movies = releasesMovies.results
    )
  }

  ionViewWillLeave() {
    this._emptySubscribe();
  }

  private _segmentChanged(event: CustomEvent) {
    const { value } = event.detail;
    this._emptySubscribe();
    if(value === "releases") {
      this.lastSubcribe = this.releasesMovies$.subscribe(
        releasesMovies => this.movies = releasesMovies.results
      );
    }
    else if(value === "popular") {
      this.lastSubcribe = this.popularMovies$.subscribe(
        popularMovies => this.movies = popularMovies.results
      );
    }
    else {
      this.lastSubcribe = this.topRatedMovies$.subscribe(
        topRatedMovies => this.movies = topRatedMovies.results
      );
    }
  }

  private _emptySubscribe(): void {
    this.lastSubcribe.unsubscribe();
  }

  private _goToPageInfoMovie(idMovie: number) {
    this._navCtrl.navigateForward('info-movie/'+idMovie)
  }

  async showFilterPopover(ev: any) {
    const popover = await this._popoverController.create({
      component: PopoverFiltersComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
