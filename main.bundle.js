webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = "#content {\n    margin-top: 2%;\n    margin-right: 5%;\n    margin-bottom: 5%;\n    margin-left: 5%;\n}\n\n#details {\n    margin-top: 2%;\n    margin-right: 10%;\n    margin-bottom: 5%;\n    margin-left: 10%;\n\n}\n\n#details h3 {\n    margin-bottom: 2%;\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/animals/animals.component.css":
/***/ (function(module, exports) {

module.exports = "#content {\n    margin-top: 2%;\n    margin-right: 5%;\n    margin-bottom: 5%;\n    margin-left: 5%;\n}\n\n#details {\n    margin-top: 2%;\n    margin-right: 10%;\n    margin-bottom: 5%;\n    margin-left: 10%;\n\n}\n\n#details h3 {\n    margin-bottom: 2%;\n}\n\n#catphoto {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}"

/***/ }),

/***/ "./src/app/animals/animals.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <h1 class=\"pageTitle\">Animals</h1>\n  <div id=\"details\">\n      <p>For as long as I can remember, I've loved and cared about animals. There was never a time in my childhood that we\n        did not have pets in the house. As a result, I can't even imagine what life would be like without them! \n      </p>\n      <p>As I grew older, I better understood and cared about the plight of animals. During my highschool years I would often\n        volunteer at animal shelters in my area. I greatly enjoyed helping needy animals and animal conservation is something\n        that is very important to me. One day when I retire, I hope to start an animal shelter of my own.\n      </p>\n      <p>I currently own two cats, one of which I brought with me from South Africa called Jinx and another we adopted as a rescue\n        from Poland.\n      </p>\n      <img id=\"catphoto\" src=\"assets/cats.jpg\" alt=\"Jinx and Spätzle\" height=\"384\" width=\"288\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/animals/animals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimalsComponent = /** @class */ (function () {
    function AnimalsComponent() {
    }
    AnimalsComponent.prototype.ngOnInit = function () {
        this.images = [];
        this.images.push({ source: 'assets/sp1.jpg', alt: 'Cats1', title: 'Title 1' });
        this.images.push({ source: 'assets/sp2.jpg', alt: 'Cats2', title: 'Title 2' });
        this.images.push({ source: 'assets/sp3.jpg', alt: 'Cats3', title: 'Title 3' });
        this.images.push({ source: 'assets/sp4.jpg', alt: 'Cats4', title: 'Title 4' });
        this.images.push({ source: 'assets/sp5.jpg', alt: 'Cats5', title: 'Title 5' });
    };
    AnimalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-animals',
            template: __webpack_require__("./src/app/animals/animals.component.html"),
            styles: [__webpack_require__("./src/app/animals/animals.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnimalsComponent);
    return AnimalsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__informatics_informatics_component__ = __webpack_require__("./src/app/informatics/informatics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mcdst_mcdst_component__ = __webpack_require__("./src/app/mcdst/mcdst.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__spatialdimension_spatialdimension_component__ = __webpack_require__("./src/app/spatialdimension/spatialdimension.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popcorntraining_popcorntraining_component__ = __webpack_require__("./src/app/popcorntraining/popcorntraining.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__skills_skills_component__ = __webpack_require__("./src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__videogames_videogames_component__ = __webpack_require__("./src/app/videogames/videogames.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reading_reading_component__ = __webpack_require__("./src/app/reading/reading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__animals_animals_component__ = __webpack_require__("./src/app/animals/animals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'bscinformatics', component: __WEBPACK_IMPORTED_MODULE_2__informatics_informatics_component__["a" /* InformaticsComponent */] },
    { path: 'mcdst', component: __WEBPACK_IMPORTED_MODULE_3__mcdst_mcdst_component__["a" /* McdstComponent */] },
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_6__skills_skills_component__["a" /* SkillsComponent */] },
    { path: 'spatialdimension', component: __WEBPACK_IMPORTED_MODULE_4__spatialdimension_spatialdimension_component__["a" /* SpatialdimensionComponent */] },
    { path: 'popcorntraining', component: __WEBPACK_IMPORTED_MODULE_5__popcorntraining_popcorntraining_component__["a" /* PopcorntrainingComponent */] },
    //{path: 'personaloverview', component: PersonaloverviewComponent},
    //{path: 'about', component: AboutComponent},
    { path: 'videogames', component: __WEBPACK_IMPORTED_MODULE_7__videogames_videogames_component__["a" /* VideogamesComponent */] },
    { path: 'reading', component: __WEBPACK_IMPORTED_MODULE_8__reading_reading_component__["a" /* ReadingComponent */] },
    { path: 'animals', component: __WEBPACK_IMPORTED_MODULE_9__animals_animals_component__["a" /* AnimalsComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes, { useHash: true })],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_menu__ = __webpack_require__("./node_modules/primeng/menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_megamenu__ = __webpack_require__("./node_modules/primeng/megamenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_megamenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_megamenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menubar_menubar_component__ = __webpack_require__("./src/app/menubar/menubar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__informatics_informatics_component__ = __webpack_require__("./src/app/informatics/informatics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__mcdst_mcdst_component__ = __webpack_require__("./src/app/mcdst/mcdst.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__spatialdimension_spatialdimension_component__ = __webpack_require__("./src/app/spatialdimension/spatialdimension.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__popcorntraining_popcorntraining_component__ = __webpack_require__("./src/app/popcorntraining/popcorntraining.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_panel__ = __webpack_require__("./node_modules/primeng/panel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_primeng_panel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_primeng_panel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__personaloverview_personaloverview_component__ = __webpack_require__("./src/app/personaloverview/personaloverview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__skills_skills_component__ = __webpack_require__("./src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__videogames_videogames_component__ = __webpack_require__("./src/app/videogames/videogames.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__reading_reading_component__ = __webpack_require__("./src/app/reading/reading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__animals_animals_component__ = __webpack_require__("./src/app/animals/animals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_carousel__ = __webpack_require__("./node_modules/primeng/carousel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_primeng_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_primeng_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__slidemenu_slidemenu_component__ = __webpack_require__("./src/app/slidemenu/slidemenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_cuppa_ng2_slidemenu_cuppa_ng2_slidemenu__ = __webpack_require__("./node_modules/cuppa-ng2-slidemenu/cuppa-ng2-slidemenu.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__menubar_menubar_component__["a" /* MenubarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__informatics_informatics_component__["a" /* InformaticsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__mcdst_mcdst_component__["a" /* McdstComponent */],
                __WEBPACK_IMPORTED_MODULE_14__spatialdimension_spatialdimension_component__["a" /* SpatialdimensionComponent */],
                __WEBPACK_IMPORTED_MODULE_15__popcorntraining_popcorntraining_component__["a" /* PopcorntrainingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__personaloverview_personaloverview_component__["a" /* PersonaloverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_20__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__videogames_videogames_component__["a" /* VideogamesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__reading_reading_component__["a" /* ReadingComponent */],
                __WEBPACK_IMPORTED_MODULE_23__animals_animals_component__["a" /* AnimalsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_26__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__slidemenu_slidemenu_component__["a" /* SlidemenuComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_menu__["MenuModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_megamenu__["MegaMenuModule"],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_17__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_18_primeng_panel__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_25_primeng_carousel__["CarouselModule"],
                __WEBPACK_IMPORTED_MODULE_28_cuppa_ng2_slidemenu_cuppa_ng2_slidemenu__["a" /* SlideMenuModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/first-year.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIRSTYEARMODULES; });
var FIRSTYEARMODULES = [
    { code: 'COS1511', name: 'Introduction to Programming I' },
    { code: 'COS1512', name: 'Introduction to Programming II' },
    { code: 'COS1521', name: 'Computer Systems: Fundamental Concepts' },
    { code: 'FAC1502', name: 'Financial Accounting Principles, Concepts and Procedures' },
    { code: 'INF1505', name: 'Introduction to Business Information Systems' },
    { code: 'COS1511', name: 'Visual Programming I' },
    { code: 'INF1520', name: 'Human-Computer Interaction I' },
    { code: 'MNB1501', name: 'Business Management IA' },
];


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-bottom navbar-expand navbar-dark bg-dark\">\n  <div class=\"navbar-text m-auto\">\n    Created in Angular using Bootstrap and PrimeNG.\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "#content {\n    margin-top: 2%;\n    margin-right: 5%;\n    margin-bottom: 5%;\n    margin-left: 5%;\n}\n\n#details {\n    margin-top: 2%;\n    margin-right: 10%;\n    margin-bottom: 1%;\n    margin-left: 10%;\n\n}\n\n#details h3 {\n    margin-bottom: 2%;\n}\n\np {\n    text-align: center;\n}\n\n#dinodiv {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <h1 class=\"pageTitle\">Welcome to my homepage!</h1>\n  <div id=\"details\">\n    <p>This site is intended to give you a quick overview of who I am, where I'm from and where I'm going.</p>\n    <p>It is a still a very early work-in-progress, so don't judge too harshly.\n    </p>\n    <p>Click on the hamburger menu in the top left corner to get started.\n    </p>\n  </div>\n      <img id=\"dinodiv\" src=\"assets/dino.png\" >\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/informatics/informatics.component.css":
/***/ (function(module, exports) {

module.exports = "#content {\n    margin-top: 2%;\n    margin-right: 5%;\n    margin-bottom: 5%;\n    margin-left: 5%;\n}\n\n#details {\n    margin-top: 5%;\n    margin-right: 10%;\n    margin-bottom: 1%;\n    margin-left: 10%;\n\n}\n\n#details h3 {\n    margin-bottom: 2%;\n}\n\n#accordion {\n    margin-top: 5%;\n    margin-right: 10%;\n    margin-left: 10%;\n}\n\n.label {\n    width: 25%;\n}"

/***/ }),

/***/ "./src/app/informatics/informatics.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <h1 class=\"pageTitle\">Bachelor of Science in Informatics</h1>\n  <div id=\"details\">\n    <h3>Details</h3>\n    <label class=\"label\">Institution: </label>\n    <label>UNISA - The University of South Africa</label><br>\n    <label class=\"label\">Qualification stream: </label>\n    <label>Informatics</label><br>\n    <label class=\"label\">NQF level: </label>\n    <label>NQF7</label><br>\n    <label class=\"label\">Year completed: </label>\n    <label>2017</label><br>\n    <label class=\"label\">More Info: </label>\n    <a target=\"_blank\" href=\"http://www.unisa.ac.za/sites/corporate/default/Register-to-study-through-Unisa/Undergraduate-&-honours-qualifications/Find-your-qualification-&-choose-your-modules/All-qualifications/Bachelor-of-Science-in-Informatics-Informatics-(98907-%E2%80%93-INF)\">\n      BSc Informatics</a><br>\n  </div>\n  <div id=\"accordion\">\n      <p-accordion>\n          <p-accordionTab header=\"First Year Modules\">\n              <p-table [value]=\"firstyearmodules\">\n                  <ng-template pTemplate=\"header\">\n                      <tr>\n                          <th>Module Code</th>\n                          <th>Module Name</th>\n                      </tr>\n                  </ng-template>\n                  <ng-template pTemplate=\"body\" let-module>\n                      <tr>\n                          <td>{{module.code}}</td>\n                          <td>{{module.name}}</td>\n                      </tr>\n                  </ng-template>\n              </p-table>\n          </p-accordionTab>\n          <p-accordionTab header=\"Second Year Modules\">\n              <p-table [value]=\"secondyearmodules\">\n                  <ng-template pTemplate=\"header\">\n                      <tr>\n                          <th>Module Code</th>\n                          <th>Module Name</th>\n                      </tr>\n                  </ng-template>\n                  <ng-template pTemplate=\"body\" let-module>\n                      <tr>\n                          <td>{{module.code}}</td>\n                          <td>{{module.name}}</td>\n                      </tr>\n                  </ng-template>\n              </p-table>\n          </p-accordionTab>\n          <p-accordionTab header=\"Third Year Modules\">\n              <p-table [value]=\"thirdyearmodules\">\n                  <ng-template pTemplate=\"header\">\n                      <tr>\n                          <th>Module Code</th>\n                          <th>Module Name</th>\n                      </tr>\n                  </ng-template>\n                  <ng-template pTemplate=\"body\" let-module>\n                      <tr>\n                          <td>{{module.code}}</td>\n                          <td>{{module.name}}</td>\n                      </tr>\n                  </ng-template>\n              </p-table>\n          </p-accordionTab>\n      </p-accordion>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/informatics/informatics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformaticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__first_year__ = __webpack_require__("./src/app/first-year.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__second_year__ = __webpack_require__("./src/app/second-year.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__third_year__ = __webpack_require__("./src/app/third-year.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InformaticsComponent = /** @class */ (function () {
    function InformaticsComponent() {
        this.firstyearmodules = __WEBPACK_IMPORTED_MODULE_1__first_year__["a" /* FIRSTYEARMODULES */];
        this.secondyearmodules = __WEBPACK_IMPORTED_MODULE_2__second_year__["a" /* SECONDYEARMODULES */];
        this.thirdyearmodules = __WEBPACK_IMPORTED_MODULE_3__third_year__["a" /* THIRDYEARMODULES */];
    }
    InformaticsComponent.prototype.ngOnInit = function () {
    };
    InformaticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-informatics',
            template: __webpack_require__("./src/app/informatics/informatics.component.html"),
            styles: [__webpack_require__("./src/app/informatics/informatics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InformaticsComponent);
    return InformaticsComponent;
}());



/***/ }),

/***/ "./src/app/mcdst/mcdst.component.css":
/***/ (function(module, exports) {

module.exports = "#content {\n    margin-top: 2%;\n    margin-right: 5%;\n    margin-bottom: 5%;\n    margin-left: 5%;\n}\n\n#details {\n    margin-top: 5%;\n    margin-right: 10%;\n    margin-bottom: 1%;\n    margin-left: 10%;\n\n}\n\n#details h3 {\n    margin-bottom: 2%;\n}\n\n.label {\n    width: 25%;\n}"

/***/ }),

/***/ "./src/app/mcdst/mcdst.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <h1 class=\"pageTitle\">Microsoft Certified Desktop Support Technician</h1>\n  <div id=\"details\">\n      <h3>Details</h3>\n      <label class=\"label\">Institution: </label>\n      <label>CTU Training Solutions Stellenbosch</label><br>\n      <label class=\"label\">Qualification stream: </label>\n      <label>Tech support</label><br>\n      <label class=\"label\">NQF level: </label>\n      <label>NQF4</label><br>\n      <label class=\"label\">Year completed: </label>\n      <label>2011</label><br>\n      <label class=\"label\">Microsoft Certifications:</label>\n      <label>CompTIA A+ Hardware</label><br>\n      <label class=\"label\"></label>\n      <label>CompTIA A+ Software</label><br>\n      <label class=\"label\"></label>\n      <label>Installing and Configuring Windows 7</label><br>\n      <label class=\"label\"></label>\n      <label> CompTIA Network+</label><br>\n      <label class=\"label\">More Info: </label>\n      <a target=\"_blank\" href=\"https://ctutraining.ac.za/\">\n        CTU Training Solutions</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mcdst/mcdst.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return McdstComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var McdstComponent = /** @class */ (function () {
    function McdstComponent() {
    }
    McdstComponent.prototype.ngOnInit = function () {
    };
    McdstComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mcdst',
            template: __webpack_require__("./src/app/mcdst/mcdst.component.html"),
            styles: [__webpack_require__("./src/app/mcdst/mcdst.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], McdstComponent);
    return McdstComponent;
}());



/***/ }),

/***/ "./src/app/menubar/menubar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menubar/menubar.component.html":
/***/ (function(module, exports) {

module.exports = "<p-menubar [model]=\"items\" [autoDisplay]=false></p-menubar>"

/***/ }),

/***/ "./src/app/menubar/menubar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenubarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenubarComponent = /** @class */ (function () {
    function MenubarComponent() {
    }
    MenubarComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'Skills and Qualifications',
                items: [
                    { label: 'BSc Informatics', routerLink: ['/bscinformatics'] },
                    { label: 'MCDST', routerLink: ['/mcdst'] },
                    { label: 'Professional Skills', routerLink: ['/skills'] },
                ]
            },
            {
                label: 'Work Experience',
                items: [
                    { label: 'Spatial Dimension', routerLink: ['/spatialdimension'] },
                    { label: 'Popcorn Training', routerLink: ['/popcorntraining'] }
                ]
            },
            //{
            //label: 'Personal',
            //items: [
            //{label: 'Overview', routerLink: ['/personaloverview']},
            //{label: 'About Me', routerLink: ['/about']},
            //]
            //},
            {
                label: 'Hobbies and Interests',
                items: [
                    { label: 'Videogames', routerLink: ['/videogames'] },
                    { label: 'Reading', routerLink: ['/reading'] },
                    { label: 'Animals', routerLink: ['/animals'] },
                ]
            },
        ];
    };
    MenubarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menubar',
            template: __webpack_require__("./src/app/menubar/menubar.component.html"),
            styles: [__webpack_require__("./src/app/menubar/menubar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenubarComponent);
    return MenubarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark fixed-top\"> \n  <!-- <a class=\"navbar-brand\" href=\"#\">Home</a> -->\n  <app-slidemenu></app-slidemenu>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/personaloverview/personaloverview.component.css":
/***/ (function(module, exports) {

module.exports = "#content {\n    margin-top: 2%;\n    margin-right: 5%;\n    margin-bottom: 5%;\n    margin-left: 5%;\n}\n\n#details {\n    margin-top: 5%;\n    margin-right: 10%;\n    margin-bottom: 1%;\n    margin-left: 10%;\n}\n\n#details h3 {\n    margin-bottom: 2%;\n}\n\n.label {\n    width: 25%;\n}\n\n#panel {\n    margin-right: 10%;\n    margin-left: 10%;\n}"

/***/ }),

/***/ "./src/app/personaloverview/personaloverview.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <h1 class=\"pageTitle\">Overview</h1>\n    <div id=\"details\">\n        <h3>Details</h3>\n        <label class=\"label\">Full Name:</label>\n        <label>JJ Steyn</label><br>\n        <label class=\"label\">Date of Birth:</label>\n        <label>04 May 1991</label><br>\n        <label class=\"label\">Nationality:</label>\n        <label>South African</label><br>\n        <label class=\"label\">Country of Residence:</label>\n        <label>Germany</label><br>\n        <label class=\"label\">Bundesstaat:</label>\n        <label>Berlin</label><br>\n        <label class=\"label\">Marital Status:</label>\n        <label>Married</label><br>\n        <label class=\"label\">Visa status:</label>\n        <label>Valid work visa</label><br>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/personaloverview/personaloverview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonaloverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PersonaloverviewComponent = /** @class */ (function () {
    function PersonaloverviewComponent() {
    }
    PersonaloverviewComponent.prototype.ngOnInit = function () {
    };
    PersonaloverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-personaloverview',
            template: __webpack_require__("./src/app/personaloverview/personaloverview.component.html"),
            styles: [__webpack_require__("./src/app/personaloverview/personaloverview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonaloverviewComponent);
    return PersonaloverviewComponent;
}());



/***/ }),

/***/ "./src/app/popcorntraining/popcorntraining.component.css":
/***/ (function(module, exports) {

module.exports = "#content {\n    margin-top: 2%;\n    margin-right: 5%;\n    margin-bottom: 5%;\n    margin-left: 5%;\n}\n\n#details {\n    margin-top: 5%;\n    margin-right: 10%;\n    margin-bottom: 1%;\n    margin-left: 10%;\n}\n\n#details h3 {\n    margin-bottom: 2%;\n}\n\n.label {\n    width: 25%;\n}\n\n#panel {\n    margin-right: 10%;\n    margin-left: 10%;\n}"

/***/ }),

/***/ "./src/app/popcorntraining/popcorntraining.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <h1 class=\"pageTitle\">Popcorn Training</h1>\n    <div id=\"details\">\n        <h3>Details</h3>\n        <label class=\"label\">Industry: </label>\n        <label>Cyber Security Awareness Training</label><br>\n        <label class=\"label\">Job Title: </label>\n        <label>Junior Front-End Developer</label><br>\n        <label class=\"label\">Contract Type:</label>\n        <label>Remote Contractor</label><br>\n        <label class=\"label\">Period of Employment: </label>\n        <label>May 2017 - August 2017</label><br>\n        <label class=\"label\">Technologies exposed to:</label>\n        <label>Ruby on Rails</label><br>\n        <label class=\"label\"></label>\n        <label>InterCooler.js</label><br>\n        <label class=\"label\"></label>\n        <label>Git</label><br>\n        <label class=\"label\"></label>\n        <label>HTML & CSS</label><br>\n        <label class=\"label\"></label>\n        <label>PostgreSQL</label><br>\n        <label class=\"label\"></label>\n        <label>JQuery</label><br>\n    </div>\n    <div id=\"panel\">\n    <p-panel header=\"Overview\" collapsed=\"true\" [toggleable]=\"true\">\n      <p>I joined Popcorn Training in May 2017 as a contractor, doing mostly front-end and visual work\n        on their product in Ruby on Rails. As a remote developer, I gained a lot of experience in working on \n        my own while collaborating with a geographically dispersed team. \n      </p>\n      <p>I learned how to analyse and interpret user requirements and to design solutions that are practical, meet user needs\n        and in some cases also comply with legal requirements. I also learned how to acclimatize myself to an existing codebase with \n        lots of complexity and moving parts.\n      </p>\n      <p>I left Popcorn Training in August 2017 after I moved to Berlin and could no longer commit to the hours necessary to work for them.</p>\n    </p-panel>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/popcorntraining/popcorntraining.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopcorntrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopcorntrainingComponent = /** @class */ (function () {
    function PopcorntrainingComponent() {
    }
    PopcorntrainingComponent.prototype.ngOnInit = function () {
    };
    PopcorntrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-popcorntraining',
            template: __webpack_require__("./src/app/popcorntraining/popcorntraining.component.html"),
            styles: [__webpack_require__("./src/app/popcorntraining/popcorntraining.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopcorntrainingComponent);
    return PopcorntrainingComponent;
}());



/***/ }),

/***/ "./src/app/reading/reading.component.css":
/***/ (function(module, exports) {

module.exports = "#content {\n    margin-top: 2%;\n    margin-right: 5%;\n    margin-bottom: 5%;\n    margin-left: 5%;\n}\n\n#details {\n    margin-top: 2%;\n    margin-right: 10%;\n    margin-bottom: 5%;\n    margin-left: 10%;\n\n}\n\n#details h3 {\n    margin-bottom: 2%;\n}"

/***/ }),

/***/ "./src/app/reading/reading.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <h1 class=\"pageTitle\">Reading</h1>\n  <div id=\"details\">\n      <p>Probably going hand-in-hand with my love for videogames, I've been reading since the day\n          I learned to read. I fell in love with the worlds and characters that books brought to life in\n          my imagination. From Tintin to Harry Potter and even the most obscure crime novels, I read anything I \n          could get my hands on.\n        </p>\n        <p>Many a night in my childhood was spent reading books under the covers with a flashlight after my bedtime. \n          Holidays would often see me reading my books on the couch instead of playing outdoors with my peers. \n          </p>\n          <p>Although I don't have as much time to read anymore, I still greatly enjoy getting engrossed in a \n            book from time to time.\n      </p>\n\n      <p-panel header=\"Currently Reading\" collapsed=\"true\" [toggleable]=\"true\">\n          <div class=\"mediaDiv\">\n              <div class=\"mediaTitle\">Gardens of the Moon</div>\n              <div>Book 1 of Malazan Book of the Fallen</div>\n              <div>High Fantasy</div>\n              <div class=\"mediaButton\">\n                <a target=\"_blank\" href=\"https://www.goodreads.com/series/43493-malazan-book-of-the-fallen\">\n                <button type=\"button\" pButton icon=\"fa-search\"></button>\n              </a>\n            </div>\n            </div>\n      </p-panel>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/reading/reading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadingComponent = /** @class */ (function () {
    function ReadingComponent() {
    }
    ReadingComponent.prototype.ngOnInit = function () {
    };
    ReadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reading',
            template: __webpack_require__("./src/app/reading/reading.component.html"),
            styles: [__webpack_require__("./src/app/reading/reading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReadingComponent);
    return ReadingComponent;
}());



/***/ }),

/***/ "./src/app/second-year.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECONDYEARMODULES; });
var SECONDYEARMODULES = [
    { code: 'COS2614', name: 'Programming: Contemporary Concepts' },
    { code: 'COS2626', name: 'Computer Networks I' },
    { code: 'ICT2621', name: 'Structured Systems Analysis and Design' },
    { code: 'ICT2622', name: 'Object-Oriented Analysis' },
    { code: 'INF2603', name: 'Databases I' },
    { code: 'INF2611', name: 'Visual Programming II' },
    { code: 'MNB1601', name: 'Business Manament IB' },
    { code: 'MNE2601', name: 'Introduction to Entrepreneurship and Small Business Management' },
    { code: 'MNG2601', name: 'General Management' },
    { code: 'STA1610', name: 'Introduction to Statistics' },
    { code: 'AUE2602', name: 'Corporate Governance in Accountancy' },
    { code: 'COS2611', name: 'Programming: Data Structures' },
];


/***/ }),

/***/ "./src/app/skills/skills.component.css":
/***/ (function(module, exports) {

module.exports = "#content {\n    margin-top: 2%;\n    margin-right: 5%;\n    margin-bottom: 5%;\n    margin-left: 5%;\n}\n\n#details {\n    margin-top: 5%;\n    margin-right: 10%;\n    margin-bottom: 5%;\n    margin-left: 10%;\n\n}\n\n#details h3 {\n    margin-bottom: 2%;\n}"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <h1 class=\"pageTitle\">Professional Skills</h1>\n  <div id=\"details\">\n      <p-panel header=\"Computer Skills\" collapsed=\"true\" [toggleable]=\"true\">\n          <ul>\n              <li>Angular</li>\n              <li>HTML & CSS</li>\n              <li>Ruby on Rails</li>\n              <li>Git</li>\n              <li>C#</li>\n              <li>.Net (VB & C#)</li>\n              <li>Delphi</li>\n              <li>SQL</li>\n              <li>SVN</li>\n              <li>MS SQL Server</li>\n              <li>Comptia A+ & N+</li>\n              <li>MS Office</li>\n            </ul>\n      </p-panel>\n      <p-panel header=\"Language Skills\" collapsed=\"true\" [toggleable]=\"true\">\n          <ul>\n              <li>English (native)</li>\n              <li>German (B1)</li>\n              <li>Afrikaans (Native)</li>\n            </ul>\n      </p-panel>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__("./src/app/skills/skills.component.html"),
            styles: [__webpack_require__("./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/slidemenu/slidemenu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/slidemenu/slidemenu.component.html":
/***/ (function(module, exports) {

module.exports = "<cuppa-slidemenu [menulist]=\"menuItemsArray\" \n(open)=\"onMenuOpen()\" (close)=\"onMenuClose()\" [config]=\"config\" \n(onItemSelect)=\"onItemSelect($event)\"></cuppa-slidemenu>"

/***/ }),

/***/ "./src/app/slidemenu/slidemenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidemenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlidemenuComponent = /** @class */ (function () {
    function SlidemenuComponent(router) {
        this.router = router;
        this.config = {
            animation: "slider",
            closeOnCLick: true,
            offset: {
                top: 70
            }
        };
        this.menuItemsArray = [
            { "title": "Home", "link": "home" },
            { "title": "Skills and Qualifications", "link": "",
                "subItems": [
                    { "title": "BSc Informatics", "link": "bscinformatics" },
                    { "title": "MCDST", "link": "mcdst" },
                    { "title": "Professional Skills", "link": "skills" },
                ]
            },
            { "title": "Work Experience", "link": "",
                "subItems": [
                    { "title": "Spatial Dimension", "link": "spatialdimension" },
                    { "title": "Popcorn Training", "link": "popcorntraining" },
                ]
            },
            { "title": "Hobbies and Interests", "link": "",
                "subItems": [
                    { "title": "Videogames", "link": "videogames" },
                    { "title": "Reading", "link": "reading" },
                    { "title": "Animals", "link": "animals" },
                ]
            },
        ];
    }
    SlidemenuComponent.prototype.ngOnInit = function () {
    };
    SlidemenuComponent.prototype.onMenuClose = function () {
        console.log("menu closed");
    };
    SlidemenuComponent.prototype.onMenuOpen = function () {
        console.log("menu Opened");
    };
    SlidemenuComponent.prototype.onItemSelect = function (item) {
        this.router.navigate([item.link]);
    };
    SlidemenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-slidemenu',
            template: __webpack_require__("./src/app/slidemenu/slidemenu.component.html"),
            styles: [__webpack_require__("./src/app/slidemenu/slidemenu.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], SlidemenuComponent);
    return SlidemenuComponent;
}());



/***/ }),

/***/ "./src/app/spatialdimension/spatialdimension.component.css":
/***/ (function(module, exports) {

module.exports = "#content {\n    margin-top: 2%;\n    margin-right: 5%;\n    margin-bottom: 5%;\n    margin-left: 5%;\n}\n\n#details {\n    margin-top: 5%;\n    margin-right: 10%;\n    margin-bottom: 1%;\n    margin-left: 10%;\n}\n\n#details h3 {\n    margin-bottom: 2%;\n}\n\n.label {\n    width: 25%;\n}\n\n#panel {\n    margin-right: 10%;\n    margin-left: 10%;\n}"

/***/ }),

/***/ "./src/app/spatialdimension/spatialdimension.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <h1 class=\"pageTitle\">Spatial Dimension, a Trimble Company</h1>\n    <div id=\"details\">\n        <h3>Details</h3>\n        <label class=\"label\">Industry: </label>\n        <label>Land Management Software</label><br>\n        <label class=\"label\">Job Title: </label>\n        <label>Software Developer Intern</label><br>\n        <label class=\"label\">Contract Type:</label>\n        <label>Internship</label><br>\n        <label class=\"label\">Period of Employment: </label>\n        <label>January 2017 - April 2017</label><br>\n        <label class=\"label\">Technologies exposed to:</label>\n        <label>VB.Net & C#.Net</label><br>\n        <label class=\"label\"></label>\n        <label>Angular</label><br>\n        <label class=\"label\"></label>\n        <label>SVN</label><br>\n        <label class=\"label\"></label>\n        <label>Fogbugz Case Management</label><br>\n        <label class=\"label\"></label>\n        <label>HTML & CSS</label><br>\n        <label class=\"label\"></label>\n        <label>Javascript</label><br>\n        <label class=\"label\"></label>\n        <label>MS SQL Server</label><br>\n    </div>\n    <div id=\"panel\">\n    <p-panel header=\"Overview\" collapsed=\"true\" [toggleable]=\"true\">\n        <p>I was hired as part of the internship team, tasked with taking our own software project from planning through to delivering a finished product. We were tasked with building a repository for use in the organisation.\n          We developed a RESTful API that fed data from our own database to a front-end that we developed in Angular. \n        </p>\n        <p>Our duties included scheduling meetings with other software developers and key stakeholders for the purposes\n          of requirements gathering and analysis, designing and developing our database, API and front-end, software testing, creating and maintaining\n          all documents related to our software and organising regular stakeholder meetings to get feedback on ideas and completed features.\n        </p>\n        <p>\n          As Angular was still very new at the time, we were also tasked with documenting everything we learned so that we\n          could present it to the rest of the development team.\n        </p>\n    </p-panel>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/spatialdimension/spatialdimension.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpatialdimensionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpatialdimensionComponent = /** @class */ (function () {
    function SpatialdimensionComponent() {
    }
    SpatialdimensionComponent.prototype.ngOnInit = function () {
    };
    SpatialdimensionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spatialdimension',
            template: __webpack_require__("./src/app/spatialdimension/spatialdimension.component.html"),
            styles: [__webpack_require__("./src/app/spatialdimension/spatialdimension.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpatialdimensionComponent);
    return SpatialdimensionComponent;
}());



/***/ }),

/***/ "./src/app/third-year.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return THIRDYEARMODULES; });
var THIRDYEARMODULES = [
    { code: 'INF3703', name: 'Databases II' },
    { code: 'INF3705', name: 'Advanced Systems Development' },
    { code: 'INF3707', name: 'Database Design and Implementation' },
    { code: 'INF3708', name: 'Software Project Management' },
    { code: 'INF3720', name: 'Human-Computer Interaction II' },
    { code: 'MNE3701', name: 'Entrepreneurship and Small Business Management' },
    { code: 'MNE3702', name: 'Corporate Entrepreneurship' },
    { code: 'MNG3701', name: 'Strategic Planning IIIA' },
    { code: 'MNG3702', name: 'Strategic Implementation and Control IIIB' },
    { code: 'MNB3701', name: 'Global Business Management IA' },
];


/***/ }),

/***/ "./src/app/videogames/videogames.component.css":
/***/ (function(module, exports) {

module.exports = "#content {\n    margin-top: 2%;\n    margin-right: 5%;\n    margin-bottom: 5%;\n    margin-left: 5%;\n}\n\n#details {\n    margin-top: 2%;\n    margin-right: 10%;\n    margin-bottom: 5%;\n    margin-left: 10%;\n\n}\n\n#details h3 {\n    margin-bottom: 2%;\n}"

/***/ }),

/***/ "./src/app/videogames/videogames.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n    <h1 class=\"pageTitle\">Videogames</h1>\n  <div id=\"details\">\n      <p>Ever since I got my first computer at the age of 9, I've been captivated with the\n        myriad of fantastic worlds and stories to be found in videogames. The very first game I\n        ever played was called 3 Skulls of the Toltecs, a little known point-and-click adventure\n        set in 1866 Arizona, following the (misadventures) of a goofy, but lovable cowboy called\n        Fenimore Filmore as he attempts to uncover the mystery of an ancient treasure.\n      </p>\n\n      <p>From there my love for videogames only grew and today I love to play a myriad of \n        different genres, from competitive shooters to complex strategy and 4X games. I love to\n        keep up with gaming news and can often be found discussing new games or industry developments\n        on online forums.\n      </p>\n\n      <p-panel header=\"Currently Playing\" collapsed=\"true\" [toggleable]=\"true\">\n              <div class=\"mediaDiv\">\n                <div class=\"mediaTitle\">Mordheim: City of the Damned</div>\n                <div>Turn-Based Strategy</div>\n                <div>4/5 Stars</div>\n                <div class=\"mediaButton\">\n                  <a target=\"_blank\" href=\"http://mordheim-cityofthedamned.com/en/\">\n                  <button type=\"button\" pButton icon=\"fa-search\"></button>\n                </a>\n              </div>\n              </div>\n              <div class=\"mediaDiv\">\n                  <div class=\"mediaTitle\">God of War</div>\n                  <div>Hack 'n Slash</div>\n                  <div>5/5 Stars</div>\n                  <div class=\"mediaButton\">\n                    <a target=\"_blank\" href=\"https://godofwar.playstation.com/\">\n                    <button type=\"button\" pButton icon=\"fa-search\"></button>\n                  </a>\n                </div>\n              </div>\n      </p-panel>\n      <p-panel header=\"Favorite Games\" collapsed=\"true\" [toggleable]=\"true\">\n          <div class=\"mediaDiv\">\n              <div class=\"mediaTitle\">Arcanum: of Steamworks and Magick Obscura</div>\n              <div>CRPG</div>\n              <div>4/5 Stars</div>\n              <div class=\"mediaButton\">\n                <a target=\"_blank\" href=\"https://www.gog.com/game/arcanum_of_steamworks_and_magick_obscura\">\n                <button type=\"button\" pButton icon=\"fa-search\"></button>\n              </a>\n            </div>\n            </div>\n            <div class=\"mediaDiv\">\n                <div class=\"mediaTitle\">TESIII: Morrowind</div>\n                <div>Open-world RPG</div>\n                <div>5/5 Stars</div>\n                <div class=\"mediaButton\">\n                  <a target=\"_blank\" href=\"https://elderscrolls.bethesda.net/en/morrowind\">\n                  <button type=\"button\" pButton icon=\"fa-search\"></button>\n                </a>\n              </div>\n              </div>\n              <div class=\"mediaDiv\">\n                  <div class=\"mediaTitle\">Dwarf Fortress</div>\n                  <div>Colony Simulator</div>\n                  <div>5/5 Stars</div>\n                  <div class=\"mediaButton\">\n                    <a target=\"_blank\" href=\"http://www.bay12games.com/dwarves/\">\n                    <button type=\"button\" pButton icon=\"fa-search\"></button>\n                  </a>\n                </div>\n                </div>\n      </p-panel>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/videogames/videogames.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideogamesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideogamesComponent = /** @class */ (function () {
    function VideogamesComponent() {
        this.currentlyPlaying = [
            { title: 'Mordheim', genre: 'Turn-based Strategy', rating: '8/10' },
        ];
    }
    VideogamesComponent.prototype.ngOnInit = function () {
    };
    VideogamesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-videogames',
            template: __webpack_require__("./src/app/videogames/videogames.component.html"),
            styles: [__webpack_require__("./src/app/videogames/videogames.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideogamesComponent);
    return VideogamesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map