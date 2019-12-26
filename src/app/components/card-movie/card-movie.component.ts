import { Input, Component, Output, EventEmitter, ElementRef } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
    selector: 'for-card-movie',
    templateUrl: './card-movie.component.html',
    styleUrls: ['./card-movie.component.scss']
})

export class CardMovieComponent {
    
    @Input() movies: Movie[] = [];
    @Output() sendIdMovie = new EventEmitter<number>();
    
    constructor() {}

    goToPageInfoMovie(idMovie: number) {
        this.sendIdMovie.emit(idMovie);
    }

    serializeTextCard(text: string) {
        let truncated = text;
        const maxLength = 94;
        if (truncated.length > maxLength)
            truncated = truncated.substr(0, maxLength) + '...';
        return truncated;
    }

}