import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap, debounceTime } from 'rxjs/operators';
import { IMAGE_MOVIE } from '../constants/api';
import { NormalizeDateProvider } from '../providers/normalize-date-provider';

@Injectable()
export class SerializerResponseInterceptor implements HttpInterceptor {

    constructor(private _normalizeDateProvider: NormalizeDateProvider) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = this._addHeaders(req);
        return next.handle(req)
        .pipe(
            debounceTime(500),
            retry(3),
            tap((responseMovie: any) => {
                if(responseMovie.type === 0)
                    return;
                const { body } = responseMovie;
                const existResults = this._checkExistResults(body);
                if(existResults) {
                    return body.results.forEach(movie => {
                        movie['poster_path'] = IMAGE_MOVIE + movie.poster_path;
                        return movie;
                    });
                }
                else {
                    body['poster_path'] = IMAGE_MOVIE + body.poster_path;
                    return body;
                }
            }),
            catchError(error => throwError(error))
        );
    }

    private _addHeaders(request: HttpRequest<any>) {
        return request.clone({
            headers: request.headers.set('Content-Type', 'application/json; charset=utf-8')
        });
    }

    private _checkExistResults(objResponse) {
        return objResponse.results ? true: false;
    }
}