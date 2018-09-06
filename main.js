(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'cafe-breakfast';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_left_tool_bar_left_tool_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main/left-tool-bar/left-tool-bar.component */ "./src/app/main/left-tool-bar/left-tool-bar.component.ts");
/* harmony import */ var _main_right_tool_bar_right_tool_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/right-tool-bar/right-tool-bar.component */ "./src/app/main/right-tool-bar/right-tool-bar.component.ts");
/* harmony import */ var _main_nav_menu_bar_nav_menu_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/nav-menu-bar/nav-menu-bar.component */ "./src/app/main/nav-menu-bar/nav-menu-bar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_follow_gallery_follow_gallery_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/follow-gallery/follow-gallery.component */ "./src/app/home/follow-gallery/follow-gallery.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "./src/app/subscribe/subscribe.component.ts");
/* harmony import */ var _main_right_tool_bar_book_table_book_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main/right-tool-bar/book-table/book-table.component */ "./src/app/main/right-tool-bar/book-table/book-table.component.ts");
/* harmony import */ var _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./our-story/our-story.component */ "./src/app/our-story/our-story.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _services_follow_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/follow.service */ "./src/app/services/follow.service.ts");
/* harmony import */ var src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                _main_left_tool_bar_left_tool_bar_component__WEBPACK_IMPORTED_MODULE_15__["LeftToolBarComponent"],
                _main_right_tool_bar_right_tool_bar_component__WEBPACK_IMPORTED_MODULE_16__["RightToolBarComponent"],
                _main_nav_menu_bar_nav_menu_bar_component__WEBPACK_IMPORTED_MODULE_17__["NavMenuBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _home_follow_gallery_follow_gallery_component__WEBPACK_IMPORTED_MODULE_19__["FollowGalleryComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_20__["MenuComponent"],
                _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_21__["SubscribeComponent"],
                _main_right_tool_bar_book_table_book_table_component__WEBPACK_IMPORTED_MODULE_22__["BookTableComponent"],
                _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_23__["OurStoryComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_24__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_27__["Routers"]),
            ],
            providers: [_services_follow_service__WEBPACK_IMPORTED_MODULE_25__["FollowService"], src_app_services_menu_service__WEBPACK_IMPORTED_MODULE_26__["MenuService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_follow_gallery_follow_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/follow-gallery/follow-gallery.component */ "./src/app/home/follow-gallery/follow-gallery.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./our-story/our-story.component */ "./src/app/our-story/our-story.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");





var Routers = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'gallery', component: _home_follow_gallery_follow_gallery_component__WEBPACK_IMPORTED_MODULE_1__["FollowGalleryComponent"] },
    { path: 'gallery/:index', component: _home_follow_gallery_follow_gallery_component__WEBPACK_IMPORTED_MODULE_1__["FollowGalleryComponent"] },
    { path: 'our-menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"] },
    { path: 'our-story', component: _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_3__["OurStoryComponent"] },
    { path: 'contacts', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] }
];


/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-container\">\n\t<h3  routerLink = '/home'>\n\t\tWhite & Yellow\t\t\n\t</h3>\n\t<h4>\n\t\tContact Us\n\t</h4>\n\t<div class=\"row\">\n\t\t<div class=\"title-form\">\n\t\t\t<h2>\n\t\t\t\t\tOpening Hours\n\t\t\t</h2>\n\t\t\t<ul>\n\t\t\t\t<li>Mon - Fri: 7am - 10pm </li>\n\t\t\t\t<li>Saturday: 8am - 11pm</li>\n\t\t\t\t<li>Saturday: 8am - 11pm</li>\n\t\t\t\t<li>Sunday: 8am - 10pm</li>\n\t\t\t</ul>\n\t\t\t<h2>\n\t\t\t\t\tAddress\n\t\t\t</h2>\n\t\t\t<ul>\n\t\t\t\t<li>500 Terry Francois Street</li>\n\t\t\t\t<li>San Francisco, CA 94158</li>\n\t\t\t\t<li>Tel: 123-456-7890​​</li>\n\t\t\t</ul>\n\t\t\t<form\n\t\t\t\t\t#contactUsForm=\"ngForm\" \n\t\t\t\t\t(ngSubmit)=\"contactUs()\"\t\t\t\t\t\n\t\t\t\t\t>\n\t\t\t\t<mat-form-field class=\"short-field\">\n\t\t\t\t\t<input \n\t\t\t\t\t\t\tmatInput \n\t\t\t\t\t\t\tplaceholder=\"Full Name\"\n\t\t\t\t\t\t\tngModel \n\t\t\t\t\t\t\tname=\"fullName\"\n\t\t\t\t\t\t\t#fullName=\"ngModel\"\n\t\t\t\t\t\t\trequired>\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field class=\"short-field\">\n\t\t\t\t\t<input \n\t\t\t\t\t\t\tmatInput \n\t\t\t\t\t\t\tplaceholder=\"Email Address\" \n\t\t\t\t\t\t\ttype=\"email\"\n\t\t\t\t\t\t\temail \n\t\t\t\t\t\t\tngModel \n\t\t\t\t\t\t\tname=\"emailAddress\"\n\t\t\t\t\t\t\t#emailAddress=\"ngModel\"\n\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t>\n\t\t\t\t\t<mat-error *ngIf=\"!email.valid\">\n\t\t\t\t\t\t\tNot a valid email\n\t\t\t\t\t</mat-error>\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<span matPrefix>+38 &nbsp;</span>\n\t\t\t\t\t<input \n\t\t\t\t\t\t\ttype=\"tel\" \n\t\t\t\t\t\t\tmatInput \n\t\t\t\t\t\t\tplaceholder=\"Phone Number\" \n\t\t\t\t\t\t\tngModel\n\t\t\t\t\t\t\tname=\"phoneNum\"\n\t\t\t\t\t\t\t#phoneNum=\"ngModel\"\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t>\t\t\t\t\t\t\t\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<textarea \n\t\t\t\t\t\t\tmatInput \n\t\t\t\t\t\t\tplaceholder=\"Write Your Request\"\n\t\t\t\t\t\t\tngModel \n\t\t\t\t\t\t\tname=\"message\"\n\t\t\t\t\t\t\t#message=\"ngModel\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t</textarea>\n\t\t\t\t</mat-form-field>\n\t\t\t\t<input \n\t\t\t\t\t\ttype=\"submit\" \n\t\t\t\t\t\tvalue=\"Submit Now\"\n\t\t\t\t\t\t>\n\t\t\t</form>\n\t\t</div><!-- title-form -->\n\t\t<img src=\"assets/contacts.jpg\" alt=\"contacts\">\n\t</div><!-- row -->\n\t<iframe \n\t\t\tsrc=\"https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d2573.111794593279!2d24.0250682!3d49.8403569!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle+maps+api!5e0!3m2!1suk!2sua!4v1536275448059\" \n\t\t\tframeborder=\"0\" \n\t\t\tallowfullscreen\n\t\t\t>\n\t</iframe>\n\t<app-subscribe></app-subscribe>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.sass":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  font-family: 'Cormorant Garamond', serif;\n  font-style: italic; }\n  .contact-container app-subscribe {\n    width: 100%; }\n  .contact-container h3 {\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    cursor: pointer;\n    outline: none;\n    transition: color 0.4s ease 0s; }\n  .contact-container h3:hover {\n      color: #ffcb53; }\n  .contact-container h4 {\n    text-align: center;\n    font-size: 18px;\n    font-weight: bold;\n    font-family: sans-serif;\n      font-family-font-style: normal; }\n  .contact-container p {\n    font-size: 19px;\n    font-style: normal; }\n  .contact-container iframe {\n    width: 90%;\n    height: 450px;\n    margin-bottom: 60px; }\n  .contact-container .row {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    width: 100%; }\n  .contact-container .row .title-form {\n      display: flex;\n      flex-direction: column;\n      max-width: 600px;\n      margin-bottom: 60px; }\n  .contact-container .row .title-form h2 {\n        font-size: 30px;\n        text-align: left;\n        margin-left: 50px; }\n  .contact-container .row .title-form ul {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        margin-left: 50px; }\n  .contact-container .row .title-form ul li {\n          font-size: 17px; }\n  .contact-container .row .title-form form {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-between;\n        width: 100%;\n        margin-top: 30px; }\n  .contact-container .row .title-form form mat-form-field {\n          width: 100%;\n          margin: 0 2px 0; }\n  .contact-container .row .title-form form mat-form-field.short-field {\n            width: 46%; }\n  .contact-container .row .title-form form input {\n          font-size: 17px; }\n  .contact-container .row .title-form form input[type=\"submit\"] {\n            width: 100%;\n            height: 40px;\n            border: none;\n            outline: none;\n            background: none;\n            cursor: pointer;\n            font-family: 'Cormorant Garamond', serif; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
    }
    ContactComponent.prototype.contactUs = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contactUsForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ContactComponent.prototype, "contactUsForm", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.sass */ "./src/app/contact/contact.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/follow-gallery/follow-gallery.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/follow-gallery/follow-gallery.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"follow-gallery-container\" *ngIf=\"gallery.length\">\n\t<div class=\"control\">\n\t\t<mat-icon class=\"x-mark\" svgIcon=\"x-mark-bold\" routerLink = '/home'></mat-icon>\n\t\t<mat-icon svgIcon=\"right\" (click)=\"nextPrevSlide(1)\"></mat-icon>\n\t</div><!-- control -->\n\t<img [src]=\"'assets/'+gallery[index].image\" alt=\"\">\n\t<div class=\"title\">\n\t\t<div>\n\t\t\t<span>{{gallery[index].likes}}</span>\n\t\t</div>\n\t\t<div>\n\t\t\t<span>{{gallery[index].messages.length}}</span><mat-icon svgIcon=\"message\"></mat-icon>\n\t\t</div>\n\t\t<ul *ngIf=\"gallery[index].messages.length\">\n\t\t\t<li>Comments:</li>\n\t\t\t<li *ngFor=\"let msg of gallery[index].messages\">\n\t\t\t\t# {{msg}}\n\t\t\t</li>\n\t\t</ul>\t\t\t\n\t</div><!-- title -->\n\t<div class=\"control\">\n\t\t\t<mat-icon svgIcon=\"left\" (click)=\"nextPrevSlide(-1)\"></mat-icon>\n\t</div><!-- control -->\n</div><!-- follow-gallery-container -->\n\n"

/***/ }),

/***/ "./src/app/home/follow-gallery/follow-gallery.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/home/follow-gallery/follow-gallery.component.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".follow-gallery-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative; }\n  .follow-gallery-container .control {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    width: 50px;\n    min-height: 500px;\n    color: #737373;\n    position: absolute;\n    top: 0;\n    right: 0; }\n  .follow-gallery-container .control:last-child {\n      left: 0; }\n  .follow-gallery-container .control mat-icon {\n      cursor: pointer;\n      transition: color 0.4s ease 0s;\n      width: 30px;\n      height: 30px; }\n  .follow-gallery-container .control mat-icon:hover {\n        color: #ffcb53; }\n  .follow-gallery-container .control mat-icon.x-mark {\n        position: absolute;\n        top: 10%; }\n  .follow-gallery-container img {\n    max-width: 450px; }\n  .follow-gallery-container .title {\n    width: 300px;\n    margin-left: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    font-family: 'Roboto', sans-serif; }\n  .follow-gallery-container .title div {\n      margin: 15px; }\n  .follow-gallery-container .title div span {\n        margin: 0 20px 0;\n        font-size: 20px; }\n  .follow-gallery-container .title ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      line-height: 1.5; }\n  .follow-gallery-container .title ul li {\n        padding: 10px 15px 10px;\n        font-size: 14px; }\n  .follow-gallery-container .title ul li:nth-child(2n) {\n          background: #f2f2f2; }\n"

/***/ }),

/***/ "./src/app/home/follow-gallery/follow-gallery.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/follow-gallery/follow-gallery.component.ts ***!
  \*****************************************************************/
/*! exports provided: FollowGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowGalleryComponent", function() { return FollowGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_follow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/follow.service */ "./src/app/services/follow.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FollowGalleryComponent = /** @class */ (function () {
    function FollowGalleryComponent(followService, route, iconRegistry, sanitizer) {
        this.followService = followService;
        this.route = route;
        iconRegistry.addSvgIcon('right', sanitizer.bypassSecurityTrustResourceUrl('assets/right.svg'));
        iconRegistry.addSvgIcon('left', sanitizer.bypassSecurityTrustResourceUrl('assets/left.svg'));
        iconRegistry.addSvgIcon('message', sanitizer.bypassSecurityTrustResourceUrl('assets/message.svg'));
        iconRegistry.addSvgIcon('like', sanitizer.bypassSecurityTrustResourceUrl('assets/like.svg'));
        iconRegistry.addSvgIcon('x-mark-bold', sanitizer.bypassSecurityTrustResourceUrl('assets/x-mark-bold.svg'));
    }
    FollowGalleryComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.params['index']) {
            this.index = parseInt(this.route.snapshot.params['index']);
        }
        else {
            this.index = 0;
        }
        this.gallery = this.followService.getGallery();
    };
    FollowGalleryComponent.prototype.nextPrevSlide = function (next) {
        var nextIndex = this.index + next;
        if (nextIndex >= this.gallery.length) {
            this.index = 0;
        }
        else {
            if (nextIndex < 0) {
                this.index = this.gallery.length - 1;
            }
            else {
                this.index = nextIndex;
            }
        }
    };
    FollowGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-follow-gallery',
            template: __webpack_require__(/*! ./follow-gallery.component.html */ "./src/app/home/follow-gallery/follow-gallery.component.html"),
            styles: [__webpack_require__(/*! ./follow-gallery.component.sass */ "./src/app/home/follow-gallery/follow-gallery.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_services_follow_service__WEBPACK_IMPORTED_MODULE_1__["FollowService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], FollowGalleryComponent);
    return FollowGalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container\">\n\t<h3>\n\t\tWhite & Yellow\t\t\n\t</h3>\n\t<h1>\n\t\t\tThe best place to kick off your day or just take a break and enjoy a \n\t\t\t<span>\n\t\t\t\tyummy breakfast\n\t\t\t</span>\n\t</h1>\n\t<div class=\"row\">\n\t\t<div class=\"gallery\">\n\t\t\t<img class=\"album\" src=\"assets/1387048107991.jpeg\" alt=\"food-gallery\">\n\t\t</div>\n\t\t<div class=\"gallery\">\n\t\t\t<img class=\"portrait\" src=\"assets/DD-486-ketomackerel.jpg\" alt=\"food-gallery\">\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t\t<div class=\"gallery\">\n\t\t\t\t<h2>\n\t\t\t\t\tOur Special for <br>\n\t\t\t\t\tToday - Breakfast! <br>\n\t\t\t\t\tAll Day. Every Day\n\t\t\t\t</h2>\n\t\t\t</div>\n\t\t\t<div class=\"gallery\">\n\t\t\t\t<img class=\"portrait\" src=\"assets/Magic-Coffee-Breakfast-Thieves.jpg\" alt=\"food-gallery\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"gallery\">\n\t\t\t\t<img class=\"album\" src=\"assets/roasted-nut-muesli.jpg\" alt=\"food-gallery\">\n\t\t\t</div>\n\t\t\t<div class=\"gallery\">\n\t\t\t\t<img class=\"portrait\" src=\"assets/slider-food-3.jpg\" alt=\"food-gallery\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"gallery\">\n\t\t\t\t<img class=\"portrait\" src=\"assets/whitney-wright-356665-e1511435712954.jpg\" alt=\"food-gallery\">\n\t\t\t</div>\n\t\t\t<div class=\"gallery\">\n\t\t\t\t<img class=\"album\" src=\"assets/tomato-avocado-scrambled-eggs-1.jpg\" alt=\"food-gallery\">\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t\t<div class=\"row follow\">\n\t\t\t<span class=\"khech\">\n\t\t\t\t\tFollow Us\n\t\t\t</span>\n\t\t\t<h2>\n\t\t\t\t<span>\n\t\t\t\t\t#white&yellow\n\t\t\t\t</span>\t\t\t\t\t\n\t\t\t</h2>\n\t\t\t<div class=\"gallery-container\" *ngIf=\"followGallery.length\">\n\t\t\t\t<div \tclass=\"gallerry-item\"\n\t\t\t\t\t\t\t*ngFor=\"let item of followGallery; let i = index\"\n\t\t\t\t\t\t\trouterLink = \"/gallery/{{i}}\">\n\t\t\t\t\t<img [src]=\"'assets/'+item.image\" alt=\"follow-us\">\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<mat-icon svgIcon=\"like\"></mat-icon><span>{{item.likes}}</span>\n\t\t\t\t\t<mat-icon svgIcon=\"message\"></mat-icon><span>{{item.messages.length}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t</div><!-- row follow -->\t\t\n\t\t<app-subscribe></app-subscribe>\n</div> <!-- home-container -->\n\n"

/***/ }),

/***/ "./src/app/home/home.component.sass":
/*!******************************************!*\
  !*** ./src/app/home/home.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-container {\n  font-family: 'Cormorant', serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between; }\n  .home-container h1 {\n    text-align: center;\n    font-size: 55px;\n    margin-bottom: 60px; }\n  .home-container h1 span {\n      color: #ffcb53; }\n  .home-container h3 {\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500; }\n  .home-container .row {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    width: 100%;\n    margin: 20px 0 20px; }\n  .home-container .row .gallery {\n      max-width: 500px;\n      height: 500px; }\n  .home-container .row .gallery img.album {\n        max-width: 500px; }\n  .home-container .row .gallery img.portrait {\n        max-width: 400px; }\n  .home-container .row .gallery h2 {\n        font-size: 45px;\n        letter-spacing: 2px;\n        line-height: 1.5; }\n  .home-container .follow {\n    background: #c1c1c1;\n    padding: 30px 0 60px;\n      padding-min-height: 500px; }\n  .home-container .follow span.khech {\n      font-size: 18px;\n      font-family: 'Roboto', sans-serif;\n      font-weight: 500; }\n  .home-container .follow h2 {\n      width: 100%;\n      text-align: center;\n      margin: 50px 0 50px; }\n  .home-container .follow h2 span {\n        font-size: 35px;\n        background: #888; }\n  .home-container .follow .gallery-container {\n      width: 100%;\n      height: 160px;\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  .home-container .follow .gallery-container .gallerry-item {\n        width: 150px;\n        height: 150px;\n        margin: 0 5px 10px;\n        position: relative;\n        cursor: pointer; }\n  .home-container .follow .gallery-container .gallerry-item img {\n          width: 150px;\n          height: 150px; }\n  .home-container .follow .gallery-container .gallerry-item .info {\n          visibility: hidden;\n          width: 150px;\n          height: 150px;\n          background: #000;\n          color: #fff;\n          opacity: 0.8;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          z-index: 5; }\n  .home-container .follow .gallery-container .gallerry-item .info mat-icon {\n            margin: 5px; }\n  .home-container .follow .gallery-container .gallerry-item .info span {\n            font-size: 20px;\n            margin: 3px; }\n  .home-container .follow .gallery-container .gallerry-item:hover .info {\n          visibility: visible; }\n  .home-container app-subscribe {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_follow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/follow.service */ "./src/app/services/follow.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(followService, iconRegistry, sanitizer) {
        this.followService = followService;
        this.isWarningVisible = true;
        iconRegistry.addSvgIcon('message', sanitizer.bypassSecurityTrustResourceUrl('assets/message.svg'));
        iconRegistry.addSvgIcon('like', sanitizer.bypassSecurityTrustResourceUrl('assets/like.svg'));
        iconRegistry.addSvgIcon('x-mark', sanitizer.bypassSecurityTrustResourceUrl('assets/x-mark-thin.svg'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.followGallery = this.followService.getGallery();
    };
    HomeComponent.prototype.warning = function () {
        this.isWarningVisible = false;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.sass */ "./src/app/home/home.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_follow_service__WEBPACK_IMPORTED_MODULE_1__["FollowService"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main/left-tool-bar/left-tool-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/left-tool-bar/left-tool-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<span>\n\t\t\t<fa-icon [icon]=\"['fas', 'bars']\"  (click)=\"openMenu()\"></fa-icon>\n\t</span>\n\t<h3  routerLink = 'our-menu'>\n\t\tS <br>\n\t\te <br>\n\t\te <br>\n\t\t  <br>\n\t\tO <br>\n\t\tu <br>\n\t\tr <br>\n\t\t  <br>\n\t\tM <br>\n\t\te <br>\n\t\tn <br>\n\t\tu <br>\n\t</h3>\n\t<div class=\"egg\" routerLink = 'home'>\n\t\t<img src=\"assets/egg.png\" alt=\"egg\">\n\t</div><!-- egg -->\n</div><!-- container -->\n\n"

/***/ }),

/***/ "./src/app/main/left-tool-bar/left-tool-bar.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/main/left-tool-bar/left-tool-bar.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  font-family: 'Cormorant', serif;\n  color: #737373;\n  color: #000;\n  width: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 20;\n  background: none; }\n  .container span {\n    font-size: 20px;\n    color: #737373;\n    cursor: pointer;\n    transition: color 0.4s ease 0s;\n    font-size: 34px; }\n  .container span:hover {\n      color: #ffcb53; }\n  .container h3 {\n    text-align: center;\n    margin: 0px;\n    line-height: 1;\n    font-size: 21px;\n    cursor: pointer;\n    outline: none;\n    transition: color 0.4s ease 0s; }\n  .container h3:hover {\n      color: #ffcb53; }\n  .container .egg {\n    width: 45px;\n    height: 45px;\n    overflow: hidden;\n    cursor: pointer; }\n  .container .egg:hover img {\n      -webkit-transform: translateX(-45px);\n              transform: translateX(-45px); }\n"

/***/ }),

/***/ "./src/app/main/left-tool-bar/left-tool-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/left-tool-bar/left-tool-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: LeftToolBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftToolBarComponent", function() { return LeftToolBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeftToolBarComponent = /** @class */ (function () {
    function LeftToolBarComponent() {
        this.isOpenedMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSadTear"]);
    }
    LeftToolBarComponent.prototype.openMenu = function () {
        this.isOpenedMenu.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LeftToolBarComponent.prototype, "isOpenedMenu", void 0);
    LeftToolBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-tool-bar',
            template: __webpack_require__(/*! ./left-tool-bar.component.html */ "./src/app/main/left-tool-bar/left-tool-bar.component.html"),
            styles: [__webpack_require__(/*! ./left-tool-bar.component.sass */ "./src/app/main/left-tool-bar/left-tool-bar.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftToolBarComponent);
    return LeftToolBarComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\t<app-right-tool-bar></app-right-tool-bar>\r\n\t<app-nav-menu-bar></app-nav-menu-bar>\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/main.component.sass":
/*!******************************************!*\
  !*** ./src/app/main/main.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  width: 100%;\n  padding: 100px 80px 0; }\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.sass */ "./src/app/main/main.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/nav-menu-bar/nav-menu-bar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main/nav-menu-bar/nav-menu-bar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class]=\"containerClass\" *ngIf=\"isOpenedMenu\">\t\r\n\t\t\t<mat-icon svgIcon=\"x-mark\" (click)=\"closeMenu()\"></mat-icon>\t\r\n\t<ul>\r\n\t\t<li (click)=\"home()\">Home</li>\r\n\t\t<li (click)=\"ourStory()\">Our Story</li>\r\n\t\t<li (click)=\"menu()\">Menu</li>\r\n\t\t<li (click)=\"contact()\">Contact</li>\r\n\t</ul>\r\n</div>\r\n<app-left-tool-bar (isOpenedMenu)=\"getIsOpenedMenuValue($event)\"></app-left-tool-bar>"

/***/ }),

/***/ "./src/app/main/nav-menu-bar/nav-menu-bar.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/main/nav-menu-bar/nav-menu-bar.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-menu-container {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 25;\n  background: #ffcb53; }\n  .nav-menu-container ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none; }\n  .nav-menu-container ul li {\n      display: inline;\n      padding: 0 15px 0;\n      font-weight: 600;\n      letter-spacing: 2px;\n      transition: color 0.4s ease 0s;\n      cursor: pointer; }\n  .nav-menu-container ul li:hover {\n        color: #fff; }\n  .nav-menu-container mat-icon {\n    position: absolute;\n      position-top: 38%;\n    left: 40px;\n    transition: color 0.4s ease 0s;\n    cursor: pointer; }\n  .nav-menu-container mat-icon:hover {\n      color: #fff; }\n  .open {\n  -webkit-animation-name: openMenu;\n          animation-name: openMenu;\n  -webkit-animation-duration: .8s;\n          animation-duration: .8s; }\n  .close {\n  -webkit-animation-name: closeMenu;\n          animation-name: closeMenu;\n  -webkit-animation-duration: .8s;\n          animation-duration: .8s; }\n  @-webkit-keyframes openMenu {\n  0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n  @keyframes openMenu {\n  0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n  @-webkit-keyframes closeMenu {\n  0% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); }\n  100% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); } }\n  @keyframes closeMenu {\n  0% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); }\n  100% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); } }\n"

/***/ }),

/***/ "./src/app/main/nav-menu-bar/nav-menu-bar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/nav-menu-bar/nav-menu-bar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavMenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuBarComponent", function() { return NavMenuBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavMenuBarComponent = /** @class */ (function () {
    function NavMenuBarComponent(iconRegistry, sanitizer, router) {
        this.router = router;
        this.state = 'open';
        this.isOpenedMenu = false;
        this.containerClass = 'nav-menu-container';
        iconRegistry.addSvgIcon('x-mark', sanitizer.bypassSecurityTrustResourceUrl('assets/x-mark-thin.svg'));
    }
    NavMenuBarComponent.prototype.closeMenu = function () {
        var _this = this;
        this.containerClass = 'nav-menu-container close';
        setTimeout(function () {
            _this.isOpenedMenu = false;
        }, 750);
    };
    NavMenuBarComponent.prototype.getIsOpenedMenuValue = function (event) {
        this.isOpenedMenu = event;
        this.containerClass = 'nav-menu-container open';
    };
    NavMenuBarComponent.prototype.home = function () {
        this.closeMenu();
        this.router.navigate(['home']);
    };
    NavMenuBarComponent.prototype.menu = function () {
        this.closeMenu();
        this.router.navigate(['our-menu']);
    };
    NavMenuBarComponent.prototype.ourStory = function () {
        this.closeMenu();
        this.router.navigate(['our-story']);
    };
    NavMenuBarComponent.prototype.contact = function () {
        this.closeMenu();
        this.router.navigate(['contacts']);
    };
    NavMenuBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu-bar',
            template: __webpack_require__(/*! ./nav-menu-bar.component.html */ "./src/app/main/nav-menu-bar/nav-menu-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu-bar.component.sass */ "./src/app/main/nav-menu-bar/nav-menu-bar.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavMenuBarComponent);
    return NavMenuBarComponent;
}());



/***/ }),

/***/ "./src/app/main/right-tool-bar/book-table/book-table.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/right-tool-bar/book-table/book-table.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form \n\t\t\t#bookATabaleForm=\"ngForm\" \n\t\t\t(ngSubmit)=\"bookATable()\"\n\t\t\t[class]=\"bookTableFormClass\"\n\t\t\t>\t\n\t<mat-icon \n\t\t\tsvgIcon=\"x-mark\" \n\t\t\t(click)=\"closeForm()\"\n\t\t\tclass=\"closeForm\"\n\t\t\t></mat-icon>\n\t<mat-form-field>\n\t\t<input \n\t\t\t\tmatInput \n\t\t\t\tplaceholder=\"Name\"\n\t\t\t\tngModel \n\t\t\t\tname=\"userName\"\n\t\t\t\t#userName=\"ngModel\"\n\t\t\t\trequired>\n  </mat-form-field>\n\t<mat-form-field>\n    <span matPrefix>+38 &nbsp;</span>\n\t\t<input \n\t\t\t\ttype=\"tel\" \n\t\t\t\tmatInput \n\t\t\t\tplaceholder=\"Phone\" \n\t\t\t\tngModel \n\t\t\t\tname=\"phone\"\n\t\t\t\t#phone=\"ngModel\"\n\t\t\t\trequired\n\t\t\t\t>\n\t\t<mat-icon matSuffix>mode_edit</mat-icon>\n\t\t<mat-error *ngIf=\"isValidPhone\">\n      Please enter a valid phone number\n    </mat-error>\n  </mat-form-field>\t\n\t<mat-form-field>\n\t\t<input \n\t\t\t\tmatInput [min]=\"minDate\" \n\t\t\t\t[max]=\"maxDate\" \n\t\t\t\t[matDatepicker]=\"picker\" \n\t\t\t\tplaceholder=\"Date\" \n\t\t\t\tngModel \n\t\t\t\tname=\"date\"\n\t\t\t\t#date=\"ngModel\"\n\t\t\t\trequired\n\t\t\t\t>\n\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t<mat-datepicker #picker></mat-datepicker>\n\t</mat-form-field>\n\t<mat-form-field>\n\t\t<mat-select \n\t\t\t\tplaceholder=\"Time\" \n\t\t\t\tngModel \n\t\t\t\tname=\"time\"\n\t\t\t\t#time=\"ngModel\"\n\t\t\t\trequired\n\t\t\t\t>\n      <mat-option *ngFor=\"let time of times\" [value]=\"time\">\n        {{time}}\n      </mat-option>\n    </mat-select>\n\t</mat-form-field>\n\t<mat-form-field>\n\t\t<mat-select \n\t\t\t\tplaceholder=\"Party Size\"\n\t\t\t\tngModel \n\t\t\t\tname=\"size\"\n\t\t\t\t#size=\"ngModel\"\n\t\t\t\trequired\n\t\t\t\t>\n      <mat-option *ngFor=\"let person of persons\" [value]=\"person\">\n        {{person}}\n      </mat-option>\n    </mat-select>\n\t</mat-form-field>\n\t<input \n\t\t\ttype=\"submit\" \n\t\t\tvalue=\"Book now\"\n\t\t\t>\n</form>\n"

/***/ }),

/***/ "./src/app/main/right-tool-bar/book-table/book-table.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/main/right-tool-bar/book-table/book-table.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  width: 100%;\n  height: 100%;\n  background: #ffcb53;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative; }\n  form mat-icon.closeForm {\n    position: absolute;\n    top: 10px;\n    right: 40px;\n    z-index: 26;\n    transition: color 0.4s ease 0s;\n    cursor: pointer; }\n  form mat-icon.closeForm:hover {\n      color: #fff; }\n  form mat-form-field {\n    width: 250px; }\n  form input[type=\"submit\"] {\n    width: 250px;\n    height: 50px;\n    background: none;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    transition: 0.4s ease 0s;\n    border-radius: 4px;\n    font-size: 16px; }\n  form input[type=\"submit\"]:hover {\n      background: #ebb73f; }\n  form.openForm {\n    -webkit-animation-name: openForm;\n            animation-name: openForm;\n    -webkit-animation-duration: .8s;\n            animation-duration: .8s; }\n  form.closeForm {\n    -webkit-animation-name: closeForm;\n            animation-name: closeForm;\n    -webkit-animation-duration: .8s;\n            animation-duration: .8s; }\n  @-webkit-keyframes openForm {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    opacity: 1; } }\n  @keyframes openForm {\n  0% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0; }\n  100% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    opacity: 1; } }\n  @-webkit-keyframes closeForm {\n  0% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0; } }\n  @keyframes closeForm {\n  0% {\n    -webkit-transform: translateX(0%);\n            transform: translateX(0%);\n    opacity: 1; }\n  100% {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    opacity: 0; } }\n"

/***/ }),

/***/ "./src/app/main/right-tool-bar/book-table/book-table.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/right-tool-bar/book-table/book-table.component.ts ***!
  \************************************************************************/
/*! exports provided: BookTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookTableComponent", function() { return BookTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookTableComponent = /** @class */ (function () {
    function BookTableComponent(iconRegistry, sanitizer) {
        this.isOpenedBookTableForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.minDate = new Date();
        this.maxDate = new Date(2020, 0, 1);
        this.times = ['7:00AM', '7:30AM', '8:00AM', '8:30AM', '9:00AM', '9:30AM', '10:00AM', '10:30AM', '11:00AM'];
        this.persons = ['1 person', '2 persons', '3 persons', '4 persons', '5 persons', '6 persons'];
        this.isValidPhone = false;
        this.isOpenedBookForm = false;
        this.bookTableFormClass = 'openForm';
        iconRegistry.addSvgIcon('x-mark', sanitizer.bypassSecurityTrustResourceUrl('assets/x-mark-thin.svg'));
    }
    BookTableComponent.prototype.closeForm = function () {
        var _this = this;
        this.bookTableFormClass = 'closeForm';
        setTimeout(function () {
            _this.isOpenedBookTableForm.emit(false);
        }, 750);
    };
    BookTableComponent.prototype.isValidPhoneNumber = function (phoneNo) {
        var phoneRE = /\d\d\d\d\d\d\d\d\d\d/;
        if (phoneNo.match(phoneRE)) {
            this.isValidPhone = false;
        }
        else {
            this.isValidPhone = true;
        }
    };
    BookTableComponent.prototype.bookATable = function () {
        this.isValidPhoneNumber(this.bookForm.value.phone);
        if (this.bookForm.valid && !this.isValidPhone) {
            this.bookForm.reset();
            this.closeForm();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bookATabaleForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], BookTableComponent.prototype, "bookForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], BookTableComponent.prototype, "isOpenedBookTableForm", void 0);
    BookTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-table',
            template: __webpack_require__(/*! ./book-table.component.html */ "./src/app/main/right-tool-bar/book-table/book-table.component.html"),
            styles: [__webpack_require__(/*! ./book-table.component.sass */ "./src/app/main/right-tool-bar/book-table/book-table.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], BookTableComponent);
    return BookTableComponent;
}());



/***/ }),

/***/ "./src/app/main/right-tool-bar/right-tool-bar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/right-tool-bar/right-tool-bar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h3 (click)=\"openBookTableForm()\">\n\t\tB <br>\n\t\to <br>\n\t\to <br>\n\t\tk <br>\n\t\t  <br>\n\t\ta <br>\n\t\t  <br>\n\t\tT <br>\n\t\ta <br>\n\t\tb <br>\n\t\tl <br>\n\t\te <br>\n\t</h3>\n\t<div class=\"social\">\n\t\t<fa-icon [icon]=\"['fab', 'facebook-f']\"></fa-icon>\n\t\t<fa-icon [icon]=\"['fab', 'twitter']\"></fa-icon>\t\t\n\t\t<fa-icon [icon]=\"['fab', 'instagram']\"></fa-icon>\n\t</div><!-- social -->\n\t<app-book-table *ngIf=\"isOpenedForm\"  (isOpenedBookTableForm)=\"closeBookTableForm($event)\"></app-book-table>\n</div><!-- container -->\n"

/***/ }),

/***/ "./src/app/main/right-tool-bar/right-tool-bar.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/main/right-tool-bar/right-tool-bar.component.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  font-family: 'Cormorant', serif;\n  color: #737373;\n  color: #000;\n  width: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 100%;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 20;\n  background: none; }\n  .container app-book-table {\n    position: fixed;\n    width: 300px;\n    height: 100%;\n    right: 0;\n    top: 0;\n    z-index: 25; }\n  .container h3 {\n    text-align: center;\n    margin: 0px;\n    line-height: 1;\n    font-size: 21px;\n    cursor: pointer;\n    outline: none;\n    transition: color 0.4s ease 0s; }\n  .container h3:hover {\n      color: #ffcb53; }\n  .container .social {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    color: #737373;\n    min-height: 100px;\n    font-size: 20px; }\n  .container .social fa-icon {\n      transition: color 0.4s ease 0s;\n      cursor: pointer; }\n  .container .social fa-icon:hover {\n        color: #ffcb53; }\n"

/***/ }),

/***/ "./src/app/main/right-tool-bar/right-tool-bar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/right-tool-bar/right-tool-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: RightToolBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightToolBarComponent", function() { return RightToolBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RightToolBarComponent = /** @class */ (function () {
    function RightToolBarComponent() {
        this.isOpenedForm = false;
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInstagram"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTwitter"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebookF"]);
    }
    RightToolBarComponent.prototype.openBookTableForm = function () {
        this.isOpenedForm = true;
    };
    RightToolBarComponent.prototype.closeBookTableForm = function (event) {
        this.isOpenedForm = event;
    };
    RightToolBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-tool-bar',
            template: __webpack_require__(/*! ./right-tool-bar.component.html */ "./src/app/main/right-tool-bar/right-tool-bar.component.html"),
            styles: [__webpack_require__(/*! ./right-tool-bar.component.sass */ "./src/app/main/right-tool-bar/right-tool-bar.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], RightToolBarComponent);
    return RightToolBarComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-container\">\n\t<h3  routerLink = '/home'>\n\t\tWhite & Yellow\t\t\n\t</h3>\n\t<h4>\n\t\tServed All Day Everyday Since 2015\n\t</h4>\n\t<p>\n\t\tI’m a menu description. Click me and then “Edit Menu” to open the Restaurant Menu editor and change my text.\n\t</p>\n\t<div class=\"menu-category\">\n\t\t<h2>\n\t\t\tBre<span>akf</span>ast\n\t\t</h2>\n\t\t<div class=\"menu-item\" *ngFor=\"let breakfast of menu.breakfast\">\n\t\t\t<span class=\"name\">\n\t\t\t\t<mat-icon \n\t\t\t\t\t\t\tclass=\"star\"\t\n\t\t\t\t\t\t\tsvgIcon=\"star\"\n\t\t\t\t\t\t\t*ngIf=\"breakfast.promo\"\n\t\t\t\t\t\t\t></mat-icon>\n\t\t\t{{breakfast.name}}\n\t\t\t</span>\n\t\t\t<p>\n\t\t\t\t{{breakfast.description}}\n\t\t\t</p>\n\t\t\t<ul class=\"tastes\" *ngIf=\"breakfast.tastes.length\">\n\t\t\t\t<li *ngFor=\"let b_tast of breakfast.tastes\">\n\t\t\t\t\t<span>{{b_tast.name}}</span>\n\t\t\t\t\t<span>${{b_tast.price}}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<span class=\"price\" *ngIf=\"breakfast.price>0\">\n\t\t\t\t${{breakfast.price}}\n\t\t\t</span>\n\t\t\t<ul class=\"other\" *ngIf=\"breakfast.other.length\">\n\t\t\t\t<li *ngFor=\"let b_el of breakfast.other\">\n\t\t\t\t\t{{b_el}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div><!-- menu-item -->\n\t</div><!-- menu-category -->\t\n\t<div class=\"menu-category\">\n\t\t<h2>\n\t\t\t\tPastrie<span>s & C</span>akes\n\t\t</h2>\n\t\t<div class=\"menu-item\" *ngFor=\"let cake of menu.cakes\">\n\t\t\t<span class=\"name\">\n\t\t\t\t{{cake.name}}\n\t\t\t</span>\n\t\t\t<p>\n\t\t\t\t{{cake.description}}\n\t\t\t</p>\n\t\t\t<ul class=\"tastes\" *ngIf=\"cake.tastes.length\">\n\t\t\t\t<li *ngFor=\"let c_tast of cake.tastes\">\n\t\t\t\t\t<span>{{c_tast.name}}</span>\n\t\t\t\t\t<span>${{c_tast.price}}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<span class=\"price\" *ngIf=\"cake.price>0\">\n\t\t\t\t${{cake.price}}\n\t\t\t</span>\n\t\t\t<ul class=\"other\" *ngIf=\"cake.other.length\">\n\t\t\t\t<li *ngFor=\"let c_el of cake.other\">\n\t\t\t\t\t{{c_el}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div><!-- menu-item -->\n\t</div><!-- menu-category -->\t\n\t<div class=\"menu-category\">\n\t\t<h2>\n\t\t\t\tD<span>rin</span>ks\n\t\t</h2>\n\t\t<div class=\"menu-item\" *ngFor=\"let drink of menu.drinks\">\n\t\t\t<span class=\"name\">\n\t\t\t\t{{drink.name}}\n\t\t\t</span>\n\t\t\t<p>\n\t\t\t\t{{drink.description}}\n\t\t\t</p>\n\t\t\t<ul class=\"tastes\" *ngIf=\"drink.tastes.length\">\n\t\t\t\t<li *ngFor=\"let d_tast of drink.tastes\">\n\t\t\t\t\t<span>{{d_tast.name}}</span>\n\t\t\t\t\t<span>${{d_tast.price}}</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<span class=\"price\" *ngIf=\"drink.price>0\">\n\t\t\t\t${{drink.price}}\n\t\t\t</span>\n\t\t\t<ul class=\"other\" *ngIf=\"drink.other.length\">\n\t\t\t\t<li *ngFor=\"let d_el of drink.other\">\n\t\t\t\t\t{{d_el}}\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div><!-- menu-item -->\n\t</div><!-- menu-category -->\n\t<app-subscribe></app-subscribe>\n</div><!-- menu-container -->\n"

/***/ }),

/***/ "./src/app/menu/menu.component.sass":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  font-family: 'Cormorant Garamond', serif;\n  font-style: italic; }\n  .menu-container app-subscribe {\n    width: 100%; }\n  .menu-container h3 {\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    cursor: pointer;\n    outline: none;\n    transition: color 0.4s ease 0s; }\n  .menu-container h3:hover {\n      color: #ffcb53; }\n  .menu-container h4 {\n    font-size: 18px;\n    font-weight: bold;\n    font-family: sans-serif;\n      font-family-font-style: normal; }\n  .menu-container p {\n    font-size: 19px;\n    font-style: normal; }\n  .menu-container .menu-category {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    flex-wrap: wrap;\n    max-width: 750px; }\n  .menu-container .menu-category h2 {\n      width: 100%;\n      color: #ffcb53;\n      font-size: 40px;\n      font-weight: 600;\n      text-align: center;\n      margin-bottom: 50px; }\n  .menu-container .menu-category h2 span {\n        border-bottom: 1px solid #000000;\n        padding-bottom: 10px; }\n  .menu-container .menu-category .menu-item {\n      width: 300px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-between;\n      margin: 10px 0 50px; }\n  .menu-container .menu-category .menu-item span.name {\n        font-size: 16px;\n        font-weight: bold;\n          font-weight-font-family: sans-serif;\n        font-style: normal; }\n  .menu-container .menu-category .menu-item span.name mat-icon.star {\n          font-size: 12px;\n          color: #ffcb53;\n          width: 22px;\n          padding-top: 10px; }\n  .menu-container .menu-category .menu-item span.price {\n        font-size: 23px;\n          font-size-margin: 10px; }\n  .menu-container .menu-category .menu-item p {\n        font-style: italic;\n        text-align: center;\n        margin: 15px 0 25px;\n        font-size: 19px; }\n  .menu-container .menu-category .menu-item ul {\n        list-style: none;\n        padding: 0;\n        margin: 0; }\n  .menu-container .menu-category .menu-item ul.other {\n          display: flex;\n          margin: 10px 0 10px; }\n  .menu-container .menu-category .menu-item ul.other li {\n            background: #000;\n            padding: 2px 5px 2px;\n            color: #fff;\n            margin: 0 5px 0;\n            font-style: normal;\n            font-size: 12px;\n            font-weight: bold; }\n  .menu-container .menu-category .menu-item ul.tastes {\n          width: 100%; }\n  .menu-container .menu-category .menu-item ul.tastes li {\n            display: flex;\n            justify-content: space-between;\n            font-weight: 19px;\n            overflow: hidden;\n            position: relative; }\n  .menu-container .menu-category .menu-item ul.tastes li:before {\n              content: '.........................................................................';\n              position: absolute;\n              left: 0;\n              top: 0; }\n  .menu-container .menu-category .menu-item ul.tastes li span {\n              background: #ffffff;\n              z-index: 1;\n                z-index-padding: 0 3px 0;\n              line-height: 1.5; }\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/menu.service */ "./src/app/services/menu.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuService, iconRegistry, sanitizer) {
        this.menuService = menuService;
        iconRegistry.addSvgIcon('star', sanitizer.bypassSecurityTrustResourceUrl('assets/star.svg'));
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menu = this.menuService.getMenu();
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.sass */ "./src/app/menu/menu.component.sass")]
        }),
        __metadata("design:paramtypes", [_services_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/models/follow.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/follow.model.ts ***!
  \****************************************/
/*! exports provided: FollowUs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUs", function() { return FollowUs; });
var FollowUs = /** @class */ (function () {
    function FollowUs(image, likes, messages) {
        this.image = image;
        this.likes = likes;
        this.messages = messages;
    }
    return FollowUs;
}());



/***/ }),

/***/ "./src/app/models/menu.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/menu.model.ts ***!
  \**************************************/
/*! exports provided: MenuItem, Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
var MenuItem = /** @class */ (function () {
    function MenuItem(name, tastes, price, other, description, promo) {
        if (promo === void 0) { promo = false; }
        this.name = name;
        this.tastes = tastes;
        this.price = price;
        this.other = other;
        this.description = description;
        this.promo = promo;
    }
    return MenuItem;
}());

var Menu = /** @class */ (function () {
    function Menu() {
    }
    return Menu;
}());



/***/ }),

/***/ "./src/app/our-story/our-story.component.html":
/*!****************************************************!*\
  !*** ./src/app/our-story/our-story.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"our-story-container\">\n\t<h3  routerLink = '/home'>\n\t\tWhite & Yellow\t\t\n\t</h3>\n\t<h4>\n\t\tOur Story\n\t</h4>\n\t<img src=\"assets/story.jpg\" alt=\"story\">\n\t<h1>\n\t\tDay or night, sunny or grey, enjoy our all-day breakfast service.\n\t</h1>\n\t<p>\n\t\tI'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.\n\t</p>\n\t<p>\n\t\tThis is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.\n\t</p>\n\t<app-subscribe></app-subscribe>\n</div>\n"

/***/ }),

/***/ "./src/app/our-story/our-story.component.sass":
/*!****************************************************!*\
  !*** ./src/app/our-story/our-story.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".our-story-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  font-family: 'Cormorant Garamond', serif;\n  font-style: italic; }\n  .our-story-container app-subscribe {\n    width: 100%; }\n  .our-story-container h3 {\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 24px;\n    cursor: pointer;\n    outline: none;\n    transition: color 0.4s ease 0s; }\n  .our-story-container h3:hover {\n      color: #ffcb53; }\n  .our-story-container h4 {\n    font-size: 18px;\n    font-weight: bold;\n    font-family: sans-serif;\n      font-family-font-style: normal; }\n  .our-story-container h1 {\n    margin: 50px 0 30px;\n    max-width: 500px;\n    text-align: center;\n    font-size: 40px;\n    letter-spacing: 1px; }\n  .our-story-container p {\n    font-size: 17px;\n    max-width: 700px;\n    text-align: center;\n    padding: 0 20px 0; }\n  .our-story-container p:last-of-type {\n      margin-bottom: 50px; }\n"

/***/ }),

/***/ "./src/app/our-story/our-story.component.ts":
/*!**************************************************!*\
  !*** ./src/app/our-story/our-story.component.ts ***!
  \**************************************************/
/*! exports provided: OurStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurStoryComponent", function() { return OurStoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurStoryComponent = /** @class */ (function () {
    function OurStoryComponent() {
    }
    OurStoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-our-story',
            template: __webpack_require__(/*! ./our-story.component.html */ "./src/app/our-story/our-story.component.html"),
            styles: [__webpack_require__(/*! ./our-story.component.sass */ "./src/app/our-story/our-story.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], OurStoryComponent);
    return OurStoryComponent;
}());



/***/ }),

/***/ "./src/app/services/follow.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/follow.service.ts ***!
  \********************************************/
/*! exports provided: FollowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowService", function() { return FollowService; });
/* harmony import */ var src_app_models_follow_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/follow.model */ "./src/app/models/follow.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FollowService = /** @class */ (function () {
    function FollowService() {
        this.gallery = [
            new src_app_models_follow_model__WEBPACK_IMPORTED_MODULE_0__["FollowUs"]('follow-us-1.jpg', 2, []),
            new src_app_models_follow_model__WEBPACK_IMPORTED_MODULE_0__["FollowUs"]('follow-us-2.jpg', 0, []),
            new src_app_models_follow_model__WEBPACK_IMPORTED_MODULE_0__["FollowUs"]('follow-us-3.jpg', 2, []),
            new src_app_models_follow_model__WEBPACK_IMPORTED_MODULE_0__["FollowUs"]('follow-us-4.jpg', 2, []),
            new src_app_models_follow_model__WEBPACK_IMPORTED_MODULE_0__["FollowUs"]('follow-us-5.jpg', 5, []),
            new src_app_models_follow_model__WEBPACK_IMPORTED_MODULE_0__["FollowUs"]('follow-us-6.jpg', 2, ['Nice!', 'Delicios!', 'Good morning, Big City!']),
            new src_app_models_follow_model__WEBPACK_IMPORTED_MODULE_0__["FollowUs"]('follow-us-7.jpg', 2, []),
            new src_app_models_follow_model__WEBPACK_IMPORTED_MODULE_0__["FollowUs"]('follow-us-8.jpg', 2, []),
            new src_app_models_follow_model__WEBPACK_IMPORTED_MODULE_0__["FollowUs"]('follow-us-9.jpg', 4, []),
            new src_app_models_follow_model__WEBPACK_IMPORTED_MODULE_0__["FollowUs"]('follow-us-10.jpg', 2, []),
            new src_app_models_follow_model__WEBPACK_IMPORTED_MODULE_0__["FollowUs"]('follow-us-11.jpg', 2, []),
            new src_app_models_follow_model__WEBPACK_IMPORTED_MODULE_0__["FollowUs"]('follow-us-12.jpg', 2, [])
        ];
    }
    FollowService.prototype.getGallery = function () {
        return this.gallery;
    };
    FollowService.prototype.addNewMessage = function (index, message) {
        this.gallery[index].messages.push(message);
    };
    FollowService.prototype.likeIt = function (index) {
        this.gallery[index].likes += 1;
    };
    FollowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FollowService);
    return FollowService;
}());



/***/ }),

/***/ "./src/app/services/menu.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/menu.service.ts ***!
  \******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _models_menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/menu.model */ "./src/app/models/menu.model.ts");

var MenuService = /** @class */ (function () {
    function MenuService() {
        this.menu = {
            breakfast: [
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Granola', [], 9, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Overnight Oats', [], 9, ['VEGAN'], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Superfood bowl', [], 9, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Continental Breakfast', [], 9, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Avocado Toast', [], 9, ['VEGETARIAN', 'ORGANIC'], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Spinach Brioche', [], 9, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Eggs Benedict', [], 9, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Bacon & Eggs', [], 9, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Smoked Salmon Bagel', [], 9, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Bakery Basket', [], 9, ['VEGAN'], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.', true),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Pancakes', [{ name: 'Banana nut', price: 9 }, { name: 'Blueberry', price: 9 }, { name: 'Chocolate', price: 9 }], 0, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.', true)
            ],
            cakes: [
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Apple Pie', [], 9, ['VEGETARIAN', 'ORGANIC'], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.', true),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Cheese Cake', [{ name: '300 gr', price: 3 }, { name: '400 gr', price: 5 }], 0, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Croissant', [{ name: 'Plain', price: 9 }, { name: 'Pistachio', price: 9 }, { name: 'Almond', price: 9 }, { name: 'Ham & Cheese', price: 9 }], 0, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Muffin', [{ name: 'Banana', price: 9 }, { name: 'Blueberry', price: 9 }, { name: 'Pumpkin', price: 9 }], 0, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Scones', [], 9, ['VEGAN'], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.')
            ],
            drinks: [
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Coffee', [{ name: 'Filter', price: 9 }, { name: 'Espresso', price: 9 }, { name: 'Homemade Juices', price: 9 }, { name: 'Tea', price: 9 }], 0, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
                new _models_menu_model__WEBPACK_IMPORTED_MODULE_0__["MenuItem"]('Cocktails', [{ name: 'Campari', price: 9 }, { name: 'Orange Juice', price: 9 }, { name: 'Mimosa', price: 9 }, { name: 'Kir Royale', price: 9 }, { name: 'Bloody Mary', price: 9 }], 0, [], 'I’m a description. Click me and “Edit Menu” to open the Restaurant Menu editor and change my text.'),
            ]
        };
    }
    MenuService.prototype.getMenu = function () {
        return this.menu;
    };
    return MenuService;
}());



/***/ }),

/***/ "./src/app/subscribe/subscribe.component.html":
/*!****************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"subscribe-container\">\n\t\t<h3>\n\t\t\tWhite & Yellow\t\t\n\t\t</h3>\n\t\t<ul>\n\t\t\t<li>500 Terry Francois Street</li>\n\t\t\t<li>San Francisco, CA 94158</li>\n\t\t\t<li>Tel: 123-456-7890</li>\n\t\t</ul>\n\t\t<ul>\n\t\t\t<li>Mon - Fri: 7am - 10pm</li>\n\t\t\t<li>Saturday: 8am - 11pm</li>\n\t\t\t<li>Sunday: 8am - 10pm</li>\n\t\t</ul>\n\t\t<form action=\"#\">\n\t\t\t<span>\n\t\t\t\t\tLet's be friends and have eggs benedict\n\t\t\t</span>\n\t\t\t<div>\n\t\t\t\t<input type=\"text\" placeholder=\"Email Address\">\n\t\t\t\t<input type=\"submit\" value=\"Subscribe\">\n\t\t\t</div>\t\t\t\t\t\n\t\t</form>\n</div><!-- subscribe-container -->\t"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.sass":
/*!****************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".subscribe-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 40px 0 40px; }\n  .subscribe-container ul {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n  .subscribe-container form input[type=\"text\"] {\n    margin-top: 20px;\n    font-family: 'Cormorant', serif;\n    font-weight: 600;\n    letter-spacing: 1px;\n    width: 200px;\n    height: 40px;\n    padding: 5px 10px 5px;\n    outline: none;\n    border: 1px solid #c1c1c1; }\n  .subscribe-container form input[type=\"submit\"] {\n    width: 110px;\n    height: 40px;\n    outline: none;\n    border: none;\n    background: #000;\n    color: #ffffff;\n    margin-left: 15px;\n    transition: color 0.4s ease 0s;\n    cursor: pointer; }\n  .subscribe-container form input[type=\"submit\"]:hover {\n      color: #ffcb53; }\n"

/***/ }),

/***/ "./src/app/subscribe/subscribe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.ts ***!
  \**************************************************/
/*! exports provided: SubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function() { return SubscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubscribeComponent = /** @class */ (function () {
    function SubscribeComponent() {
    }
    SubscribeComponent.prototype.ngOnInit = function () {
    };
    SubscribeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscribe',
            template: __webpack_require__(/*! ./subscribe.component.html */ "./src/app/subscribe/subscribe.component.html"),
            styles: [__webpack_require__(/*! ./subscribe.component.sass */ "./src/app/subscribe/subscribe.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscribeComponent);
    return SubscribeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\It-industries\my-portfolio\projects\cafe-breakfast\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map