webpackJsonp([1,4],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_services__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_interface__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cuppaOAuth_auth_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(adminService, authService) {
        this.adminService = adminService;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__profile_interface__["a" /* User */]();
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.getUserProfile();
    };
    AdminDashboardComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.adminService.getProfile().subscribe(function (profile) {
            console.log(profile);
            console.log(_this.user = new __WEBPACK_IMPORTED_MODULE_2__profile_interface__["a" /* User */](profile._id, profile.displayName, profile.email, profile.picture, profile.provider, profile.provider_id));
            //this.
        }, function (err) {
            console.log(err);
        });
    };
    AdminDashboardComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AdminDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            template: "\n    <div class=\"row col-md-8 col-md-offset-2 profile-section\">\n    <div class=\"col-md-8\">\n      <div class=\"col-md-12 profile-header\">\n        <div class=\"col-md-1 provider-logo\" [ngClass]=\"{'fb': user.provider == 'facebook', 'google': user.provider == 'google','linkedin': user.provider == 'linkedin' }\">\n          <span *ngIf=\" user.provider == 'facebook'\" class=\"fa fa-facebook\"></span>\n          <span *ngIf=\" user.provider == 'google'\" class=\"fa fa-google\"></span>\n          <span *ngIf=\" user.provider == 'linkedin'\" class=\"fa fa-linkedin\"></span>\n        </div>\n        <div class=\"col-md-9\"><b>Welcome</b> {{ user.displayName}}</div> \n        <div class=\"col-md-2\"><a class=\"logout-btn\" (click)=\"logout()\" *ngIf=\"authService.isLoggedIn()\">Logout</a></div>\n      </div>\n      <table class=\"table\"> \n      <tbody> \n      <tr> <td><b>User ID:</b></td> <td> {{ user._id}}</td> </tr> \n      <tr><td><b>Name:</b></td> <td> {{ user.displayName}}</td> </tr> \n      <tr><td><b>Email:</b></td> <td>{{ user.email}}</td> </tr> \n       <tr><td><b>Provider:</b></td> <td>{{ user.provider}}</td> </tr> \n        <tr><td><b>Provider ID:</b></td> <td>{{ user.provider_id}}</td> </tr> \n      </tbody> \n      </table>\n    </div>\n    <div class=\"col-md-4\">\n      <img src=\"{{ user.picture}}\" />\n    </div>\n    </div>\n    \n    \n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__admin_services__["a" /* AdminService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__admin_services__["a" /* AdminService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__cuppaOAuth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__cuppaOAuth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
    var _a, _b;
}());
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/admin-dashboard.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            template: "\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/admin.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_interceptors__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_interceptors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_interceptors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminService = (function () {
    // Resolve HTTP using the constructor
    function AdminService(_http) {
        this._http = _http;
        this.commentsUrl = 'https://cuppa-angular2-oauth.herokuapp.com/api/profile';
    }
    AdminService.prototype.getProfile = function () {
        // ...using get request
        return this._http.get(this.commentsUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error || 'Server error'); });
    };
    AdminService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_interceptors__["InterceptorService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_interceptors__["InterceptorService"]) === 'function' && _a) || Object])
    ], AdminService);
    return AdminService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/admin.services.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
        this.authServerBaseUrl = 'https://cuppa-angular2-oauth.herokuapp.com';
        this.config = {
            "loginRoute": "login",
            "linkedin": {
                "authEndpoint": this.authServerBaseUrl + "/auth/linkedin",
                "clientId": "8176r44lz2ewos",
                "redirectURI": this.authServerBaseUrl + "/admin"
            },
            "facebook": {
                "authEndpoint": this.authServerBaseUrl + "/auth/facebook",
                "clientId": "929055083862567",
                "redirectURI": this.authServerBaseUrl + "/admin"
            },
            "google": {
                "authEndpoint": this.authServerBaseUrl + "/auth/google",
                "clientId": "77954512562-eftl8up04q1g3aha2mjg5h6bgel9svkk.apps.googleusercontent.com",
                "redirectURI": this.authServerBaseUrl + "/admin"
            }
        };
    }
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            template: "\n    <div class=\"row\">\n      <cuppa-oauth [authConfig]=\"config\"></cuppa-oauth>\n    </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/login.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cuppaOAuth_auth_service__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = (function () {
    function ProjectsComponent(authService) {
        this.authService = authService;
    }
    ProjectsComponent.prototype.logout = function () {
        this.authService.logout();
    };
    ProjectsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            template: "\n  <h1>Projects Page</h1>\n  <button (click)=\"logout()\">logout</button>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cuppaOAuth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__cuppaOAuth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], ProjectsComponent);
    return ProjectsComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/projects.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(517);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_dashboard_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_services__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_4__admin_dashboard_component__["a" /* AdminDashboardComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__admin_services__["a" /* AdminService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/admin.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(_id, displayName, email, picture, provider, provider_id) {
        if (_id === void 0) { _id = ""; }
        if (displayName === void 0) { displayName = ""; }
        if (email === void 0) { email = ""; }
        if (picture === void 0) { picture = ""; }
        if (provider === void 0) { provider = ""; }
        if (provider_id === void 0) { provider_id = ""; }
        this._id = _id;
        this.displayName = displayName;
        this.email = email;
        this.picture = picture;
        this.provider = provider;
        this.provider_id = provider_id;
    }
    return User;
}());
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/profile.interface.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cuppaOAuth_auth_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selective_preload_strategy__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_dashboard_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_5__admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__cuppaOAuth_auth_service__["a" /* AuthService */]],
        children: [
            {
                path: '',
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__cuppaOAuth_auth_service__["a" /* AuthService */]],
                children: [
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_6__admin_admin_dashboard_component__["a" /* AdminDashboardComponent */]
                    }
                ]
            }
        ]
    },
    {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_7__projects_projects_component__["a" /* ProjectsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__cuppaOAuth_auth_service__["a" /* AuthService */]]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__selective_preload_strategy__["a" /* PreloadSelectedModules */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/app-routing.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-root',
            template: "\n    <div class=\"jumbotron\">\n      <div class=\"container\">\n        <h2 class=\"title\">Angular2 OAuth2</h2> \n        <h3 class=\"sub-title\"> Social Login Demo</h3>\n          <router-outlet></router-outlet>\n      </div>\n    </div>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin_module__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_projects_module__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cuppaOAuth_cuppaOAuth_module__ = __webpack_require__(512);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_6__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_8__projects_projects_module__["a" /* ProjectsModule */],
                __WEBPACK_IMPORTED_MODULE_9__cuppaOAuth_cuppaOAuth_module__["a" /* CuppaOAuthModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oauth_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interceptor__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_interceptors__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_interceptors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_interceptors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(94);
/* unused harmony export interceptorFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuppaOAuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







function interceptorFactory(xhrBackend, requestOptions, serverURLInterceptor) {
    var service = new __WEBPACK_IMPORTED_MODULE_5_ng2_interceptors__["InterceptorService"](xhrBackend, requestOptions);
    service.addInterceptor(serverURLInterceptor); // Add it here
    return service;
}
var CuppaOAuthModule = (function () {
    function CuppaOAuthModule() {
    }
    CuppaOAuthModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__oauth_component__["a" /* cuppaOAuth */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__oauth_component__["a" /* cuppaOAuth */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_4__interceptor__["a" /* ServerURLInterceptor */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5_ng2_interceptors__["InterceptorService"],
                    useFactory: interceptorFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_6__angular_http__["XHRBackend"], __WEBPACK_IMPORTED_MODULE_6__angular_http__["RequestOptions"], __WEBPACK_IMPORTED_MODULE_4__interceptor__["a" /* ServerURLInterceptor */]] }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CuppaOAuthModule);
    return CuppaOAuthModule;
}());
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/cuppaOAuth.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerURLInterceptor; });
var ServerURLInterceptor = (function () {
    function ServerURLInterceptor() {
    }
    ServerURLInterceptor.prototype.interceptBefore = function (request) {
        if (localStorage.getItem('isLoggedIn') == "true") {
            console.log(request);
            request.options.headers.append("Authorization", "Bearer " + localStorage.getItem('token'));
        }
        return request;
    };
    ServerURLInterceptor.prototype.interceptAfter = function (response) {
        console.log(response);
        return response;
    };
    return ServerURLInterceptor;
}());
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/interceptor.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cuppaOAuth; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var cuppaOAuth = (function () {
    function cuppaOAuth(authService) {
        this.authService = authService;
    }
    cuppaOAuth.prototype.linkedinLogin = function () {
        this.authService.auth('linkedin', this.authConfig);
    };
    cuppaOAuth.prototype.facebookLogin = function () {
        this.authService.auth('facebook', this.authConfig);
    };
    cuppaOAuth.prototype.googleLogin = function () {
        this.authService.auth('google', this.authConfig);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], cuppaOAuth.prototype, "authConfig", void 0);
    cuppaOAuth = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'cuppa-oauth',
            template: "\n    <div class=\"row\">\n      <div class=\"col-md-4 \" style=\"margin: 0px auto;\">\n      <button (click)=\"googleLogin()\" class=\"btn btn-block btn-social btn-google\">\n          <span class=\"fa fa-google\"></span> Sign in with Google\n      </button>\n      <button (click)=\"facebookLogin()\" class=\"btn btn-block btn-social btn-facebook\">\n          <span class=\"fa fa-facebook\"></span> Sign in with Facebook\n      </button>\n      <button (click)=\"linkedinLogin()\" class=\"btn btn-block btn-social btn-linkedin\">\n          <span class=\"fa fa-linkedin\"></span> Sign in with LinkedIn\n      </button>\n      </div>\n    </div>",
            styles: [__webpack_require__(572)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], cuppaOAuth);
    return cuppaOAuth;
    var _a;
}());
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/oauth.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_component__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsModule = (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__projects_component__["a" /* ProjectsComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__projects_component__["a" /* ProjectsComponent */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectsModule);
    return ProjectsModule;
}());
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/projects.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloadSelectedModules; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreloadSelectedModules = (function () {
    function PreloadSelectedModules() {
        this.preloadedModules = [];
    }
    PreloadSelectedModules.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            // add the route path to our preloaded module array
            this.preloadedModules.push(route.path);
            // log the route path to the console
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
        }
    };
    PreloadSelectedModules = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], PreloadSelectedModules);
    return PreloadSelectedModules;
}());
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/selective-preload-strategy.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/environment.js.map

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(156)();
// imports


// module
exports.push([module.i, ".btn-social{position:relative;padding-left:44px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.btn-social>:first-child{position:absolute;left:0;top:0;bottom:0;width:32px;line-height:34px;font-size:1.6em;text-align:center;border-right:1px solid rgba(0,0,0,0.2)}\r\n.btn-social.btn-lg{padding-left:61px}.btn-social.btn-lg>:first-child{line-height:45px;width:45px;font-size:1.8em}\r\n.btn-social.btn-sm{padding-left:38px}.btn-social.btn-sm>:first-child{line-height:28px;width:28px;font-size:1.4em}\r\n.btn-social.btn-xs{padding-left:30px}.btn-social.btn-xs>:first-child{line-height:20px;width:20px;font-size:1.2em}\r\n.btn-social-icon{position:relative;padding-left:44px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;height:34px;width:34px;padding:0}.btn-social-icon>:first-child{position:absolute;left:0;top:0;bottom:0;width:32px;line-height:34px;font-size:1.6em;text-align:center;border-right:1px solid rgba(0,0,0,0.2)}\r\n.btn-social-icon.btn-lg{padding-left:61px}.btn-social-icon.btn-lg>:first-child{line-height:45px;width:45px;font-size:1.8em}\r\n.btn-social-icon.btn-sm{padding-left:38px}.btn-social-icon.btn-sm>:first-child{line-height:28px;width:28px;font-size:1.4em}\r\n.btn-social-icon.btn-xs{padding-left:30px}.btn-social-icon.btn-xs>:first-child{line-height:20px;width:20px;font-size:1.2em}\r\n.btn-social-icon>:first-child{border:none;text-align:center;width:100% !important}\r\n.btn-social-icon.btn-lg{height:45px;width:45px;padding-left:0;padding-right:0}\r\n.btn-social-icon.btn-sm{height:30px;width:30px;padding-left:0;padding-right:0}\r\n.btn-social-icon.btn-xs{height:22px;width:22px;padding-left:0;padding-right:0}\r\n.btn-adn{color:#fff;background-color:#d87a68;border-color:rgba(0,0,0,0.2)}.btn-adn:focus,.btn-adn.focus{color:#fff;background-color:#ce563f;border-color:rgba(0,0,0,0.2)}\r\n.btn-adn:hover{color:#fff;background-color:#ce563f;border-color:rgba(0,0,0,0.2)}\r\n.btn-adn:active,.btn-adn.active,.open>.dropdown-toggle.btn-adn{color:#fff;background-color:#ce563f;border-color:rgba(0,0,0,0.2)}.btn-adn:active:hover,.btn-adn.active:hover,.open>.dropdown-toggle.btn-adn:hover,.btn-adn:active:focus,.btn-adn.active:focus,.open>.dropdown-toggle.btn-adn:focus,.btn-adn:active.focus,.btn-adn.active.focus,.open>.dropdown-toggle.btn-adn.focus{color:#fff;background-color:#b94630;border-color:rgba(0,0,0,0.2)}\r\n.btn-adn:active,.btn-adn.active,.open>.dropdown-toggle.btn-adn{background-image:none}\r\n.btn-adn.disabled:hover,.btn-adn[disabled]:hover,fieldset[disabled] .btn-adn:hover,.btn-adn.disabled:focus,.btn-adn[disabled]:focus,fieldset[disabled] .btn-adn:focus,.btn-adn.disabled.focus,.btn-adn[disabled].focus,fieldset[disabled] .btn-adn.focus{background-color:#d87a68;border-color:rgba(0,0,0,0.2)}\r\n.btn-adn .badge{color:#d87a68;background-color:#fff}\r\n.btn-bitbucket{color:#fff;background-color:#205081;border-color:rgba(0,0,0,0.2)}.btn-bitbucket:focus,.btn-bitbucket.focus{color:#fff;background-color:#163758;border-color:rgba(0,0,0,0.2)}\r\n.btn-bitbucket:hover{color:#fff;background-color:#163758;border-color:rgba(0,0,0,0.2)}\r\n.btn-bitbucket:active,.btn-bitbucket.active,.open>.dropdown-toggle.btn-bitbucket{color:#fff;background-color:#163758;border-color:rgba(0,0,0,0.2)}.btn-bitbucket:active:hover,.btn-bitbucket.active:hover,.open>.dropdown-toggle.btn-bitbucket:hover,.btn-bitbucket:active:focus,.btn-bitbucket.active:focus,.open>.dropdown-toggle.btn-bitbucket:focus,.btn-bitbucket:active.focus,.btn-bitbucket.active.focus,.open>.dropdown-toggle.btn-bitbucket.focus{color:#fff;background-color:#0f253c;border-color:rgba(0,0,0,0.2)}\r\n.btn-bitbucket:active,.btn-bitbucket.active,.open>.dropdown-toggle.btn-bitbucket{background-image:none}\r\n.btn-bitbucket.disabled:hover,.btn-bitbucket[disabled]:hover,fieldset[disabled] .btn-bitbucket:hover,.btn-bitbucket.disabled:focus,.btn-bitbucket[disabled]:focus,fieldset[disabled] .btn-bitbucket:focus,.btn-bitbucket.disabled.focus,.btn-bitbucket[disabled].focus,fieldset[disabled] .btn-bitbucket.focus{background-color:#205081;border-color:rgba(0,0,0,0.2)}\r\n.btn-bitbucket .badge{color:#205081;background-color:#fff}\r\n.btn-dropbox{color:#fff;background-color:#1087dd;border-color:rgba(0,0,0,0.2)}.btn-dropbox:focus,.btn-dropbox.focus{color:#fff;background-color:#0d6aad;border-color:rgba(0,0,0,0.2)}\r\n.btn-dropbox:hover{color:#fff;background-color:#0d6aad;border-color:rgba(0,0,0,0.2)}\r\n.btn-dropbox:active,.btn-dropbox.active,.open>.dropdown-toggle.btn-dropbox{color:#fff;background-color:#0d6aad;border-color:rgba(0,0,0,0.2)}.btn-dropbox:active:hover,.btn-dropbox.active:hover,.open>.dropdown-toggle.btn-dropbox:hover,.btn-dropbox:active:focus,.btn-dropbox.active:focus,.open>.dropdown-toggle.btn-dropbox:focus,.btn-dropbox:active.focus,.btn-dropbox.active.focus,.open>.dropdown-toggle.btn-dropbox.focus{color:#fff;background-color:#0a568c;border-color:rgba(0,0,0,0.2)}\r\n.btn-dropbox:active,.btn-dropbox.active,.open>.dropdown-toggle.btn-dropbox{background-image:none}\r\n.btn-dropbox.disabled:hover,.btn-dropbox[disabled]:hover,fieldset[disabled] .btn-dropbox:hover,.btn-dropbox.disabled:focus,.btn-dropbox[disabled]:focus,fieldset[disabled] .btn-dropbox:focus,.btn-dropbox.disabled.focus,.btn-dropbox[disabled].focus,fieldset[disabled] .btn-dropbox.focus{background-color:#1087dd;border-color:rgba(0,0,0,0.2)}\r\n.btn-dropbox .badge{color:#1087dd;background-color:#fff}\r\n.btn-facebook{color:#fff;background-color:#3b5998;border-color:rgba(0,0,0,0.2)}.btn-facebook:focus,.btn-facebook.focus{color:#fff;background-color:#2d4373;border-color:rgba(0,0,0,0.2)}\r\n.btn-facebook:hover{color:#fff;background-color:#2d4373;border-color:rgba(0,0,0,0.2)}\r\n.btn-facebook:active,.btn-facebook.active,.open>.dropdown-toggle.btn-facebook{color:#fff;background-color:#2d4373;border-color:rgba(0,0,0,0.2)}.btn-facebook:active:hover,.btn-facebook.active:hover,.open>.dropdown-toggle.btn-facebook:hover,.btn-facebook:active:focus,.btn-facebook.active:focus,.open>.dropdown-toggle.btn-facebook:focus,.btn-facebook:active.focus,.btn-facebook.active.focus,.open>.dropdown-toggle.btn-facebook.focus{color:#fff;background-color:#23345a;border-color:rgba(0,0,0,0.2)}\r\n.btn-facebook:active,.btn-facebook.active,.open>.dropdown-toggle.btn-facebook{background-image:none}\r\n.btn-facebook.disabled:hover,.btn-facebook[disabled]:hover,fieldset[disabled] .btn-facebook:hover,.btn-facebook.disabled:focus,.btn-facebook[disabled]:focus,fieldset[disabled] .btn-facebook:focus,.btn-facebook.disabled.focus,.btn-facebook[disabled].focus,fieldset[disabled] .btn-facebook.focus{background-color:#3b5998;border-color:rgba(0,0,0,0.2)}\r\n.btn-facebook .badge{color:#3b5998;background-color:#fff}\r\n.btn-flickr{color:#fff;background-color:#ff0084;border-color:rgba(0,0,0,0.2)}.btn-flickr:focus,.btn-flickr.focus{color:#fff;background-color:#cc006a;border-color:rgba(0,0,0,0.2)}\r\n.btn-flickr:hover{color:#fff;background-color:#cc006a;border-color:rgba(0,0,0,0.2)}\r\n.btn-flickr:active,.btn-flickr.active,.open>.dropdown-toggle.btn-flickr{color:#fff;background-color:#cc006a;border-color:rgba(0,0,0,0.2)}.btn-flickr:active:hover,.btn-flickr.active:hover,.open>.dropdown-toggle.btn-flickr:hover,.btn-flickr:active:focus,.btn-flickr.active:focus,.open>.dropdown-toggle.btn-flickr:focus,.btn-flickr:active.focus,.btn-flickr.active.focus,.open>.dropdown-toggle.btn-flickr.focus{color:#fff;background-color:#a80057;border-color:rgba(0,0,0,0.2)}\r\n.btn-flickr:active,.btn-flickr.active,.open>.dropdown-toggle.btn-flickr{background-image:none}\r\n.btn-flickr.disabled:hover,.btn-flickr[disabled]:hover,fieldset[disabled] .btn-flickr:hover,.btn-flickr.disabled:focus,.btn-flickr[disabled]:focus,fieldset[disabled] .btn-flickr:focus,.btn-flickr.disabled.focus,.btn-flickr[disabled].focus,fieldset[disabled] .btn-flickr.focus{background-color:#ff0084;border-color:rgba(0,0,0,0.2)}\r\n.btn-flickr .badge{color:#ff0084;background-color:#fff}\r\n.btn-foursquare{color:#fff;background-color:#f94877;border-color:rgba(0,0,0,0.2)}.btn-foursquare:focus,.btn-foursquare.focus{color:#fff;background-color:#f71752;border-color:rgba(0,0,0,0.2)}\r\n.btn-foursquare:hover{color:#fff;background-color:#f71752;border-color:rgba(0,0,0,0.2)}\r\n.btn-foursquare:active,.btn-foursquare.active,.open>.dropdown-toggle.btn-foursquare{color:#fff;background-color:#f71752;border-color:rgba(0,0,0,0.2)}.btn-foursquare:active:hover,.btn-foursquare.active:hover,.open>.dropdown-toggle.btn-foursquare:hover,.btn-foursquare:active:focus,.btn-foursquare.active:focus,.open>.dropdown-toggle.btn-foursquare:focus,.btn-foursquare:active.focus,.btn-foursquare.active.focus,.open>.dropdown-toggle.btn-foursquare.focus{color:#fff;background-color:#e30742;border-color:rgba(0,0,0,0.2)}\r\n.btn-foursquare:active,.btn-foursquare.active,.open>.dropdown-toggle.btn-foursquare{background-image:none}\r\n.btn-foursquare.disabled:hover,.btn-foursquare[disabled]:hover,fieldset[disabled] .btn-foursquare:hover,.btn-foursquare.disabled:focus,.btn-foursquare[disabled]:focus,fieldset[disabled] .btn-foursquare:focus,.btn-foursquare.disabled.focus,.btn-foursquare[disabled].focus,fieldset[disabled] .btn-foursquare.focus{background-color:#f94877;border-color:rgba(0,0,0,0.2)}\r\n.btn-foursquare .badge{color:#f94877;background-color:#fff}\r\n.btn-github{color:#fff;background-color:#444;border-color:rgba(0,0,0,0.2)}.btn-github:focus,.btn-github.focus{color:#fff;background-color:#2b2b2b;border-color:rgba(0,0,0,0.2)}\r\n.btn-github:hover{color:#fff;background-color:#2b2b2b;border-color:rgba(0,0,0,0.2)}\r\n.btn-github:active,.btn-github.active,.open>.dropdown-toggle.btn-github{color:#fff;background-color:#2b2b2b;border-color:rgba(0,0,0,0.2)}.btn-github:active:hover,.btn-github.active:hover,.open>.dropdown-toggle.btn-github:hover,.btn-github:active:focus,.btn-github.active:focus,.open>.dropdown-toggle.btn-github:focus,.btn-github:active.focus,.btn-github.active.focus,.open>.dropdown-toggle.btn-github.focus{color:#fff;background-color:#191919;border-color:rgba(0,0,0,0.2)}\r\n.btn-github:active,.btn-github.active,.open>.dropdown-toggle.btn-github{background-image:none}\r\n.btn-github.disabled:hover,.btn-github[disabled]:hover,fieldset[disabled] .btn-github:hover,.btn-github.disabled:focus,.btn-github[disabled]:focus,fieldset[disabled] .btn-github:focus,.btn-github.disabled.focus,.btn-github[disabled].focus,fieldset[disabled] .btn-github.focus{background-color:#444;border-color:rgba(0,0,0,0.2)}\r\n.btn-github .badge{color:#444;background-color:#fff}\r\n.btn-google{color:#fff;background-color:#dd4b39;border-color:rgba(0,0,0,0.2)}.btn-google:focus,.btn-google.focus{color:#fff;background-color:#c23321;border-color:rgba(0,0,0,0.2)}\r\n.btn-google:hover{color:#fff;background-color:#c23321;border-color:rgba(0,0,0,0.2)}\r\n.btn-google:active,.btn-google.active,.open>.dropdown-toggle.btn-google{color:#fff;background-color:#c23321;border-color:rgba(0,0,0,0.2)}.btn-google:active:hover,.btn-google.active:hover,.open>.dropdown-toggle.btn-google:hover,.btn-google:active:focus,.btn-google.active:focus,.open>.dropdown-toggle.btn-google:focus,.btn-google:active.focus,.btn-google.active.focus,.open>.dropdown-toggle.btn-google.focus{color:#fff;background-color:#a32b1c;border-color:rgba(0,0,0,0.2)}\r\n.btn-google:active,.btn-google.active,.open>.dropdown-toggle.btn-google{background-image:none}\r\n.btn-google.disabled:hover,.btn-google[disabled]:hover,fieldset[disabled] .btn-google:hover,.btn-google.disabled:focus,.btn-google[disabled]:focus,fieldset[disabled] .btn-google:focus,.btn-google.disabled.focus,.btn-google[disabled].focus,fieldset[disabled] .btn-google.focus{background-color:#dd4b39;border-color:rgba(0,0,0,0.2)}\r\n.btn-google .badge{color:#dd4b39;background-color:#fff}\r\n.btn-instagram{color:#fff;background-color:#3f729b;border-color:rgba(0,0,0,0.2)}.btn-instagram:focus,.btn-instagram.focus{color:#fff;background-color:#305777;border-color:rgba(0,0,0,0.2)}\r\n.btn-instagram:hover{color:#fff;background-color:#305777;border-color:rgba(0,0,0,0.2)}\r\n.btn-instagram:active,.btn-instagram.active,.open>.dropdown-toggle.btn-instagram{color:#fff;background-color:#305777;border-color:rgba(0,0,0,0.2)}.btn-instagram:active:hover,.btn-instagram.active:hover,.open>.dropdown-toggle.btn-instagram:hover,.btn-instagram:active:focus,.btn-instagram.active:focus,.open>.dropdown-toggle.btn-instagram:focus,.btn-instagram:active.focus,.btn-instagram.active.focus,.open>.dropdown-toggle.btn-instagram.focus{color:#fff;background-color:#26455d;border-color:rgba(0,0,0,0.2)}\r\n.btn-instagram:active,.btn-instagram.active,.open>.dropdown-toggle.btn-instagram{background-image:none}\r\n.btn-instagram.disabled:hover,.btn-instagram[disabled]:hover,fieldset[disabled] .btn-instagram:hover,.btn-instagram.disabled:focus,.btn-instagram[disabled]:focus,fieldset[disabled] .btn-instagram:focus,.btn-instagram.disabled.focus,.btn-instagram[disabled].focus,fieldset[disabled] .btn-instagram.focus{background-color:#3f729b;border-color:rgba(0,0,0,0.2)}\r\n.btn-instagram .badge{color:#3f729b;background-color:#fff}\r\n.btn-linkedin{color:#fff;background-color:#007bb6;border-color:rgba(0,0,0,0.2)}.btn-linkedin:focus,.btn-linkedin.focus{color:#fff;background-color:#005983;border-color:rgba(0,0,0,0.2)}\r\n.btn-linkedin:hover{color:#fff;background-color:#005983;border-color:rgba(0,0,0,0.2)}\r\n.btn-linkedin:active,.btn-linkedin.active,.open>.dropdown-toggle.btn-linkedin{color:#fff;background-color:#005983;border-color:rgba(0,0,0,0.2)}.btn-linkedin:active:hover,.btn-linkedin.active:hover,.open>.dropdown-toggle.btn-linkedin:hover,.btn-linkedin:active:focus,.btn-linkedin.active:focus,.open>.dropdown-toggle.btn-linkedin:focus,.btn-linkedin:active.focus,.btn-linkedin.active.focus,.open>.dropdown-toggle.btn-linkedin.focus{color:#fff;background-color:#00405f;border-color:rgba(0,0,0,0.2)}\r\n.btn-linkedin:active,.btn-linkedin.active,.open>.dropdown-toggle.btn-linkedin{background-image:none}\r\n.btn-linkedin.disabled:hover,.btn-linkedin[disabled]:hover,fieldset[disabled] .btn-linkedin:hover,.btn-linkedin.disabled:focus,.btn-linkedin[disabled]:focus,fieldset[disabled] .btn-linkedin:focus,.btn-linkedin.disabled.focus,.btn-linkedin[disabled].focus,fieldset[disabled] .btn-linkedin.focus{background-color:#007bb6;border-color:rgba(0,0,0,0.2)}\r\n.btn-linkedin .badge{color:#007bb6;background-color:#fff}\r\n.btn-microsoft{color:#fff;background-color:#2672ec;border-color:rgba(0,0,0,0.2)}.btn-microsoft:focus,.btn-microsoft.focus{color:#fff;background-color:#125acd;border-color:rgba(0,0,0,0.2)}\r\n.btn-microsoft:hover{color:#fff;background-color:#125acd;border-color:rgba(0,0,0,0.2)}\r\n.btn-microsoft:active,.btn-microsoft.active,.open>.dropdown-toggle.btn-microsoft{color:#fff;background-color:#125acd;border-color:rgba(0,0,0,0.2)}.btn-microsoft:active:hover,.btn-microsoft.active:hover,.open>.dropdown-toggle.btn-microsoft:hover,.btn-microsoft:active:focus,.btn-microsoft.active:focus,.open>.dropdown-toggle.btn-microsoft:focus,.btn-microsoft:active.focus,.btn-microsoft.active.focus,.open>.dropdown-toggle.btn-microsoft.focus{color:#fff;background-color:#0f4bac;border-color:rgba(0,0,0,0.2)}\r\n.btn-microsoft:active,.btn-microsoft.active,.open>.dropdown-toggle.btn-microsoft{background-image:none}\r\n.btn-microsoft.disabled:hover,.btn-microsoft[disabled]:hover,fieldset[disabled] .btn-microsoft:hover,.btn-microsoft.disabled:focus,.btn-microsoft[disabled]:focus,fieldset[disabled] .btn-microsoft:focus,.btn-microsoft.disabled.focus,.btn-microsoft[disabled].focus,fieldset[disabled] .btn-microsoft.focus{background-color:#2672ec;border-color:rgba(0,0,0,0.2)}\r\n.btn-microsoft .badge{color:#2672ec;background-color:#fff}\r\n.btn-odnoklassniki{color:#fff;background-color:#f4731c;border-color:rgba(0,0,0,0.2)}.btn-odnoklassniki:focus,.btn-odnoklassniki.focus{color:#fff;background-color:#d35b0a;border-color:rgba(0,0,0,0.2)}\r\n.btn-odnoklassniki:hover{color:#fff;background-color:#d35b0a;border-color:rgba(0,0,0,0.2)}\r\n.btn-odnoklassniki:active,.btn-odnoklassniki.active,.open>.dropdown-toggle.btn-odnoklassniki{color:#fff;background-color:#d35b0a;border-color:rgba(0,0,0,0.2)}.btn-odnoklassniki:active:hover,.btn-odnoklassniki.active:hover,.open>.dropdown-toggle.btn-odnoklassniki:hover,.btn-odnoklassniki:active:focus,.btn-odnoklassniki.active:focus,.open>.dropdown-toggle.btn-odnoklassniki:focus,.btn-odnoklassniki:active.focus,.btn-odnoklassniki.active.focus,.open>.dropdown-toggle.btn-odnoklassniki.focus{color:#fff;background-color:#b14c09;border-color:rgba(0,0,0,0.2)}\r\n.btn-odnoklassniki:active,.btn-odnoklassniki.active,.open>.dropdown-toggle.btn-odnoklassniki{background-image:none}\r\n.btn-odnoklassniki.disabled:hover,.btn-odnoklassniki[disabled]:hover,fieldset[disabled] .btn-odnoklassniki:hover,.btn-odnoklassniki.disabled:focus,.btn-odnoklassniki[disabled]:focus,fieldset[disabled] .btn-odnoklassniki:focus,.btn-odnoklassniki.disabled.focus,.btn-odnoklassniki[disabled].focus,fieldset[disabled] .btn-odnoklassniki.focus{background-color:#f4731c;border-color:rgba(0,0,0,0.2)}\r\n.btn-odnoklassniki .badge{color:#f4731c;background-color:#fff}\r\n.btn-openid{color:#fff;background-color:#f7931e;border-color:rgba(0,0,0,0.2)}.btn-openid:focus,.btn-openid.focus{color:#fff;background-color:#da7908;border-color:rgba(0,0,0,0.2)}\r\n.btn-openid:hover{color:#fff;background-color:#da7908;border-color:rgba(0,0,0,0.2)}\r\n.btn-openid:active,.btn-openid.active,.open>.dropdown-toggle.btn-openid{color:#fff;background-color:#da7908;border-color:rgba(0,0,0,0.2)}.btn-openid:active:hover,.btn-openid.active:hover,.open>.dropdown-toggle.btn-openid:hover,.btn-openid:active:focus,.btn-openid.active:focus,.open>.dropdown-toggle.btn-openid:focus,.btn-openid:active.focus,.btn-openid.active.focus,.open>.dropdown-toggle.btn-openid.focus{color:#fff;background-color:#b86607;border-color:rgba(0,0,0,0.2)}\r\n.btn-openid:active,.btn-openid.active,.open>.dropdown-toggle.btn-openid{background-image:none}\r\n.btn-openid.disabled:hover,.btn-openid[disabled]:hover,fieldset[disabled] .btn-openid:hover,.btn-openid.disabled:focus,.btn-openid[disabled]:focus,fieldset[disabled] .btn-openid:focus,.btn-openid.disabled.focus,.btn-openid[disabled].focus,fieldset[disabled] .btn-openid.focus{background-color:#f7931e;border-color:rgba(0,0,0,0.2)}\r\n.btn-openid .badge{color:#f7931e;background-color:#fff}\r\n.btn-pinterest{color:#fff;background-color:#cb2027;border-color:rgba(0,0,0,0.2)}.btn-pinterest:focus,.btn-pinterest.focus{color:#fff;background-color:#9f191f;border-color:rgba(0,0,0,0.2)}\r\n.btn-pinterest:hover{color:#fff;background-color:#9f191f;border-color:rgba(0,0,0,0.2)}\r\n.btn-pinterest:active,.btn-pinterest.active,.open>.dropdown-toggle.btn-pinterest{color:#fff;background-color:#9f191f;border-color:rgba(0,0,0,0.2)}.btn-pinterest:active:hover,.btn-pinterest.active:hover,.open>.dropdown-toggle.btn-pinterest:hover,.btn-pinterest:active:focus,.btn-pinterest.active:focus,.open>.dropdown-toggle.btn-pinterest:focus,.btn-pinterest:active.focus,.btn-pinterest.active.focus,.open>.dropdown-toggle.btn-pinterest.focus{color:#fff;background-color:#801419;border-color:rgba(0,0,0,0.2)}\r\n.btn-pinterest:active,.btn-pinterest.active,.open>.dropdown-toggle.btn-pinterest{background-image:none}\r\n.btn-pinterest.disabled:hover,.btn-pinterest[disabled]:hover,fieldset[disabled] .btn-pinterest:hover,.btn-pinterest.disabled:focus,.btn-pinterest[disabled]:focus,fieldset[disabled] .btn-pinterest:focus,.btn-pinterest.disabled.focus,.btn-pinterest[disabled].focus,fieldset[disabled] .btn-pinterest.focus{background-color:#cb2027;border-color:rgba(0,0,0,0.2)}\r\n.btn-pinterest .badge{color:#cb2027;background-color:#fff}\r\n.btn-reddit{color:#000;background-color:#eff7ff;border-color:rgba(0,0,0,0.2)}.btn-reddit:focus,.btn-reddit.focus{color:#000;background-color:#bcddff;border-color:rgba(0,0,0,0.2)}\r\n.btn-reddit:hover{color:#000;background-color:#bcddff;border-color:rgba(0,0,0,0.2)}\r\n.btn-reddit:active,.btn-reddit.active,.open>.dropdown-toggle.btn-reddit{color:#000;background-color:#bcddff;border-color:rgba(0,0,0,0.2)}.btn-reddit:active:hover,.btn-reddit.active:hover,.open>.dropdown-toggle.btn-reddit:hover,.btn-reddit:active:focus,.btn-reddit.active:focus,.open>.dropdown-toggle.btn-reddit:focus,.btn-reddit:active.focus,.btn-reddit.active.focus,.open>.dropdown-toggle.btn-reddit.focus{color:#000;background-color:#98ccff;border-color:rgba(0,0,0,0.2)}\r\n.btn-reddit:active,.btn-reddit.active,.open>.dropdown-toggle.btn-reddit{background-image:none}\r\n.btn-reddit.disabled:hover,.btn-reddit[disabled]:hover,fieldset[disabled] .btn-reddit:hover,.btn-reddit.disabled:focus,.btn-reddit[disabled]:focus,fieldset[disabled] .btn-reddit:focus,.btn-reddit.disabled.focus,.btn-reddit[disabled].focus,fieldset[disabled] .btn-reddit.focus{background-color:#eff7ff;border-color:rgba(0,0,0,0.2)}\r\n.btn-reddit .badge{color:#eff7ff;background-color:#000}\r\n.btn-soundcloud{color:#fff;background-color:#f50;border-color:rgba(0,0,0,0.2)}.btn-soundcloud:focus,.btn-soundcloud.focus{color:#fff;background-color:#c40;border-color:rgba(0,0,0,0.2)}\r\n.btn-soundcloud:hover{color:#fff;background-color:#c40;border-color:rgba(0,0,0,0.2)}\r\n.btn-soundcloud:active,.btn-soundcloud.active,.open>.dropdown-toggle.btn-soundcloud{color:#fff;background-color:#c40;border-color:rgba(0,0,0,0.2)}.btn-soundcloud:active:hover,.btn-soundcloud.active:hover,.open>.dropdown-toggle.btn-soundcloud:hover,.btn-soundcloud:active:focus,.btn-soundcloud.active:focus,.open>.dropdown-toggle.btn-soundcloud:focus,.btn-soundcloud:active.focus,.btn-soundcloud.active.focus,.open>.dropdown-toggle.btn-soundcloud.focus{color:#fff;background-color:#a83800;border-color:rgba(0,0,0,0.2)}\r\n.btn-soundcloud:active,.btn-soundcloud.active,.open>.dropdown-toggle.btn-soundcloud{background-image:none}\r\n.btn-soundcloud.disabled:hover,.btn-soundcloud[disabled]:hover,fieldset[disabled] .btn-soundcloud:hover,.btn-soundcloud.disabled:focus,.btn-soundcloud[disabled]:focus,fieldset[disabled] .btn-soundcloud:focus,.btn-soundcloud.disabled.focus,.btn-soundcloud[disabled].focus,fieldset[disabled] .btn-soundcloud.focus{background-color:#f50;border-color:rgba(0,0,0,0.2)}\r\n.btn-soundcloud .badge{color:#f50;background-color:#fff}\r\n.btn-tumblr{color:#fff;background-color:#2c4762;border-color:rgba(0,0,0,0.2)}.btn-tumblr:focus,.btn-tumblr.focus{color:#fff;background-color:#1c2d3f;border-color:rgba(0,0,0,0.2)}\r\n.btn-tumblr:hover{color:#fff;background-color:#1c2d3f;border-color:rgba(0,0,0,0.2)}\r\n.btn-tumblr:active,.btn-tumblr.active,.open>.dropdown-toggle.btn-tumblr{color:#fff;background-color:#1c2d3f;border-color:rgba(0,0,0,0.2)}.btn-tumblr:active:hover,.btn-tumblr.active:hover,.open>.dropdown-toggle.btn-tumblr:hover,.btn-tumblr:active:focus,.btn-tumblr.active:focus,.open>.dropdown-toggle.btn-tumblr:focus,.btn-tumblr:active.focus,.btn-tumblr.active.focus,.open>.dropdown-toggle.btn-tumblr.focus{color:#fff;background-color:#111c26;border-color:rgba(0,0,0,0.2)}\r\n.btn-tumblr:active,.btn-tumblr.active,.open>.dropdown-toggle.btn-tumblr{background-image:none}\r\n.btn-tumblr.disabled:hover,.btn-tumblr[disabled]:hover,fieldset[disabled] .btn-tumblr:hover,.btn-tumblr.disabled:focus,.btn-tumblr[disabled]:focus,fieldset[disabled] .btn-tumblr:focus,.btn-tumblr.disabled.focus,.btn-tumblr[disabled].focus,fieldset[disabled] .btn-tumblr.focus{background-color:#2c4762;border-color:rgba(0,0,0,0.2)}\r\n.btn-tumblr .badge{color:#2c4762;background-color:#fff}\r\n.btn-twitter{color:#fff;background-color:#55acee;border-color:rgba(0,0,0,0.2)}.btn-twitter:focus,.btn-twitter.focus{color:#fff;background-color:#2795e9;border-color:rgba(0,0,0,0.2)}\r\n.btn-twitter:hover{color:#fff;background-color:#2795e9;border-color:rgba(0,0,0,0.2)}\r\n.btn-twitter:active,.btn-twitter.active,.open>.dropdown-toggle.btn-twitter{color:#fff;background-color:#2795e9;border-color:rgba(0,0,0,0.2)}.btn-twitter:active:hover,.btn-twitter.active:hover,.open>.dropdown-toggle.btn-twitter:hover,.btn-twitter:active:focus,.btn-twitter.active:focus,.open>.dropdown-toggle.btn-twitter:focus,.btn-twitter:active.focus,.btn-twitter.active.focus,.open>.dropdown-toggle.btn-twitter.focus{color:#fff;background-color:#1583d7;border-color:rgba(0,0,0,0.2)}\r\n.btn-twitter:active,.btn-twitter.active,.open>.dropdown-toggle.btn-twitter{background-image:none}\r\n.btn-twitter.disabled:hover,.btn-twitter[disabled]:hover,fieldset[disabled] .btn-twitter:hover,.btn-twitter.disabled:focus,.btn-twitter[disabled]:focus,fieldset[disabled] .btn-twitter:focus,.btn-twitter.disabled.focus,.btn-twitter[disabled].focus,fieldset[disabled] .btn-twitter.focus{background-color:#55acee;border-color:rgba(0,0,0,0.2)}\r\n.btn-twitter .badge{color:#55acee;background-color:#fff}\r\n.btn-vimeo{color:#fff;background-color:#1ab7ea;border-color:rgba(0,0,0,0.2)}.btn-vimeo:focus,.btn-vimeo.focus{color:#fff;background-color:#1295bf;border-color:rgba(0,0,0,0.2)}\r\n.btn-vimeo:hover{color:#fff;background-color:#1295bf;border-color:rgba(0,0,0,0.2)}\r\n.btn-vimeo:active,.btn-vimeo.active,.open>.dropdown-toggle.btn-vimeo{color:#fff;background-color:#1295bf;border-color:rgba(0,0,0,0.2)}.btn-vimeo:active:hover,.btn-vimeo.active:hover,.open>.dropdown-toggle.btn-vimeo:hover,.btn-vimeo:active:focus,.btn-vimeo.active:focus,.open>.dropdown-toggle.btn-vimeo:focus,.btn-vimeo:active.focus,.btn-vimeo.active.focus,.open>.dropdown-toggle.btn-vimeo.focus{color:#fff;background-color:#0f7b9f;border-color:rgba(0,0,0,0.2)}\r\n.btn-vimeo:active,.btn-vimeo.active,.open>.dropdown-toggle.btn-vimeo{background-image:none}\r\n.btn-vimeo.disabled:hover,.btn-vimeo[disabled]:hover,fieldset[disabled] .btn-vimeo:hover,.btn-vimeo.disabled:focus,.btn-vimeo[disabled]:focus,fieldset[disabled] .btn-vimeo:focus,.btn-vimeo.disabled.focus,.btn-vimeo[disabled].focus,fieldset[disabled] .btn-vimeo.focus{background-color:#1ab7ea;border-color:rgba(0,0,0,0.2)}\r\n.btn-vimeo .badge{color:#1ab7ea;background-color:#fff}\r\n.btn-vk{color:#fff;background-color:#587ea3;border-color:rgba(0,0,0,0.2)}.btn-vk:focus,.btn-vk.focus{color:#fff;background-color:#466482;border-color:rgba(0,0,0,0.2)}\r\n.btn-vk:hover{color:#fff;background-color:#466482;border-color:rgba(0,0,0,0.2)}\r\n.btn-vk:active,.btn-vk.active,.open>.dropdown-toggle.btn-vk{color:#fff;background-color:#466482;border-color:rgba(0,0,0,0.2)}.btn-vk:active:hover,.btn-vk.active:hover,.open>.dropdown-toggle.btn-vk:hover,.btn-vk:active:focus,.btn-vk.active:focus,.open>.dropdown-toggle.btn-vk:focus,.btn-vk:active.focus,.btn-vk.active.focus,.open>.dropdown-toggle.btn-vk.focus{color:#fff;background-color:#3a526b;border-color:rgba(0,0,0,0.2)}\r\n.btn-vk:active,.btn-vk.active,.open>.dropdown-toggle.btn-vk{background-image:none}\r\n.btn-vk.disabled:hover,.btn-vk[disabled]:hover,fieldset[disabled] .btn-vk:hover,.btn-vk.disabled:focus,.btn-vk[disabled]:focus,fieldset[disabled] .btn-vk:focus,.btn-vk.disabled.focus,.btn-vk[disabled].focus,fieldset[disabled] .btn-vk.focus{background-color:#587ea3;border-color:rgba(0,0,0,0.2)}\r\n.btn-vk .badge{color:#587ea3;background-color:#fff}\r\n.btn-yahoo{color:#fff;background-color:#720e9e;border-color:rgba(0,0,0,0.2)}.btn-yahoo:focus,.btn-yahoo.focus{color:#fff;background-color:#500a6f;border-color:rgba(0,0,0,0.2)}\r\n.btn-yahoo:hover{color:#fff;background-color:#500a6f;border-color:rgba(0,0,0,0.2)}\r\n.btn-yahoo:active,.btn-yahoo.active,.open>.dropdown-toggle.btn-yahoo{color:#fff;background-color:#500a6f;border-color:rgba(0,0,0,0.2)}.btn-yahoo:active:hover,.btn-yahoo.active:hover,.open>.dropdown-toggle.btn-yahoo:hover,.btn-yahoo:active:focus,.btn-yahoo.active:focus,.open>.dropdown-toggle.btn-yahoo:focus,.btn-yahoo:active.focus,.btn-yahoo.active.focus,.open>.dropdown-toggle.btn-yahoo.focus{color:#fff;background-color:#39074e;border-color:rgba(0,0,0,0.2)}\r\n.btn-yahoo:active,.btn-yahoo.active,.open>.dropdown-toggle.btn-yahoo{background-image:none}\r\n.btn-yahoo.disabled:hover,.btn-yahoo[disabled]:hover,fieldset[disabled] .btn-yahoo:hover,.btn-yahoo.disabled:focus,.btn-yahoo[disabled]:focus,fieldset[disabled] .btn-yahoo:focus,.btn-yahoo.disabled.focus,.btn-yahoo[disabled].focus,fieldset[disabled] .btn-yahoo.focus{background-color:#720e9e;border-color:rgba(0,0,0,0.2)}\r\n.btn-yahoo .badge{color:#720e9e;background-color:#fff}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_interceptors__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_interceptors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_interceptors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthService = (function () {
    function AuthService(_http, router, location) {
        var _this = this;
        this._http = _http;
        this.router = router;
        this.location = location;
        this.configObj = { "authEndpoint": "", "clientId": "", "redirectURI": "" };
        var config = localStorage.getItem("authConfig");
        var provider = localStorage.getItem("provider");
        var cachedURL = localStorage.getItem('cachedurl');
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"](this.location.path(false).split('?')[1]);
        this.code = params.get('code');
        if (config) {
            this.configObj = JSON.parse(config)[provider];
            this.loginURI = JSON.parse(config).loginRoute;
        }
        if (provider) {
            this.loginProvider = provider;
        }
        if (cachedURL) {
            this.cachedURL = cachedURL;
        }
        if (this.code) {
            this.login(this.code, this.configObj.clientId, this.configObj.redirectURI, this.configObj.authEndpoint)
                .then(function (data) {
                _this.loading = false;
                _this.router.navigate([_this.cachedURL]);
                return true;
            });
        }
    }
    AuthService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.verifyLogin(url);
    };
    AuthService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthService.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.verifyLogin(url);
    };
    AuthService.prototype.login = function (code, clientId, redirectURI, authEndpoint) {
        var body = { "code": code, "clientId": clientId, "redirectUri": redirectURI };
        return this._http.post(authEndpoint, body, {})
            .toPromise()
            .then(function (r) {
            localStorage.setItem('isLoggedIn', "true");
            localStorage.setItem('token', r.json().token);
            return r.json();
        })
            .catch(this.handleError);
        ;
        // return Observable.of(true).delay(1000).do(val => this.isLoggedIn = localStorage.getItem('isLoggedIn'));
    };
    AuthService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    AuthService.prototype.logout = function () {
        localStorage.setItem('isLoggedIn', "false");
        localStorage.removeItem('token');
        localStorage.removeItem('cachedurl');
        localStorage.removeItem('provider');
        this.router.navigate([this.loginURI]);
    };
    AuthService.prototype.verifyLogin = function (url) {
        if (!this.isLoggedIn() && this.code == null) {
            localStorage.setItem('cachedurl', url);
            this.router.navigate([this.loginURI]);
            return false;
        }
        else if (this.isLoggedIn()) {
            return true;
        }
        else if (!this.isLoggedIn() && this.code != null) {
            var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"](this.location.path(false).split('?')[1]);
            if (params.get('code') && (localStorage.getItem('cachedurl') == "" || localStorage.getItem('cachedurl') == undefined)) {
                localStorage.setItem('cachedurl', this.location.path(false).split('?')[0]);
            }
            if (this.cachedURL != null || this.cachedURL != "") {
                this.cachedURL = localStorage.getItem('cachedurl');
            }
        }
    };
    AuthService.prototype.isLoggedIn = function () {
        var status = false;
        if (localStorage.getItem('isLoggedIn') == "true") {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    };
    AuthService.prototype.auth = function (provider, authConfig) {
        localStorage.setItem("authConfig", JSON.stringify(authConfig));
        localStorage.setItem("provider", provider);
        if (provider == "linkedin" && !this.isLoggedIn()) {
            window.location.href = 'https://www.linkedin.com/oauth/v2/authorization?client_id=' + authConfig.linkedin.clientId + '&redirect_uri=' + authConfig.linkedin.redirectURI + '&response_type=code';
        }
        if (provider == "facebook" && !this.isLoggedIn()) {
            window.location.href = 'https://www.facebook.com/v2.8/dialog/oauth?client_id=' + authConfig.facebook.clientId + '&redirect_uri=' + authConfig.facebook.redirectURI + '&scope=email';
        }
        if (provider == "google" && !this.isLoggedIn()) {
            window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=' + authConfig.google.clientId + '&redirect_uri=' + authConfig.google.redirectURI + '&scope=email%20profile';
        }
        else {
            this.router.navigate([this.cachedURL]);
        }
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_ng2_interceptors__["InterceptorService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_ng2_interceptors__["InterceptorService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */]) === 'function' && _c) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Lenovo/Documents/Projects/angular2-social-login/src/auth.service.js.map

/***/ })

},[844]);
//# sourceMappingURL=main.bundle.js.map