(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-info-movie-info-movie-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/card-movie-info/card-movie-info.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/card-movie-info/card-movie-info.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n  <ion-row class=\"ion-align-items-start\">\n    <ion-col disabled size=\"12\">\n      <ion-card>\n        <div class=\"container-img\">\n          <img \n            *ngIf=\"infoMovie.poster_path\" \n            class=\"image-movie-info\" \n            [src]=\"infoMovie.poster_path\"\n            [alt]=\"infoMovie.title\"\n            [title]=\"infoMovie.title\"/>\n        </div>\n        <ion-card-header>\n          <ion-card-title>\n            {{infoMovie.title}}\n          </ion-card-title>\n          <p>Lançamento: {{infoMovie.release_date}}.</p>\n          <p>Duração: {{infoMovie.runtime}} minutos.</p>\n        </ion-card-header>\n        <ion-card-content *ngIf=\"infoMovie.overview\">\n          <p class=\"title-overview\">Descrição</p>\n          <p>\n            {{infoMovie.overview}}\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/info-movie/info-movie.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/info-movie/info-movie.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Informações</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\" class=\"ion-padding\" fullscreen>\n  <for-card-movie-info\n    [infoMovie]=\"infoMovie\">\n  </for-card-movie-info>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/card-movie-info/card-movie-info.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/card-movie-info/card-movie-info.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  margin: 0 auto;\n  max-width: 300px;\n}\nion-card .title-overview {\n  font-weight: bold;\n  font-size: 15px;\n}\nion-card .container-img {\n  position: relative;\n  height: 300px;\n  width: 100%;\n}\nion-card .image-movie-info {\n  height: 100%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lnb3IvZm9ydGljcy9zcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1tb3ZpZS1pbmZvL2NhcmQtbW92aWUtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXJkLW1vdmllLWluZm8vY2FyZC1tb3ZpZS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBQTtFQUNBLGdCQUFBO0FDQUo7QURFSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0FSO0FER0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDRFI7QURJSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhcmQtbW92aWUtaW5mby9jYXJkLW1vdmllLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XG5cbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuXG4gICAgLnRpdGxlLW92ZXJ2aWV3IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhaW5lci1pbWcge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5pbWFnZS1tb3ZpZS1pbmZvIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxufSIsImlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5pb24tY2FyZCAudGl0bGUtb3ZlcnZpZXcge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuaW9uLWNhcmQgLmNvbnRhaW5lci1pbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNhcmQgLmltYWdlLW1vdmllLWluZm8ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/card-movie-info/card-movie-info.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/card-movie-info/card-movie-info.component.ts ***!
  \*************************************************************************/
/*! exports provided: CardMovieInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMovieInfoComponent", function() { return CardMovieInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardMovieInfoComponent = class CardMovieInfoComponent {
    constructor() {
        this.infoMovie = {};
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CardMovieInfoComponent.prototype, "infoMovie", void 0);
CardMovieInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'for-card-movie-info',
        template: __webpack_require__(/*! raw-loader!./card-movie-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/card-movie-info/card-movie-info.component.html"),
        styles: [__webpack_require__(/*! ./card-movie-info.component.scss */ "./src/app/components/card-movie-info/card-movie-info.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CardMovieInfoComponent);



/***/ }),

/***/ "./src/app/pages/info-movie/info-movie-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/info-movie/info-movie-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: InfoMoviePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoMoviePageRoutingModule", function() { return InfoMoviePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _info_movie_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-movie.page */ "./src/app/pages/info-movie/info-movie.page.ts");




const routes = [
    {
        path: '',
        component: _info_movie_page__WEBPACK_IMPORTED_MODULE_3__["InfoMoviePage"]
    }
];
let InfoMoviePageRoutingModule = class InfoMoviePageRoutingModule {
};
InfoMoviePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfoMoviePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/info-movie/info-movie.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/info-movie/info-movie.module.ts ***!
  \*******************************************************/
/*! exports provided: InfoMoviePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoMoviePageModule", function() { return InfoMoviePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_movie_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info-movie-routing.module */ "./src/app/pages/info-movie/info-movie-routing.module.ts");
/* harmony import */ var _info_movie_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-movie.page */ "./src/app/pages/info-movie/info-movie.page.ts");
/* harmony import */ var src_app_components_card_movie_info_card_movie_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/card-movie-info/card-movie-info.component */ "./src/app/components/card-movie-info/card-movie-info.component.ts");
/* harmony import */ var src_app_providers_http_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/http-provider */ "./src/app/providers/http-provider.ts");








let InfoMoviePageModule = class InfoMoviePageModule {
};
InfoMoviePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _info_movie_routing_module__WEBPACK_IMPORTED_MODULE_4__["InfoMoviePageRoutingModule"]
        ],
        declarations: [
            _info_movie_page__WEBPACK_IMPORTED_MODULE_5__["InfoMoviePage"],
            src_app_components_card_movie_info_card_movie_info_component__WEBPACK_IMPORTED_MODULE_6__["CardMovieInfoComponent"]
        ],
        providers: [src_app_providers_http_provider__WEBPACK_IMPORTED_MODULE_7__["HttpProvider"]]
    })
], InfoMoviePageModule);



/***/ }),

/***/ "./src/app/pages/info-movie/info-movie.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/info-movie/info-movie.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm8tbW92aWUvaW5mby1tb3ZpZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/info-movie/info-movie.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/info-movie/info-movie.page.ts ***!
  \*****************************************************/
/*! exports provided: InfoMoviePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoMoviePage", function() { return InfoMoviePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_providers_http_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/http-provider */ "./src/app/providers/http-provider.ts");




let InfoMoviePage = class InfoMoviePage {
    constructor(_activatedRoute, _httpProvider) {
        this._activatedRoute = _activatedRoute;
        this._httpProvider = _httpProvider;
        this.params = {};
        this.infoMovie = {};
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
};
InfoMoviePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_providers_http_provider__WEBPACK_IMPORTED_MODULE_3__["HttpProvider"] }
];
InfoMoviePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'for-info-movie',
        template: __webpack_require__(/*! raw-loader!./info-movie.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/info-movie/info-movie.page.html"),
        styles: [__webpack_require__(/*! ./info-movie.page.scss */ "./src/app/pages/info-movie/info-movie.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_providers_http_provider__WEBPACK_IMPORTED_MODULE_3__["HttpProvider"]])
], InfoMoviePage);



/***/ })

}]);
//# sourceMappingURL=pages-info-movie-info-movie-module-es2015.js.map