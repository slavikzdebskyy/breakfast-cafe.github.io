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
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _main_left_tool_bar_left_tool_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/left-tool-bar/left-tool-bar.component */ "./src/app/main/left-tool-bar/left-tool-bar.component.ts");
/* harmony import */ var _main_right_tool_bar_right_tool_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/right-tool-bar/right-tool-bar.component */ "./src/app/main/right-tool-bar/right-tool-bar.component.ts");
/* harmony import */ var _main_nav_menu_bar_nav_menu_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/nav-menu-bar/nav-menu-bar.component */ "./src/app/main/nav-menu-bar/nav-menu-bar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _services_follow_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/follow.service */ "./src/app/services/follow.service.ts");
/* harmony import */ var _home_follow_gallery_follow_gallery_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/follow-gallery/follow-gallery.component */ "./src/app/home/follow-gallery/follow-gallery.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _main_left_tool_bar_left_tool_bar_component__WEBPACK_IMPORTED_MODULE_10__["LeftToolBarComponent"],
                _main_right_tool_bar_right_tool_bar_component__WEBPACK_IMPORTED_MODULE_11__["RightToolBarComponent"],
                _main_nav_menu_bar_nav_menu_bar_component__WEBPACK_IMPORTED_MODULE_12__["NavMenuBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _home_follow_gallery_follow_gallery_component__WEBPACK_IMPORTED_MODULE_15__["FollowGalleryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_6__["Routers"]),
            ],
            providers: [_services_follow_service__WEBPACK_IMPORTED_MODULE_14__["FollowService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
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


var Routers = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'gallery', component: _home_follow_gallery_follow_gallery_component__WEBPACK_IMPORTED_MODULE_1__["FollowGalleryComponent"] },
    { path: 'gallery/:index', component: _home_follow_gallery_follow_gallery_component__WEBPACK_IMPORTED_MODULE_1__["FollowGalleryComponent"] }
];


/***/ }),

/***/ "./src/app/home/follow-gallery/follow-gallery.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/follow-gallery/follow-gallery.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"follow-gallery-container\" *ngIf=\"gallery.length\">\n\t<div class=\"control\">\n\t\t<mat-icon class=\"x-mark\" svgIcon=\"x-mark-bold\" routerLink = '/home'></mat-icon>\n\t\t<mat-icon svgIcon=\"right\" (click)=\"nextPrevSlide(1)\"></mat-icon>\n\t</div>\n\t<img [src]=\"'assets/'+gallery[index].image\" alt=\"\">\n\t<div class=\"title\">\n\t\t<div>\n\t\t\t<span>{{gallery[index].likes}}</span>\n\t\t</div>\n\t\t<div>\n\t\t\t<span>{{gallery[index].messages.length}}</span><mat-icon svgIcon=\"message\"></mat-icon>\n\t\t</div>\n\t\t<ul *ngIf=\"gallery[index].messages.length\">\n\t\t\t<li>Comments:</li>\n\t\t\t<li *ngFor=\"let msg of gallery[index].messages\">\n\t\t\t\t# {{msg}}\n\t\t\t</li>\n\t\t</ul>\t\t\t\n\t</div>\n\t<div class=\"control\">\n\t\t\t<mat-icon svgIcon=\"left\" (click)=\"nextPrevSlide(-1)\"></mat-icon>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/follow-gallery/follow-gallery.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/home/follow-gallery/follow-gallery.component.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".follow-gallery-container {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative; }\n  .follow-gallery-container .control {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    width: 50px;\n    min-height: 500px;\n    color: #737373;\n    position: absolute;\n    top: 0;\n    right: 0; }\n  .follow-gallery-container .control:last-child {\n      left: 0; }\n  .follow-gallery-container .control mat-icon {\n      cursor: pointer;\n      transition: .4s;\n      width: 30px;\n      height: 30px; }\n  .follow-gallery-container .control mat-icon:hover {\n        color: #ffcb53; }\n  .follow-gallery-container .control mat-icon.x-mark {\n        position: absolute;\n        top: 10%; }\n  .follow-gallery-container img {\n    max-width: 450px; }\n  .follow-gallery-container .title {\n    width: 300px;\n    margin-left: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    font-family: 'Roboto', sans-serif; }\n  .follow-gallery-container .title div {\n      margin: 15px; }\n  .follow-gallery-container .title div span {\n        margin: 0 20px 0;\n        font-size: 20px; }\n  .follow-gallery-container .title ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      line-height: 1.5; }\n  .follow-gallery-container .title ul li {\n        padding: 10px 15px 10px;\n        font-size: 14px; }\n  .follow-gallery-container .title ul li:nth-child(2n) {\n          background: #f2f2f2; }\n"

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

module.exports = "<div class=\"home-container\">\n\t<!-- WARNING -->\n\t<div class=\"warning\" *ngIf=\"isWarningVisible\">\n\t\t<span>Site in the development process</span>\n\t\t<span class=\"stop\" (click)=\"warning()\">X</span>\n\t</div>\n\t<!-- WARNING -->\n\t<h3>\n\t\tWhite & Yellow\t\t\n\t</h3>\n\t<h1>\n\t\t\tThe best place to kick off your day or just take a break and enjoy a \n\t\t\t<span>\n\t\t\t\tyummy breakfast\n\t\t\t</span>\n\t</h1>\n\t<div class=\"row\">\n\t\t<div class=\"gallery\">\n\t\t\t<img class=\"album\" src=\"assets/1387048107991.jpeg\" alt=\"food-gallery\">\n\t\t</div>\n\t\t<div class=\"gallery\">\n\t\t\t<img class=\"portrait\" src=\"assets/DD-486-ketomackerel.jpg\" alt=\"food-gallery\">\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t\t<div class=\"gallery\">\n\t\t\t\t<h2>\n\t\t\t\t\tOur Special for <br>\n\t\t\t\t\tToday - Breakfast! <br>\n\t\t\t\t\tAll Day. Every Day\n\t\t\t\t</h2>\n\t\t\t</div>\n\t\t\t<div class=\"gallery\">\n\t\t\t\t<img class=\"portrait\" src=\"assets/Magic-Coffee-Breakfast-Thieves.jpg\" alt=\"food-gallery\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"gallery\">\n\t\t\t\t<img class=\"album\" src=\"assets/roasted-nut-muesli.jpg\" alt=\"food-gallery\">\n\t\t\t</div>\n\t\t\t<div class=\"gallery\">\n\t\t\t\t<img class=\"portrait\" src=\"assets/slider-food-3.jpg\" alt=\"food-gallery\">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"gallery\">\n\t\t\t\t<img class=\"portrait\" src=\"assets/whitney-wright-356665-e1511435712954.jpg\" alt=\"food-gallery\">\n\t\t\t</div>\n\t\t\t<div class=\"gallery\">\n\t\t\t\t<img class=\"album\" src=\"assets/tomato-avocado-scrambled-eggs-1.jpg\" alt=\"food-gallery\">\n\t\t\t</div>\t\t\t\n\t\t</div>\n\t\t<div class=\"row follow\">\n\t\t\t<span class=\"khech\">\n\t\t\t\t\tFollow Us\n\t\t\t</span>\n\t\t\t<h2>\n\t\t\t\t<span>\n\t\t\t\t\t#white&yellow\n\t\t\t\t</span>\t\t\t\t\t\n\t\t\t</h2>\n\t\t\t<div class=\"gallery-container\" *ngIf=\"followGallery.length\">\n\t\t\t\t<div \tclass=\"gallerry-item\"\n\t\t\t\t\t\t\t*ngFor=\"let item of followGallery; let i = index\"\n\t\t\t\t\t\t\trouterLink = '/gallery/{{i}}'>\n\t\t\t\t\t<img [src]=\"'assets/follow-us/'+item.image\" alt=\"follow-us\">\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t<mat-icon svgIcon=\"like\"></mat-icon><span>{{item.likes}}</span>\n\t\t\t\t\t<mat-icon svgIcon=\"message\"></mat-icon><span>{{item.messages.length}}</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\t\t\n\t\t</div><!-- row follow -->\n\t\t<div class=\"row contacts\">\n\t\t\t\t<h3>\n\t\t\t\t\tWhite & Yellow\t\t\n\t\t\t\t</h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>500 Terry Francois Street</li>\n\t\t\t\t\t<li>San Francisco, CA 94158</li>\n\t\t\t\t\t<li>Tel: 123-456-7890</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Mon - Fri: 7am - 10pm</li>\n\t\t\t\t\t<li>Saturday: 8am - 11pm</li>\n\t\t\t\t\t<li>Sunday: 8am - 10pm</li>\n\t\t\t\t</ul>\n\t\t\t\t<form action=\"#\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t\tLet's be friends and have eggs benedict\n\t\t\t\t\t</span>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<input type=\"text\" placeholder=\"Email Address\">\n\t\t\t\t\t\t<input type=\"submit\" value=\"Subscribe\">\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</form>\n\t\t</div><!-- row contacts -->\t\n</div> <!-- home-container -->\n\n"

/***/ }),

/***/ "./src/app/home/home.component.sass":
/*!******************************************!*\
  !*** ./src/app/home/home.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-container {\n  font-family: 'Cormorant', serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between; }\n  .home-container .warning {\n    min-width: 100%;\n    min-height: 100%;\n    background: rgba(0, 0, 0, 0.8);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1000; }\n  .home-container .warning span {\n      font-size: 55px;\n      color: #ffcb53; }\n  .home-container .warning span.stop {\n      position: absolute;\n      top: 100px;\n      right: 100px;\n      font-family: sans-serif;\n      cursor: default;\n      transition: .4s; }\n  .home-container .warning span.stop:hover {\n        color: red; }\n  .home-container h1 {\n    text-align: center;\n    font-size: 55px;\n    margin-bottom: 60px; }\n  .home-container h1 span {\n      color: #ffcb53; }\n  .home-container h3 {\n    text-align: center;\n    font-family: 'Roboto', sans-serif;\n    font-weight: 500; }\n  .home-container .row {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    width: 100%;\n    margin: 20px 0 20px; }\n  .home-container .row .gallery {\n      max-width: 500px;\n      height: 500px; }\n  .home-container .row .gallery img.album {\n        max-width: 500px; }\n  .home-container .row .gallery img.portrait {\n        max-width: 400px; }\n  .home-container .row .gallery h2 {\n        font-size: 45px;\n        letter-spacing: 2px;\n        line-height: 1.5; }\n  .home-container .follow {\n    background: #c1c1c1;\n    padding: 30px 0 60px;\n      padding-min-height: 500px; }\n  .home-container .follow span.khech {\n      font-size: 18px;\n      font-family: 'Roboto', sans-serif;\n      font-weight: 500; }\n  .home-container .follow h2 {\n      width: 100%;\n      text-align: center;\n      margin: 50px 0 50px; }\n  .home-container .follow h2 span {\n        font-size: 35px;\n        background: #888; }\n  .home-container .follow .gallery-container {\n      width: 100%;\n      height: 160px;\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  .home-container .follow .gallery-container .gallerry-item {\n        width: 150px;\n        height: 150px;\n        margin: 0 5px 10px;\n        position: relative;\n        cursor: pointer; }\n  .home-container .follow .gallery-container .gallerry-item img {\n          width: 150px;\n          height: 150px; }\n  .home-container .follow .gallery-container .gallerry-item .info {\n          visibility: hidden;\n          width: 150px;\n          height: 150px;\n          background: #000;\n          color: #fff;\n          opacity: 0.8;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          position: absolute;\n          top: 0;\n          left: 0;\n          z-index: 5; }\n  .home-container .follow .gallery-container .gallerry-item .info mat-icon {\n            margin: 5px; }\n  .home-container .follow .gallery-container .gallerry-item .info span {\n            font-size: 20px;\n            margin: 3px; }\n  .home-container .follow .gallery-container .gallerry-item:hover .info {\n          visibility: visible; }\n  .home-container .contacts {\n    padding: 40px 0 40px; }\n  .home-container .contacts ul {\n      margin: 0;\n      padding: 0;\n      list-style: none; }\n  .home-container .contacts form input[type=\"text\"] {\n      margin-top: 20px;\n      font-family: 'Cormorant', serif;\n      font-weight: 600;\n        font-weight-letter-spacing: 1px;\n      width: 200px;\n      height: 40px;\n      padding: 5px 10px 5px;\n      outline: none;\n      border: 1px solid #c1c1c1; }\n  .home-container .contacts form input[type=\"submit\"] {\n      width: 110px;\n      height: 40px;\n      outline: none;\n      border: none;\n      background: #000;\n      color: #ffffff;\n      margin-left: 15px;\n      transition: .4s;\n      cursor: pointer; }\n  .home-container .contacts form input[type=\"submit\"]:hover {\n        color: #ffcb53; }\n"

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

module.exports = "<div class=\"container\">\n\t<span>\n\t\t\t<fa-icon [icon]=\"['fas', 'bars']\"  (click)=\"openMenu()\"></fa-icon>\n\t</span>\n\t<h3>\n\t\tS <br>\n\t\te <br>\n\t\te <br>\n\t\t  <br>\n\t\tO <br>\n\t\tu <br>\n\t\tr <br>\n\t\t  <br>\n\t\tM <br>\n\t\te <br>\n\t\tn <br>\n\t\tu <br>\n\t</h3>\n\t<div class=\"egg\">\n\t\t<img src=\"assets/egg.png\" alt=\"egg\">\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/left-tool-bar/left-tool-bar.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/main/left-tool-bar/left-tool-bar.component.sass ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  font-family: 'Cormorant', serif;\n  color: #737373;\n  color: #000;\n  width: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 20;\n  background: none; }\n  .container span {\n    font-size: 20px;\n    color: #737373;\n    cursor: pointer;\n    transition: .4s;\n    font-size: 34px; }\n  .container span:hover {\n      color: #ffcb53; }\n  .container h3 {\n    text-align: center;\n    margin: 0px;\n    line-height: 1;\n    font-size: 21px;\n    cursor: pointer;\n    transition: .4s; }\n  .container h3:hover {\n      color: #ffcb53; }\n  .container .egg {\n    width: 45px;\n    height: 45px;\n    overflow: hidden;\n    cursor: pointer; }\n  .container .egg:hover img {\n      -webkit-transform: translateX(-45px);\n              transform: translateX(-45px); }\n"

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
    LeftToolBarComponent.prototype.ngOnInit = function () { };
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

module.exports = "<div [class]=\"containerClass\" *ngIf=\"isOpenedMenu\">\t\r\n\t\t\t<mat-icon svgIcon=\"x-mark\" (click)=\"closeMenu()\"></mat-icon>\t\r\n\t<ul>\r\n\t\t<li>Home</li>\r\n\t\t<li>Our Story</li>\r\n\t\t<li>Menu</li>\r\n\t\t<li>Contact</li>\r\n\t</ul>\r\n</div>\r\n<app-left-tool-bar (isOpenedMenu)=\"getIsOpenedMenuValue($event)\"></app-left-tool-bar>"

/***/ }),

/***/ "./src/app/main/nav-menu-bar/nav-menu-bar.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/main/nav-menu-bar/nav-menu-bar.component.sass ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-menu-container {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  color: #000;\n  width: 100%;\n  min-height: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 25;\n  background: #ffcb53; }\n  .nav-menu-container ul {\n    margin: 0;\n    padding: 0;\n    list-style-type: none; }\n  .nav-menu-container ul li {\n      display: inline;\n      padding: 0 15px 0;\n      font-weight: 600;\n      letter-spacing: 2px;\n      transition: .4s;\n      cursor: pointer; }\n  .nav-menu-container ul li:hover {\n        color: #fff; }\n  .nav-menu-container mat-icon {\n    position: absolute;\n      position-top: 38%;\n    left: 40px;\n    transition: .4s;\n    cursor: pointer; }\n  .nav-menu-container mat-icon:hover {\n      color: #fff; }\n  .open {\n  -webkit-animation-name: openMenu;\n          animation-name: openMenu;\n  -webkit-animation-duration: .8s;\n          animation-duration: .8s; }\n  .close {\n  -webkit-animation-name: closeMenu;\n          animation-name: closeMenu;\n  -webkit-animation-duration: .8s;\n          animation-duration: .8s; }\n  @-webkit-keyframes openMenu {\n  0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n  @keyframes openMenu {\n  0% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  100% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n  @-webkit-keyframes closeMenu {\n  0% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); }\n  100% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); } }\n  @keyframes closeMenu {\n  0% {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); }\n  100% {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); } }\n"

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
    function NavMenuBarComponent(iconRegistry, sanitizer) {
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
    NavMenuBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu-bar',
            template: __webpack_require__(/*! ./nav-menu-bar.component.html */ "./src/app/main/nav-menu-bar/nav-menu-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu-bar.component.sass */ "./src/app/main/nav-menu-bar/nav-menu-bar.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], NavMenuBarComponent);
    return NavMenuBarComponent;
}());



/***/ }),

/***/ "./src/app/main/right-tool-bar/right-tool-bar.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/right-tool-bar/right-tool-bar.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<h3>\n\t\tB <br>\n\t\to <br>\n\t\to <br>\n\t\tk <br>\n\t\t  <br>\n\t\ta <br>\n\t\t  <br>\n\t\tT <br>\n\t\ta <br>\n\t\tb <br>\n\t\tl <br>\n\t\te <br>\n\t</h3>\n\t<div class=\"social\">\n\t\t<fa-icon [icon]=\"['fab', 'facebook-f']\"></fa-icon>\n\t\t<fa-icon [icon]=\"['fab', 'twitter']\"></fa-icon>\t\t\n\t\t<fa-icon [icon]=\"['fab', 'instagram']\"></fa-icon>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main/right-tool-bar/right-tool-bar.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/main/right-tool-bar/right-tool-bar.component.sass ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  font-family: 'Cormorant', serif;\n  color: #737373;\n  color: #000;\n  width: 80px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 100%;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 20;\n  background: none; }\n  .container h3 {\n    text-align: center;\n    margin: 0px;\n    line-height: 1;\n    font-size: 21px;\n    cursor: pointer;\n    transition: .4s; }\n  .container h3:hover {\n      color: #ffcb53; }\n  .container .social {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    color: #737373;\n    min-height: 100px;\n    font-size: 20px; }\n  .container .social fa-icon {\n      transition: .4s;\n      cursor: pointer; }\n  .container .social fa-icon:hover {\n        color: #ffcb53; }\n"

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
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInstagram"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTwitter"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebookF"]);
    }
    RightToolBarComponent.prototype.ngOnInit = function () {
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