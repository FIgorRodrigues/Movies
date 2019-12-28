(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error-message/error-message.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error-message/error-message.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containerErrorMessage\">\n  {{ errorMessage }}\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header></ion-header>\n\n<ion-content color=\"light\" class=\"ion-padding\">\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-text color=\"primary\">\n          <h1 class=\"login-title\">\n            <strong>\n              Movies\n            </strong>\n          </h1>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <form [formGroup]=\"loginForm\">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-input \n              formControlName=\"email\"\n              placeholder=\"Email:\" \n              clearInput \n              autofocus \n              type=\"email\">\n            </ion-input>\n          </ion-item>\n          <div *ngFor=\"let errorEmail of errosMessagesLoginForm.email\">\n            <for-error-message \n              *ngIf=\"loginForm.get('email')\n                .hasError(\n                  errorEmail.type) &&\n                  (loginForm.get('email').dirty ||\n                  loginForm.get('email').touched\n                )\"\n              [errorMessage]=\"errorEmail.message\">\n            </for-error-message>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-input \n              placeholder=\"Senha:\" \n              clearInput\n              type=\"password\"\n              formControlName=\"password\">\n            </ion-input>\n          </ion-item>\n          <div *ngFor=\"let errorPassword of errosMessagesLoginForm.password\">\n            <for-error-message \n              *ngIf=\"loginForm.get('password')\n                .hasError(\n                  errorPassword.type) &&\n                  (loginForm.get('password').dirty ||\n                  loginForm.get('password').touched\n                )\"\n              [errorMessage]=\"errorPassword.message\">\n            </for-error-message>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-button\n            shape=\"round\"\n            type=\"submit\"\n            (click)=\"onSubmitLogin()\"\n            expand=\"full\"\n            class=\"buttonLogin\"\n            [disabled]=\"loginForm.invalid\"\n          >\n            Entrar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>\n\n<ion-footer></ion-footer>"

/***/ }),

/***/ "./src/app/components/error-message/error-message.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/error-message/error-message.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.containerErrorMessage {\n  text-align: left;\n  margin: 10px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lnb3IvZm9ydGljcy9zcmMvYXBwL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Vycm9yLW1lc3NhZ2UvZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3ItbWVzc2FnZS9lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNvbnRhaW5lckVycm9yTWVzc2FnZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgY29sb3I6IHJlZDtcbn0iLCJkaXYuY29udGFpbmVyRXJyb3JNZXNzYWdlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAxMHB4O1xuICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/error-message/error-message.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/error-message/error-message.component.ts ***!
  \*********************************************************************/
/*! exports provided: ErrorMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function() { return ErrorMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorMessageComponent = class ErrorMessageComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ErrorMessageComponent.prototype, "errorMessage", void 0);
ErrorMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'for-error-message',
        template: __webpack_require__(/*! raw-loader!./error-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error-message/error-message.component.html"),
        styles: [__webpack_require__(/*! ./error-message.component.scss */ "./src/app/components/error-message/error-message.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ErrorMessageComponent);



/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_providers_login_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/login-provider */ "./src/app/providers/login-provider.ts");
/* harmony import */ var src_app_components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/error-message/error-message.component */ "./src/app/components/error-message/error-message.component.ts");
/* harmony import */ var src_app_providers_alert_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/alert-provider */ "./src/app/providers/alert-provider.ts");
/* harmony import */ var src_app_providers_loading_provider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/providers/loading-provider */ "./src/app/providers/loading-provider.ts");











let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
        ],
        declarations: [
            _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"],
            src_app_components_error_message_error_message_component__WEBPACK_IMPORTED_MODULE_8__["ErrorMessageComponent"]
        ],
        providers: [
            src_app_providers_login_provider__WEBPACK_IMPORTED_MODULE_7__["LoginProvider"],
            src_app_providers_loading_provider__WEBPACK_IMPORTED_MODULE_10__["LoadingProvider"],
            src_app_providers_alert_provider__WEBPACK_IMPORTED_MODULE_9__["AlertProvider"]
        ]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n}\nion-content ion-grid {\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  max-width: 500px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\nion-content ion-grid ion-row {\n  width: 100%;\n}\nion-content ion-grid ion-row ion-item {\n  --background: var(--ion-color-light);\n  --border-color: var(--ion-color-medium);\n}\nion-content ion-grid ion-row ion-text h1.login-title strong {\n  text-align: center;\n}\nion-content ion-grid ion-row ion-button {\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lnb3IvZm9ydGljcy9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQUo7QURFSTtFQUVJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNEUjtBREdRO0VBRUksV0FBQTtBQ0ZaO0FESVk7RUFDSSxvQ0FBQTtFQUNBLHVDQUFBO0FDRmhCO0FET2dCO0VBQ0ksa0JBQUE7QUNMcEI7QURTWTtFQUNJLGtCQUFBO0FDUGhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBpb24tZ3JpZCB7XG5cbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlvbi10ZXh0IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBoMS5sb2dpbi10aXRsZSBzdHJvbmcge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpb24tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi10ZXh0IGgxLmxvZ2luLXRpdGxlIHN0cm9uZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_providers_login_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/login-provider */ "./src/app/providers/login-provider.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_loading_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/loading-provider */ "./src/app/providers/loading-provider.ts");
/* harmony import */ var src_app_providers_alert_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/alert-provider */ "./src/app/providers/alert-provider.ts");






let LoginPage = class LoginPage {
    constructor(_loginProvider, _navCtrl, _loadProvider, _alertProvider) {
        this._loginProvider = _loginProvider;
        this._navCtrl = _navCtrl;
        this._loadProvider = _loadProvider;
        this._alertProvider = _alertProvider;
    }
    ngOnInit() {
        this.loginForm = this._loginProvider.createLoginForm();
        this.errosMessagesLoginForm = this._loginProvider.createErrorsMessages();
    }
    onSubmitLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this._loadProvider.showLoad();
            const { email, password } = this.loginForm.value;
            const authenticated = this._loginProvider
                .authLogin(email, password);
            yield this._loadProvider.hideLoad().then(() => {
                authenticated ?
                    this._navCtrl.navigateRoot('/home') :
                    this._showAlertErroLogin();
            }, () => this._showAlertErroLogin("Não foi possível realizar login, por favor tente novamente."));
        });
    }
    _showAlertErroLogin(messageError) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let defaultMessageAlert = "Email ou senha incorreto, verifique seus dados e tente novamente.";
            if (messageError)
                defaultMessageAlert = messageError;
            const alert = yield this._alertProvider.createAlertController("Login", defaultMessageAlert);
            alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_providers_login_provider__WEBPACK_IMPORTED_MODULE_2__["LoginProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_providers_loading_provider__WEBPACK_IMPORTED_MODULE_4__["LoadingProvider"] },
    { type: src_app_providers_alert_provider__WEBPACK_IMPORTED_MODULE_5__["AlertProvider"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_login_provider__WEBPACK_IMPORTED_MODULE_2__["LoginProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_providers_loading_provider__WEBPACK_IMPORTED_MODULE_4__["LoadingProvider"],
        src_app_providers_alert_provider__WEBPACK_IMPORTED_MODULE_5__["AlertProvider"]])
], LoginPage);



/***/ }),

/***/ "./src/app/providers/alert-provider.ts":
/*!*********************************************!*\
  !*** ./src/app/providers/alert-provider.ts ***!
  \*********************************************/
/*! exports provided: AlertProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertProvider", function() { return AlertProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let AlertProvider = class AlertProvider {
    constructor(_alertCtrl) {
        this._alertCtrl = _alertCtrl;
    }
    createAlertController(titleAlert, messageAlert, subTitleAlert, actionButton, cancelButton, actionButtonCancel, textActionButton, textCancelButton) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!textActionButton)
                textActionButton = 'OK';
            if (!textCancelButton)
                textCancelButton = 'Cancelar';
            let arrayButtons = [];
            if (cancelButton)
                arrayButtons.push({ text: textCancelButton, handler: actionButtonCancel });
            arrayButtons.push({ text: textActionButton, handler: actionButton });
            return yield this._alertCtrl.create({
                header: titleAlert,
                subHeader: subTitleAlert,
                message: messageAlert,
                cssClass: 'alertDanger',
                backdropDismiss: true,
                buttons: arrayButtons
            });
        });
    }
};
AlertProvider.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
AlertProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], AlertProvider);



/***/ }),

/***/ "./src/app/providers/loading-provider.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/loading-provider.ts ***!
  \***********************************************/
/*! exports provided: LoadingProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingProvider", function() { return LoadingProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let LoadingProvider = class LoadingProvider {
    constructor(_loadingCtrl) {
        this._loadingCtrl = _loadingCtrl;
        this._load = null;
        this._isLoading = false;
    }
    showLoad(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this._isLoading)
                return;
            this._load = yield this._loadingCtrl.create(this._loadingSetting(message));
            this._isLoading = true;
            return yield this._load.present();
        });
    }
    hideLoad() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this._isLoading)
                return;
            this._isLoading = false;
            return yield this._load.dismiss();
        });
    }
    _loadingSetting(message) {
        let messageDefault = 'Aguarde um momento...';
        return {
            spinner: "circular",
            message: message ? message : messageDefault,
            translucent: true
        };
    }
};
LoadingProvider.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
LoadingProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], LoadingProvider);



/***/ }),

/***/ "./src/app/providers/login-provider.ts":
/*!*********************************************!*\
  !*** ./src/app/providers/login-provider.ts ***!
  \*********************************************/
/*! exports provided: LoginProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginProvider", function() { return LoginProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-provider */ "./src/app/providers/auth-provider.ts");




let LoginProvider = class LoginProvider {
    constructor(_formBuilder, _authProvider) {
        this._formBuilder = _formBuilder;
        this._authProvider = _authProvider;
    }
    createLoginForm() {
        return this._formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1}/)
                ])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
                ])]
        });
    }
    createErrorsMessages() {
        return {
            'email': [
                { type: 'required', message: 'E-mail é obrigatório.' },
                { type: 'pattern', message: 'Digite um email válido.' }
            ],
            'password': [
                { type: 'required', message: 'Senha é obrigatória.' },
                { type: 'minlength', message: 'Senha deve conter no mínimo 6 caracteres.' }
            ],
        };
    }
    authLogin(email, password) {
        return this._authProvider.authLogin(email, password);
    }
};
LoginProvider.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_provider__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"] }
];
LoginProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _auth_provider__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"]])
], LoginProvider);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map