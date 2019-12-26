import { HttpClient } from '@angular/common/http';
import { API_KEY, DOMAIN, RELEASES_MOVIES, POPULAR_MOVIES, TOP_RATED_MOVIES, GENRES } from '../constants/api';

export class HttpProvider {

    constructor(private _httpClient: HttpClient) {}

    getReleasesMovies() {
        const url = this._createUrl(RELEASES_MOVIES);
        return this._getResponseHttpClient(url);
    }

    getPopularMovies() {
        const url = this._createUrl(POPULAR_MOVIES);
        return this._getResponseHttpClient(url);
    }

    getTopRatedMovies() {
        const url = this._createUrl(TOP_RATED_MOVIES);
        return this._getResponseHttpClient(url);
    }

    getInfoMovies(idMovie: number) {
        const url = this._createUrl(idMovie);
        return this._getResponseHttpClient(url);
    }

    getListGenders() {
        const url = this._createUrl(GENRES);
        return this._getResponseHttpClient(url);
    }

    private _createUrl(uri: string | number) {
        return `${DOMAIN + uri }?api_key=${API_KEY}&language=pt-BR`;
    }

    private _getResponseHttpClient(url: string) {
        return this._httpClient.get(url);
    }
}