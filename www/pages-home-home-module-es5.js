(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/card-movie/card-movie.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/card-movie/card-movie.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n  <ion-row align-items-center justify-content-center>\n    <ion-col align-self-center *ngFor=\"let movie of movies\" size=\"12\" size-md=\"4\" size-lg=\"4\">\n      <ion-card button routerDirection=\"forward\" (click)=\"goToPageInfoMovie(movie.id)\">\n        <div class=\"container-img\">\n          <img class=\"image-movie\" \n            [src]=\"movie.poster_path\" \n            [alt]=\"movie.title\"\n            [title]=\"movie.title\"/>\n        </div>\n        <ion-card-header>\n          <ion-card-title>{{movie.title}}</ion-card-title>\n          <div class=\"movie-release-date\">\n            <ion-label>{{movie.release_date}}</ion-label>\n          </div>\n        </ion-card-header>\n        <ion-card-content>  \n          <p class=\"p-movie-overview\">\n            {{ serializeTextCard(movie.overview) }}\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/popover-filters/popover-filters.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/popover-filters/popover-filters.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-searchbar\n        [(ngModel)]=\"searchbarMovie\"\n        placeholder=\"Nome do filme\"\n        showCancelButton=\"focus\">\n      </ion-searchbar>\n    </ion-item>\n  \n    <ion-item>\n\n      <ion-label position=\"stacked\">\n        Gênero:\n      </ion-label>\n      \n      <ion-select\n        [(ngModel)]=\"gendersSelected\"\n        multiple=\"true\"\n        cancelText=\"Cancelar\"\n        okText=\"Confirmar\"\n        placeholder=\"selecione\">\n        <ion-select-option\n            *ngFor=\"let gender of genders\"\n            [value]=\"gender.id\"\n            [selected]=\"gender.name\"\n            >{{ gender.name }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"stacked\">\n        Popularidade:\n      </ion-label>\n    \n      <ion-range\n          [min]=\"minPopularity\"\n          [max]=\"maxPopularity\"\n          color=\"secondary\"\n          step=\"30\"\n          snaps=\"true\"\n          [(ngModel)]=\"popularity\"\n          name=\"popularity\"\n          #popularity_range>\n      </ion-range>\n    </ion-item>\n\n    <ion-item>\n      <ion-buttons slot=\"start\">\n        <ion-button\n            fill=\"solid\"\n            expand=\"block\"\n            color=\"primary\"\n            (click)=\"doFilter()\"\n            size=\"small\">\n            Aplicar\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-menu-button slot=\"start\" class=\"color-white button-menu\"></ion-menu-button>\n    <ion-button slot=\"end\" (click)=\"showFilterPopover($event)\">\n      <ion-icon name=\"funnel\"></ion-icon>\n    </ion-button>\n    <ion-title>Movies</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\" class=\"ion-padding\" fullscreen>\n\n  <ion-segment class=\"ion-padding\" scrollable (ionChange)=\"_segmentChanged($event)\">\n    <ion-segment-button checked value=\"releases\">\n      <ion-label>Lançamentos</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"popular\">\n      <ion-label>Populares</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"bestRating\">\n      <ion-label>Melhores</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <h3>Lista de filmes</h3>\n  <div *ngIf=\"movies.length == 0\" class=\"spinner-loading-movies\">\n    <ion-spinner color=\"primary\" name=\"dots\"></ion-spinner>\n  </div>\n  <for-card-movie \n    [movies]=\"movies\"\n    (sendIdMovie)=\"_goToPageInfoMovie($event)\">\n  </for-card-movie>\n\n  <ion-infinite-scroll \n    threshold=\"10%\"\n    (ionInfinite)=\"loadData($event)\"\n    [disabled]=\"disableInfinityScroll\"\n    >\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Carregando...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n\n<ion-footer></ion-footer>"

/***/ }),

/***/ "./src/app/components/card-movie/card-movie.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/card-movie/card-movie.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-col {\n  padding: 0 2% 0 2%;\n}\nion-col ion-card {\n  border-radius: 4px;\n  overflow: hidden;\n  height: 100%;\n  max-height: 380px;\n  min-height: 380px;\n  max-width: 300px;\n  margin: 15px auto;\n}\nion-col ion-card ion-card-title {\n  font-size: 105%;\n  margin-bottom: 5px;\n}\nion-col ion-card .movie-release-date {\n  text-transform: capitalize;\n}\nion-col ion-card .container-img {\n  position: relative;\n  height: 190px;\n  width: 100%;\n}\nion-col ion-card .image-movie {\n  height: 100%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lnb3IvZm9ydGljcy9zcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1tb3ZpZS9jYXJkLW1vdmllLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcmQtbW92aWUvY2FyZC1tb3ZpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0FDQUo7QURFSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQVo7QURHUTtFQUNJLDBCQUFBO0FDRFo7QURJUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNGWjtBREtRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1tb3ZpZS9jYXJkLW1vdmllLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCB7XG5cbiAgICBwYWRkaW5nOiAwIDIlIDAgMiU7XG5cbiAgICBpb24tY2FyZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiAzODBweDtcbiAgICAgICAgbWluLWhlaWdodDogMzgwcHg7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgIG1hcmdpbjogMTVweCBhdXRvO1xuXG4gICAgICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTA1JTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb3ZpZS1yZWxlYXNlLWRhdGUge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyLWltZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2UtbW92aWUge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICB9XG59XG4iLCJpb24tY29sIHtcbiAgcGFkZGluZzogMCAyJSAwIDIlO1xufVxuaW9uLWNvbCBpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzODBweDtcbiAgbWluLWhlaWdodDogMzgwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xufVxuaW9uLWNvbCBpb24tY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuaW9uLWNvbCBpb24tY2FyZCAubW92aWUtcmVsZWFzZS1kYXRlIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5pb24tY29sIGlvbi1jYXJkIC5jb250YWluZXItaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE5MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb2wgaW9uLWNhcmQgLmltYWdlLW1vdmllIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/card-movie/card-movie.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/card-movie/card-movie.component.ts ***!
  \***************************************************************/
/*! exports provided: CardMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMovieComponent", function() { return CardMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardMovieComponent = /** @class */ (function () {
    function CardMovieComponent() {
        this.movies = [];
        this.sendIdMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    CardMovieComponent.prototype.goToPageInfoMovie = function (idMovie) {
        this.sendIdMovie.emit(idMovie);
    };
    CardMovieComponent.prototype.serializeTextCard = function (text) {
        var truncated = text;
        var maxLength = 94;
        if (truncated.length > maxLength)
            truncated = truncated.substr(0, maxLength) + '...';
        return truncated;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CardMovieComponent.prototype, "movies", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardMovieComponent.prototype, "sendIdMovie", void 0);
    CardMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'for-card-movie',
            template: __webpack_require__(/*! raw-loader!./card-movie.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/card-movie/card-movie.component.html"),
            styles: [__webpack_require__(/*! ./card-movie.component.scss */ "./src/app/components/card-movie/card-movie.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardMovieComponent);
    return CardMovieComponent;
}());



/***/ }),

/***/ "./src/app/components/popover-filters/popover-filters.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/popover-filters/popover-filters.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lnb3IvZm9ydGljcy9zcmMvYXBwL2NvbXBvbmVudHMvcG9wb3Zlci1maWx0ZXJzL3BvcG92ZXItZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb3BvdmVyLWZpbHRlcnMvcG9wb3Zlci1maWx0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wb3Zlci1maWx0ZXJzL3BvcG92ZXItZmlsdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59IiwiaW9uLWNvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/popover-filters/popover-filters.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/popover-filters/popover-filters.component.ts ***!
  \*************************************************************************/
/*! exports provided: PopoverFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverFiltersComponent", function() { return PopoverFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_http_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/http-provider */ "./src/app/providers/http-provider.ts");



var PopoverFiltersComponent = /** @class */ (function () {
    function PopoverFiltersComponent(_httpProvider) {
        this._httpProvider = _httpProvider;
        this.searchbarMovie = '';
        this.genders = [];
        this.gendersSelected = [];
        this.popularity = '';
        this.subscribes = [];
        this.genders$ = this._httpProvider.getListGenders();
    }
    PopoverFiltersComponent.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.subscribes.push(this.genders$.subscribe(function (genders) { return _this.genders = genders.genres; }));
    };
    PopoverFiltersComponent.prototype.doFilter = function () {
        console.log(this.searchbarMovie);
        console.log(this.gendersSelected);
        console.log(this.popularity);
    };
    PopoverFiltersComponent.ctorParameters = function () { return [
        { type: src_app_providers_http_provider__WEBPACK_IMPORTED_MODULE_2__["HttpProvider"] }
    ]; };
    PopoverFiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'for-popover-filters',
            template: __webpack_require__(/*! raw-loader!./popover-filters.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/popover-filters/popover-filters.component.html"),
            styles: [__webpack_require__(/*! ./popover-filters.component.scss */ "./src/app/components/popover-filters/popover-filters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_http_provider__WEBPACK_IMPORTED_MODULE_2__["HttpProvider"]])
    ], PopoverFiltersComponent);
    return PopoverFiltersComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _components_card_movie_card_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/card-movie/card-movie.component */ "./src/app/components/card-movie/card-movie.component.ts");
/* harmony import */ var _components_popover_filters_popover_filters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/popover-filters/popover-filters.component */ "./src/app/components/popover-filters/popover-filters.component.ts");
/* harmony import */ var src_app_providers_http_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/http-provider */ "./src/app/providers/http-provider.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"], _components_card_movie_card_movie_component__WEBPACK_IMPORTED_MODULE_6__["CardMovieComponent"], _components_popover_filters_popover_filters_component__WEBPACK_IMPORTED_MODULE_7__["PopoverFiltersComponent"]],
            entryComponents: [_components_popover_filters_popover_filters_component__WEBPACK_IMPORTED_MODULE_7__["PopoverFiltersComponent"]],
            providers: [src_app_providers_http_provider__WEBPACK_IMPORTED_MODULE_8__["HttpProvider"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  text-align: center;\n}\n\nion-card {\n  margin-top: 20px;\n}\n\n.segment-scrollable.sc-ion-segment-md-h {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\nion-segment {\n  margin-bottom: 0px;\n  padding: 10px;\n  width: 100%;\n}\n\nion-segment-button {\n  width: 25px;\n  margin-left: 3px;\n  margin-right: 3px;\n  font-size: 68%;\n}\n\nion-button {\n  --box-shadow: none;\n}\n\n.spinner-loading-movies {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 60%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lnb3IvZm9ydGljcy9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2VnbWVudC1zY3JvbGxhYmxlLnNjLWlvbi1zZWdtZW50LW1kLWgge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pb24tc2VnbWVudCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgICBmb250LXNpemU6IDY4JTtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3gtc2hhZG93OiBub25lOyAgIFxufVxuXG4uc3Bpbm5lci1sb2FkaW5nLW1vdmllcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogNjAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCJoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2VnbWVudC1zY3JvbGxhYmxlLnNjLWlvbi1zZWdtZW50LW1kLWgge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW9uLXNlZ21lbnQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tc2VnbWVudC1idXR0b24ge1xuICB3aWR0aDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIGZvbnQtc2l6ZTogNjglO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uc3Bpbm5lci1sb2FkaW5nLW1vdmllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDYwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_http_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/http-provider */ "./src/app/providers/http-provider.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_popover_filters_popover_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/popover-filters/popover-filters.component */ "./src/app/components/popover-filters/popover-filters.component.ts");





var HomePage = /** @class */ (function () {
    function HomePage(_httpProvider, _navCtrl, _popoverController) {
        this._httpProvider = _httpProvider;
        this._navCtrl = _navCtrl;
        this._popoverController = _popoverController;
        this.movies = [];
        this._segmentCurrent = 'releases';
        this.disableInfinityScroll = false;
        this._page = 1;
        this._total_pages = 1;
        this._dates = {
            maximum: '',
            minimum: ''
        };
        this._fillDefaultStateObservables();
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this._currentSubcribe = this.releasesMovies$.subscribe(function (releasesMovies) { return _this._fillFields(releasesMovies); });
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this._emptySubscribe();
    };
    HomePage.prototype._segmentChanged = function (event) {
        var _this = this;
        var value = event.detail.value;
        this._segmentCurrent = value;
        this._emptySubscribe();
        this._fillDefaultStateObservables();
        if (this._segmentCurrent === "releases") {
            this._currentSubcribe = this.releasesMovies$.subscribe(function (releasesMovies) { return _this._fillFields(releasesMovies); });
        }
        else if (this._segmentCurrent === "popular") {
            this._currentSubcribe = this.popularMovies$.subscribe(function (popularMovies) { return _this._fillFields(popularMovies); });
        }
        else {
            this._currentSubcribe = this.topRatedMovies$.subscribe(function (topRatedMovies) { return _this._fillFields(topRatedMovies); });
        }
    };
    HomePage.prototype._fillDefaultStateObservables = function () {
        this.releasesMovies$ = this._httpProvider.getReleasesMovies();
        this.popularMovies$ = this._httpProvider.getPopularMovies();
        this.topRatedMovies$ = this._httpProvider.getTopRatedMovies();
    };
    HomePage.prototype._emptySubscribe = function () {
        this._currentSubcribe.unsubscribe();
    };
    HomePage.prototype._goToPageInfoMovie = function (idMovie) {
        this._navCtrl.navigateForward('info-movie/' + idMovie);
    };
    HomePage.prototype.showFilterPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._popoverController.create({
                            component: src_app_components_popover_filters_popover_filters_component__WEBPACK_IMPORTED_MODULE_4__["PopoverFiltersComponent"],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype._fillFields = function (responseAPI, incrementResults) {
        this._page = responseAPI.page;
        this._total_pages = responseAPI._total_pages;
        if (responseAPI.dates) {
            this._dates.maximum = responseAPI.dates.maximum;
            this._dates.minimum = responseAPI.dates.minimum;
        }
        else {
            this._dates = {
                maximum: '',
                minimum: ''
            };
        }
        this.movies = incrementResults ? this.movies.concat(responseAPI.results) : responseAPI.results;
    };
    HomePage.prototype.loadData = function (event) {
        var _this = this;
        if (this._disableInfinityScroll())
            return;
        var nextPage = this._page + 1;
        if (this._segmentCurrent === "releases") {
            this.releasesMovies$ = this._httpProvider.getReleasesMovies(nextPage);
            this._currentSubcribe = this.releasesMovies$.subscribe(function (releasesMovies) {
                _this._fillFields(releasesMovies, true);
                event.target.complete();
            });
        }
        else if (this._segmentCurrent === "popular") {
            this.popularMovies$ = this._httpProvider.getPopularMovies(nextPage);
            this._currentSubcribe = this.popularMovies$.subscribe(function (popularMovies) {
                _this._fillFields(popularMovies, true);
                event.target.complete();
            });
        }
        else {
            this.topRatedMovies$ = this._httpProvider.getTopRatedMovies(nextPage);
            this._currentSubcribe = this.topRatedMovies$.subscribe(function (topRatedMovies) {
                _this._fillFields(topRatedMovies, true);
                event.target.complete();
            });
        }
    };
    HomePage.prototype._disableInfinityScroll = function () {
        this.disableInfinityScroll = this._page == this._total_pages;
        return this.disableInfinityScroll;
    };
    HomePage.ctorParameters = function () { return [
        { type: src_app_providers_http_provider__WEBPACK_IMPORTED_MODULE_2__["HttpProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_http_provider__WEBPACK_IMPORTED_MODULE_2__["HttpProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map