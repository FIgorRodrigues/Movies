import { Component, Input } from '@angular/core';

@Component({
  selector: 'for-card-movie-info',
  templateUrl: './card-movie-info.component.html',
  styleUrls: ['./card-movie-info.component.scss'],
})
export class CardMovieInfoComponent {

  @Input() infoMovie = {};

  constructor() {}

}
