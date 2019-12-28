import { HttpClient } from '@angular/common/http';
import { API_KEY, DOMAIN, RELEASES_MOVIES, POPULAR_MOVIES, TOP_RATED_MOVIES, GENRES, DETAILS_MOVIE } from '../constants/api';

export class HttpProvider {

    constructor(private _httpClient: HttpClient) {}

    getReleasesMovies(page?: number) {
        const url = this._createUrl(RELEASES_MOVIES, page);
        return this._getResponseHttpClient(url);
    }

    getPopularMovies(page?: number) {
        const url = this._createUrl(POPULAR_MOVIES, page);
        return this._getResponseHttpClient(url);
    }

    getTopRatedMovies(page?: number) {
        const url = this._createUrl(TOP_RATED_MOVIES, page);
        return this._getResponseHttpClient(url);
    }

    getInfoMovies(idMovie: number) {
        const url = this._createUrl(
            DETAILS_MOVIE.replace('<id>', idMovie.toString()));
        return this._getResponseHttpClient(url);
    }

    getListGenders() {
        const url = this._createUrl(GENRES);
        return this._getResponseHttpClient(url);
    }

    private _createUrl(uri: string | number, page?: number) {
        const pageParam: string = page ? '&page='+page: '';
        return `${DOMAIN + uri }?api_key=${API_KEY}&language=pt-BR${pageParam}`;

    }
    
    private _getResponseHttpClient(url: string) {
        return this._httpClient.get(url);
    }
}