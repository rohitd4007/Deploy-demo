(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var _recipe_home_page_recipe_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-home-page/recipe-home-page.component */ "./src/app/recipe-home-page/recipe-home-page.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const routes = [{ path: 'home', component: _recipe_home_page_recipe_home_page_component__WEBPACK_IMPORTED_MODULE_1__["RecipeHomePageComponent"] },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_0__["TeamComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'HackedRecipe';
        this.collection = [];
        for (let i = 1; i <= 100; i++) {
            let Obj = { 'name': `Employee Name ${i}`, 'code': `EMP00 ${i}` };
            this.collection.push(Obj);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["src", "../assets/Illustration2.png", "alt", "il2", 1, "ills2"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".ills2[_ngcontent-%COMP%] {\n  margin-top: -89px;\n  width: 340px;\n  margin-left: 74%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxSb2hpdCBEZXZoYXJlXFxBbmdXb3Jrc3BhY2VcXEhhY2tlZFJlY2lwZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubWFpbiB7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vIH1cclxuLy8gLmNvbnRhaW5lciB7XHJcbi8vICAgICBtYXJnaW46IDAgMCAwIDI1MHB4O1xyXG4vLyB9XHJcbi5pbGxzMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtODlweDtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3NCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi8vIC5pbGxpbWcge1xyXG4vLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuLy8gICAgIG1hcmdpbi10b3A6IDExMHB4O1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyB9XHJcbi8vIC5pbGxzMSB7XHJcbi8vICAgICB3aWR0aDogMjQwcHg7XHJcbi8vIH1cclxuLy8gLmlsbHM0IHtcclxuLy8gICAgIHdpZHRoOiAxNDBweDtcclxuLy8gfVxyXG4vLyAuaWxsczMge1xyXG4vLyAgICAgd2lkdGg6IDE2MHB4O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDExMHB4O1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyB9XHJcbi8vIC5pbGxzNSB7fSIsIi5pbGxzMiB7XG4gIG1hcmdpbi10b3A6IC04OXB4O1xuICB3aWR0aDogMzQwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3NCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _recipe_home_page_recipe_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-home-page/recipe-home-page.component */ "./src/app/recipe-home-page/recipe-home-page.component.ts");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team/team.component */ "./src/app/team/team.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _recipe_home_page_recipe_home_page_component__WEBPACK_IMPORTED_MODULE_5__["RecipeHomePageComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _recipe_home_page_recipe_home_page_component__WEBPACK_IMPORTED_MODULE_5__["RecipeHomePageComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/data-servive.service.ts":
/*!*****************************************!*\
  !*** ./src/app/data-servive.service.ts ***!
  \*****************************************/
/*! exports provided: DataServiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiveService", function() { return DataServiveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DataServiveService {
    constructor() { }
}
DataServiveService.ɵfac = function DataServiveService_Factory(t) { return new (t || DataServiveService)(); };
DataServiveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataServiveService, factory: DataServiveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataServiveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/recipe-home-page/recipe-home-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recipe-home-page/recipe-home-page.component.ts ***!
  \****************************************************************/
/*! exports provided: RecipeHomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeHomePageComponent", function() { return RecipeHomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../recipe.service */ "./src/app/recipe.service.ts");
/* harmony import */ var _data_servive_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../data-servive.service */ "./src/app/data-servive.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function RecipeHomePageComponent_tbody_31_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RecipeHomePageComponent_tbody_31_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.check(item_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.ii[i_r3], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.Bet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.Price);
} }
function RecipeHomePageComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ss_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ss_r6.Name, "-", ss_r6.wins, " ");
} }
class RecipeHomePageComponent {
    constructor(serv, dataService, _router) {
        this.serv = serv;
        this.dataService = dataService;
        this._router = _router;
        this.color = 'black';
        this.active = true;
        this.ischek = 0;
        this.ii = [];
        this.s1 = [];
    }
    showNextComponent(value) {
        this.name = value;
    }
    click() {
        // alert("clicked")
        this.active = !this.active;
    }
    check(item, element) {
        //  console.log(element.target.checked);
        if (element.target.checked == true) {
            console.log(item.Name);
            this.s1.push(item);
            this.ischek += 1;
        }
        else {
            if (element.target.checked == false) {
                // console.log(item.Name) 
                // console.log(this.s1.pop().Name)
                // if(item.Name==this.s1.pop().Name)
                // console.log(this.s1.indexOf(item.Name))
                for (var a of this.s1) {
                    if (a.Name == item.Name) {
                        this.s1.splice(this.s1.indexOf(a), 1);
                    }
                }
            }
        }
        // if(element.target.checked==true)
        //   this.ischek+=1;
        // else
        //   this.ischek-=1;
        // if(this.ischek==2)
        //   document.getElementById("ischeck").innerHTML="selected";
        // else if(this.ischek>2)
        //   document.getElementById("ischeck").innerHTML="You cant select more than 2 team";
        // else
        //   document.getElementById("ischeck").innerHTML="selected one more team";
    }
    pp() {
        this.dataService.dataFromService = this.s1;
        this._router.navigate(['team']);
    }
    ngOnInit() {
        this.serv.getData().subscribe(msg => {
            for (var i in msg) {
                // console.log()
                this.image = msg;
                this.ii.push(msg[i]["Profile Image"]);
            }
        });
    }
}
RecipeHomePageComponent.ɵfac = function RecipeHomePageComponent_Factory(t) { return new (t || RecipeHomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_servive_service__WEBPACK_IMPORTED_MODULE_2__["DataServiveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RecipeHomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecipeHomePageComponent, selectors: [["app-recipe-home-page"]], decls: 36, vars: 2, consts: [[1, "head"], [1, "searchbox"], ["src", "../../assets/Icon feather-search.png", "alt", "searchicon", 1, "searchicon"], [1, "title"], [2, "margin", "0 0 -20px 112px"], [1, "cards"], ["cellpadding", "0", "cellspacing", "0", 4, "ngFor", "ngForOf"], [1, "sidebar"], [4, "ngFor", "ngForOf"], [3, "click"], ["cellpadding", "0", "cellspacing", "0"], [1, "border"], ["id", "check", "type", "checkbox", 1, "checkbox", 3, "change"], ["alt", "pic", 1, "pimage", 3, "src"]], template: function RecipeHomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Search Your Favourite Recipe...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pizza & Noodles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SELECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "PLAYER NAME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "LEVEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "AVTAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "BET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "WINS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "LOST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "PRICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RecipeHomePageComponent_tbody_31_Template, 18, 4, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, RecipeHomePageComponent_div_33_Template, 2, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecipeHomePageComponent_Template_button_click_34_listener() { return ctx.pp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.s1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Metrophobic&display=swap\");\n.searchbox[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 100px;\n}\n.searchbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-top: 8px;\n}\n.searchbox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  width: 300px;\n}\n.head[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n  margin-top: 70px;\n  width: 900px;\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px;\n  margin-left: 8px;\n}\n.gname[_ngcontent-%COMP%] {\n  background-color: aqua;\n  margin-top: -3px;\n}\n.menu_img[_ngcontent-%COMP%] {\n  margin: auto;\n  position: relative;\n  width: 190px;\n  text-align: center;\n  border-radius: 9px;\n}\n.menu[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.menu_img[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0px;\n  background-color: black;\n  height: 22px;\n  width: 70px;\n  border-top-right-radius: 9px;\n  border-bottom-left-radius: 8px;\n  color: white;\n}\n.like-tap[_ngcontent-%COMP%] {\n  position: relative;\n  margin: -15px 0 0 130px;\n}\n.like-tap[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%] {\n  width: 25px;\n}\n.option_item[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: 10px;\n}\n.option_item[_ngcontent-%COMP%]   .option_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.checkbox[_ngcontent-%COMP%]:checked    ~ .option_inner.tickmark[_ngcontent-%COMP%] {\n  border: 2px solid red;\n  background-color: beige;\n}\n.checkbox[_ngcontent-%COMP%] {\n  opacity: 1;\n  height: 30px;\n  width: 20px;\n}\n.pimage[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n}\ntable[_ngcontent-%COMP%] {\n  width: 900px;\n  margin: auto;\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   tr.border[_ngcontent-%COMP%] {\n  border-bottom: 1px solid black;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #7e8180;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 40px;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  background-color: #cecfcf;\n}\n.menu_img[_ngcontent-%COMP%]   .menu-detail[_ngcontent-%COMP%] {\n  width: 190px;\n  background: linear-gradient(120deg, rgba(0, 0, 0, 0.55), black);\n  height: 100px;\n  margin-top: -25px;\n  border-bottom-right-radius: 8px;\n  border-bottom-left-radius: 8px;\n  color: white;\n}\n.menu_img[_ngcontent-%COMP%]   .menu-detail[_ngcontent-%COMP%]   .menu-name[_ngcontent-%COMP%] {\n  margin: -20px 140px 0 0;\n}\n.menu_img[_ngcontent-%COMP%]   .menu-detail[_ngcontent-%COMP%]   .views_count[_ngcontent-%COMP%] {\n  margin: -10px 140px 0 0;\n}\n.menu_img[_ngcontent-%COMP%]   .menu-detail[_ngcontent-%COMP%]   .discrip[_ngcontent-%COMP%] {\n  text-align: justify;\n  font-family: \"Metrophobic\", sans-serif;\n  padding: 0 12px;\n  font-size: 13px;\n}\n.ii[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 120px;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n}\n.ii[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.title[_ngcontent-%COMP%] {\n  margin-left: 500px;\n}\n.searchicon[_ngcontent-%COMP%] {\n  width: 10px;\n  padding: 10px;\n  background-color: white;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWhvbWUtcGFnZS9DOlxcVXNlcnNcXFJvaGl0IERldmhhcmVcXEFuZ1dvcmtzcGFjZVxcSGFja2VkUmVjaXBlL3NyY1xcYXBwXFxyZWNpcGUtaG9tZS1wYWdlXFxyZWNpcGUtaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWNpcGUtaG9tZS1wYWdlL3JlY2lwZS1ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsZ0ZBQUE7QUFDUjtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURBSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0VSO0FEQUk7RUFDSSxZQUFBO0FDRVI7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKO0FERUE7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNBSjtBRHNCQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUNuQko7QURvQkk7RUFDSSxXQUFBO0FDbEJSO0FEc0JBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsWUFBQTtBQ25CSjtBRHNCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDbkJKO0FEc0JBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtBQ25CSjtBRHNCQTtFQUtJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3ZCSjtBRDBCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDdkJKO0FEMEJBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3ZCSjtBRHdCSTtFQUNJLDhCQUFBO0FDdEJSO0FEd0JJO0VBQ0kseUJBQUE7QUN0QlI7QUR1QlE7RUFDSSxZQUFBO0FDckJaO0FEd0JJO0VBQ0kseUJBQUE7QUN0QlI7QUQwQkE7RUFDSSxZQUFBO0VBQ0EsK0RBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ3ZCSjtBRHdCSTtFQUNJLHVCQUFBO0FDdEJSO0FEd0JJO0VBQ0ksdUJBQUE7QUN0QlI7QUR3Qkk7RUFDSSxtQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUN0QlI7QUQwQkE7RUFDSSxZQUFBO0VBRUEsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUN4Qko7QUQyQkE7RUFDSSxlQUFBO0FDeEJKO0FEMkJBO0VBQ0ksa0JBQUE7QUN4Qko7QUQyQkE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUN4QkoiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGUtaG9tZS1wYWdlL3JlY2lwZS1ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWV0cm9waG9iaWMmZGlzcGxheT1zd2FwXCIpO1xyXG4uc2VhcmNoYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICBzcGFuOmhvdmVyIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICB3aWR0aDogOTAwcHg7XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5nbmFtZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgbWFyZ2luLXRvcDogLTNweDtcclxufVxyXG5cclxuLm1lbnVfaW1nIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIyMywgMjIxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubWVudV9pbWcgLm5hbWUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vLyAubWVudV9pbWcgLm1lbnUtZGV0YWlsIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIGJvdHRvbTogNHB4O1xyXG4vLyAgICAgbGVmdDogMjBweDtcclxuLy8gICAgIGhlaWdodDogOTBweDtcclxuLy8gICAgIHdpZHRoOiAxNzBweDtcclxuLy8gICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMCwgMCwgMC40NSksIGJsYWNrKTtcclxuLy8gICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbi8vICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4vLyAgICAgLm1lbnUtbmFtZSB7XHJcbi8vICAgICAgICAgbWFyZ2luOiAtMThweCAxMDBweCAwIDA7XHJcbi8vICAgICB9XHJcbi8vICAgICAubGlrZS10YXAge1xyXG4vLyAgICAgICAgIG1hcmdpbjogLTM3cHggMCAwIDEzMHB4O1xyXG4vLyAgICAgICAgIC5oZWFydCB7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLmxpa2UtdGFwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogLTE1cHggMCAwIDEzMHB4O1xyXG4gICAgLmhlYXJ0IHtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgIH1cclxufVxyXG5cclxuLm9wdGlvbl9pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLm9wdGlvbl9pdGVtIC5vcHRpb25faW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jaGVja2JveDpjaGVja2Vkfi5vcHRpb25faW5uZXIudGlja21hcmsge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XHJcbn1cclxuXHJcbi5jaGVja2JveCB7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDEwcHg7XHJcbiAgICAvLyByaWdodDogMTBweDtcclxuICAgIC8vIHotaW5kZXg6IDE7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5waW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyLmJvcmRlciB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgfVxyXG4gICAgdGhlYWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjYsIDEyOSwgMTI4KTtcclxuICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0Ym9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA3LCAyMDcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWVudV9pbWcgLm1lbnUtZGV0YWlsIHtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHJnYmEoMCwgMCwgMCwgMC41NSksIGJsYWNrKTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAubWVudS1uYW1lIHtcclxuICAgICAgICBtYXJnaW46IC0yMHB4IDE0MHB4IDAgMDtcclxuICAgIH1cclxuICAgIC52aWV3c19jb3VudCB7XHJcbiAgICAgICAgbWFyZ2luOiAtMTBweCAxNDBweCAwIDA7XHJcbiAgICB9XHJcbiAgICAuZGlzY3JpcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJNZXRyb3Bob2JpY1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5paSB7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5paTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hpY29uIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXRyb3Bob2JpYyZkaXNwbGF5PXN3YXBcIik7XG4uc2VhcmNoYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG4uc2VhcmNoYm94IHNwYW4ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLnNlYXJjaGJveCBzcGFuOmhvdmVyIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uaGVhZCB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICB3aWR0aDogOTAwcHg7XG59XG5cbi5jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmduYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLm1lbnVfaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG5cbi5tZW51IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWVudV9pbWcgLm5hbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMjJweDtcbiAgd2lkdGg6IDcwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA5cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubGlrZS10YXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogLTE1cHggMCAwIDEzMHB4O1xufVxuLmxpa2UtdGFwIC5oZWFydCB7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4ub3B0aW9uX2l0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm9wdGlvbl9pdGVtIC5vcHRpb25faW5uZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2hlY2tib3g6Y2hlY2tlZCB+IC5vcHRpb25faW5uZXIudGlja21hcmsge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xufVxuXG4uY2hlY2tib3gge1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4ucGltYWdlIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGFibGUgdHIuYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxudGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U4MTgwO1xufVxudGFibGUgdGhlYWQgdHIge1xuICBoZWlnaHQ6IDQwcHg7XG59XG50YWJsZSB0Ym9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWNmY2Y7XG59XG5cbi5tZW51X2ltZyAubWVudS1kZXRhaWwge1xuICB3aWR0aDogMTkwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHJnYmEoMCwgMCwgMCwgMC41NSksIGJsYWNrKTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1lbnVfaW1nIC5tZW51LWRldGFpbCAubWVudS1uYW1lIHtcbiAgbWFyZ2luOiAtMjBweCAxNDBweCAwIDA7XG59XG4ubWVudV9pbWcgLm1lbnUtZGV0YWlsIC52aWV3c19jb3VudCB7XG4gIG1hcmdpbjogLTEwcHggMTQwcHggMCAwO1xufVxuLm1lbnVfaW1nIC5tZW51LWRldGFpbCAuZGlzY3JpcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtZmFtaWx5OiBcIk1ldHJvcGhvYmljXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDAgMTJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaWkge1xuICB3aWR0aDogMTkwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcbn1cblxuLmlpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tbGVmdDogNTAwcHg7XG59XG5cbi5zZWFyY2hpY29uIHtcbiAgd2lkdGg6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeHomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recipe-home-page',
                templateUrl: './recipe-home-page.component.html',
                styleUrls: ['./recipe-home-page.component.scss']
            }]
    }], function () { return [{ type: _recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"] }, { type: _data_servive_service__WEBPACK_IMPORTED_MODULE_2__["DataServiveService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/recipe.service.ts":
/*!***********************************!*\
  !*** ./src/app/recipe.service.ts ***!
  \***********************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class RecipeService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json');
    }
}
RecipeService.ɵfac = function RecipeService_Factory(t) { return new (t || RecipeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RecipeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RecipeService, factory: RecipeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecipeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/team-detail.service.ts":
/*!****************************************!*\
  !*** ./src/app/team-detail.service.ts ***!
  \****************************************/
/*! exports provided: TeamDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailService", function() { return TeamDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class TeamDetailService {
    constructor(http) {
        this.http = http;
    }
    getTeam() {
        return this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/Leaderboard_Initial_Dataset65148c7.json');
    }
}
TeamDetailService.ɵfac = function TeamDetailService_Factory(t) { return new (t || TeamDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TeamDetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TeamDetailService, factory: TeamDetailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamDetailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/team/team.component.ts":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _team_detail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../team-detail.service */ "./src/app/team-detail.service.ts");
/* harmony import */ var _data_servive_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../data-servive.service */ "./src/app/data-servive.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function TeamComponent_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Winner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { greenClass: a0 }; };
function TeamComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TeamComponent_div_2_p_6_Template, 2, 0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.images[i_r2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, i_r2 == ctx_r0.isWinner));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2);
} }
class TeamComponent {
    constructor(serv, dataService, http, _router) {
        this.serv = serv;
        this.dataService = dataService;
        this.http = http;
        this._router = _router;
        this.title = 'simple pagination demo';
        this.images = [];
        this.isWinner = 0;
        this.issel = false;
        this.teamData = [];
    }
    random() {
        return Math.floor(Math.random() * 3);
    }
    ngOnInit() {
        console.log(this.random());
        this.isWinner = this.random();
        this.teamData = this.dataService.dataFromService;
        console.log(this.dataService.dataFromService);
        if (this.dataService.dataFromService === undefined) {
            this._router.navigate(['home']);
        }
        for (var aa in this.dataService.dataFromService)
            this.images.push(this.dataService.dataFromService[aa]['Profile Image']);
    }
}
TeamComponent.ɵfac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_team_detail_service__WEBPACK_IMPORTED_MODULE_1__["TeamDetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_servive_service__WEBPACK_IMPORTED_MODULE_2__["DataServiveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 3, vars: 1, consts: [[1, "outerdiv"], [1, "cards"], ["class", "aa", 4, "ngFor", "ngForOf"], [1, "aa"], ["alt", "", 3, "src", "ngClass"], [4, "ngIf"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TeamComponent_div_2_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teamData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".outerdiv[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 20px;\n  text-align: center;\n  width: 80%;\n  background-color: #d8d88f;\n}\n\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 15px;\n  margin-left: 8px;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n\n.cards[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 130px;\n  width: 120px;\n  border-radius: 5px;\n  margin: 30px;\n  max-height: 100%;\n}\n\n.aa[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.greenClass[_ngcontent-%COMP%] {\n  border: 5px green solid;\n  box-shadow: 0 0 8px 4px rgba(0, 140, 186, 0.5);\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS9DOlxcVXNlcnNcXFJvaGl0IERldmhhcmVcXEFuZ1dvcmtzcGFjZVxcSGFja2VkUmVjaXBlL3NyY1xcYXBwXFx0ZWFtXFx0ZWFtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsOENBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC90ZWFtL3RlYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXJkaXYge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDE0Myk7XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxufVxyXG5cclxuLmNhcmRzIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiAzMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmdyZWVuQ2xhc3Mge1xyXG4gICAgYm9yZGVyOiA1cHggZ3JlZW4gc29saWQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4IDRweCByZ2JhKDAsIDE0MCwgMTg2LCAwLjUpO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufSIsIi5vdXRlcmRpdiB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkODhmO1xufVxuXG4uY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4uY2FyZHMgaW1nIHtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMzBweDtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmFhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZ3JlZW5DbGFzcyB7XG4gIGJvcmRlcjogNXB4IGdyZWVuIHNvbGlkO1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDRweCByZ2JhKDAsIDE0MCwgMTg2LCAwLjUpO1xuICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-team',
                templateUrl: './team.component.html',
                styleUrls: ['./team.component.scss']
            }]
    }], function () { return [{ type: _team_detail_service__WEBPACK_IMPORTED_MODULE_1__["TeamDetailService"] }, { type: _data_servive_service__WEBPACK_IMPORTED_MODULE_2__["DataServiveService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rohit Devhare\AngWorkspace\HackedRecipe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map