import { Input, Component, Output, EventEmitter, ElementRef } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { NormalizeDateProvider } from 'src/app/providers/normalize-date-provider';

@Component({
    selector: 'for-card-movie',
    templateUrl: './card-movie.component.html',
    styleUrls: ['./card-movie.component.scss']
})

export class CardMovieComponent {
    
    @Input() movies: Movie[] = [];
    @Output() sendIdMovie = new EventEmitter<number>();
    
    constructor(private _normalizeDateProvider: NormalizeDateProvider) {}

    goToPageInfoMovie(idMovie: number) {
        this.sendIdMovie.emit(idMovie);
    }

    serializeTextCard(text: string) {
        let truncated = text;
        const maxLength = 90;
        if (truncated.length > maxLength)
            truncated = truncated.substr(0, maxLength) + '...';
        return truncated;
    }

}