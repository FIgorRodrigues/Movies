import { Component } from '@angular/core';
import { HttpProvider } from 'src/app/providers/http-provider';
import { Movie } from 'src/app/models/movie';
import { Observable, Subscription } from 'rxjs';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverFiltersComponent } from 'src/app/components/popover-filters/popover-filters.component';
import { AlertProvider } from 'src/app/providers/alert-provider';

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
  private _segmentCurrent: string = 'releases';
  private _currentSubcribe: Subscription;
  private _disableInfinityScroll: boolean = false;
  private _page: number = 1;
  private _total_pages: number = 1;
  private _dates = {
    maximum: '',
    minimum: ''
  };

  private _initialState = {
    searchbarMovie: '',
    gendersSelected: 0,
    popularity: 0
  }

  constructor(
    private _httpProvider: HttpProvider,
    private _navCtrl: NavController,
    private _popoverController: PopoverController,
    private _alertProvider: AlertProvider
  ) {
    this._fillDefaultStateObservables();
  }

  ionViewWillEnter() {
    this._updateCurrentSubscribe(this._getObservableCurrentSegment());
  }

  ionViewWillLeave() {
    this._emptySubscribe();
  }

  private _segmentChanged(event: CustomEvent) {
    const { value } = event.detail;
    this._segmentCurrent = value;
    this._emptySubscribe();
    this._fillDefaultStateObservables();
    this._updateCurrentSubscribe(this._getObservableCurrentSegment());
  }

  private _fillDefaultStateObservables(): void {
    this.releasesMovies$ = this._httpProvider.getReleasesMovies();
    this.popularMovies$ = this._httpProvider.getPopularMovies();
    this.topRatedMovies$ = this._httpProvider.getTopRatedMovies();
  }

  private _emptySubscribe(): void {
    this._currentSubcribe.unsubscribe();
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
    popover.onDidDismiss().then(
      async overlay => {

        const { data } = overlay;

        if(data.resetFilter) {
          this._disableInfinityScroll = false;
          return this._updateCurrentSubscribe(this._getObservableCurrentSegment());
        }

        let objFilter = {}
        if(data.searchbarMovie.toLocaleLowerCase() !== this._initialState.searchbarMovie.toLocaleLowerCase()) {
          objFilter['searchbarMovie'] = data.searchbarMovie.toLocaleLowerCase();
        }
        if(data.gendersSelected !== this._initialState.gendersSelected) {
          objFilter['gendersSelected'] = data.gendersSelected;
        }
        if(data.popularity !== this._initialState.popularity) {
          objFilter['popularity'] = data.popularity;
        }

        this.movies = this.movies.filter((movie: Movie) => {
          let condSearchbarMovie: boolean = true;
          let condGendersSelected: boolean = true;
          let condPopularity: boolean = true;

          if(objFilter['searchbarMovie']) {
            condSearchbarMovie = movie.title.toLocaleLowerCase().includes(objFilter['searchbarMovie']) ?
            true: false;
          }
          if(objFilter['gendersSelected']) {
            condGendersSelected = movie.genre_ids.includes(objFilter['gendersSelected']) ?
            true: false;
          }
          if(objFilter['popularity']) {
            condPopularity = movie.popularity >= objFilter['popularity'] ?
            true: false;
          }
          return condSearchbarMovie && condGendersSelected && condPopularity;
        });

        if(this.movies.length == 0) {
          this._updateCurrentSubscribe(this._getObservableCurrentSegment());
          const alertErrorFilter = await this._alertProvider.createAlertController(
            "Filmes",
            "Não encontramos filmes com os criterios desejados."
          );
          alertErrorFilter.present();
        }
        else{
          this._disableInfinityScroll = true;
        }
          
      }
    );
    return await popover.present();
  }

  private _fillFields(responseAPI, incrementResults?: boolean): void {
    this._page = responseAPI.page;
    this._total_pages = responseAPI._total_pages;
    if(responseAPI.dates){
      this._dates.maximum = responseAPI.dates.maximum;
      this._dates.minimum = responseAPI.dates.minimum;
    }
    else{
      this._dates = {
        maximum: '',
        minimum: ''
      }
    }

    this.movies = incrementResults ? 
      [...this.movies,...responseAPI.results]: 
      responseAPI.results;

  }

  /*private _sortByDate(results: Movie[]) { 
    return results.sort(function(a, b) {
      const date1 = new Date(a.release_date.replace(/-/g, '/')).getTime();
      const date2 = new Date(b.release_date.replace(/-/g, '/')).getTime();
      return date2 - date1;
    });
  }*/

  loadData(event) {
    if(this._blockInfinityScroll())
      return;
    const nextPage: number = this._page + 1;
    if(this._segmentCurrent === "releases") {
      this.releasesMovies$ = this._httpProvider.getReleasesMovies(nextPage);
      this._updateCurrentSubscribe(this.releasesMovies$, event);
    }
    else if(this._segmentCurrent === "popular") {
      this.popularMovies$ = this._httpProvider.getPopularMovies(nextPage);
      this._updateCurrentSubscribe(this.popularMovies$, event);
    }
    else {
      this.topRatedMovies$ = this._httpProvider.getTopRatedMovies(nextPage);
      this._updateCurrentSubscribe(this.topRatedMovies$, event);
    }
    
  }

  private _updateCurrentSubscribe(observable: Observable<any>, eventInfinitScroll?){
    const callbackFunction = responseObservable => {
      const isInfinitScroll: boolean = eventInfinitScroll ? true : false;
      this._fillFields(responseObservable, isInfinitScroll);
      if(isInfinitScroll)
        eventInfinitScroll.target.complete();
    };
    this._currentSubcribe = observable.subscribe(callbackFunction);
  }

  private _blockInfinityScroll(): boolean {
    this._disableInfinityScroll = this._page == this._total_pages;
    return this._disableInfinityScroll;
  }

  private _getObservableCurrentSegment() {
    const currentSegment: string = this._segmentCurrent;
    if(currentSegment === "releases")
      return this.releasesMovies$;
    else if(currentSegment === "popular")
      return this.popularMovies$;
    else
      return this.topRatedMovies$;
  }

}
