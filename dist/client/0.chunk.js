webpackJsonpac__name_([0],{

/***/ 966:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(85);
var admin_component_1 = __webpack_require__(968);
var admin_dashboard_component_1 = __webpack_require__(967);
var manage_crises_component_1 = __webpack_require__(970);
var manage_heroes_component_1 = __webpack_require__(971);
var admin_routing_module_1 = __webpack_require__(972);
var admin_services_1 = __webpack_require__(969);
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            admin_routing_module_1.AdminRoutingModule
        ],
        declarations: [
            admin_component_1.AdminComponent,
            admin_dashboard_component_1.AdminDashboardComponent,
            manage_crises_component_1.ManageCrisesComponent,
            manage_heroes_component_1.ManageHeroesComponent
        ],
        providers: [
            admin_services_1.AdminService
        ]
    }),
    __metadata("design:paramtypes", [])
], AdminModule);
exports.AdminModule = AdminModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ },

/***/ 967:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var admin_services_1 = __webpack_require__(969);
var profile_interface_1 = __webpack_require__(973);
__webpack_require__(124);
var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(adminService) {
        this.adminService = adminService;
        this.user = new profile_interface_1.User();
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.getUserProfile();
    };
    AdminDashboardComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.adminService.getProfile().subscribe(function (profile) {
            console.log(profile);
            console.log(_this.user = new profile_interface_1.User(profile._id, profile.displayName, profile.email, profile.picture, profile.provider, profile.provider_id));
            //this.
        }, function (err) {
            console.log(err);
        });
    };
    return AdminDashboardComponent;
}());
AdminDashboardComponent = __decorate([
    core_1.Component({
        template: "\n    <p>User ID: {{ user._id}}</p>\n    <p>Name: {{ user.displayName}}</p>\n    <p>Email: {{ user.email}}</p>\n    <img src=\"{{ user.picture}}\" />\n    <p>Provider: {{ user.provider}}</p>\n    <p>Provider ID: {{ user.provider_id}}</p>\n    \n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof admin_services_1.AdminService !== "undefined" && admin_services_1.AdminService) === "function" && _a || Object])
], AdminDashboardComponent);
exports.AdminDashboardComponent = AdminDashboardComponent;
var _a;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ },

/***/ 968:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var AdminComponent = (function () {
    function AdminComponent() {
    }
    return AdminComponent;
}());
AdminComponent = __decorate([
    core_1.Component({
        template: "\n    <h3>ADMIN</h3>\n    <nav>\n      <a routerLink=\"./\" routerLinkActive=\"active\"\n        [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard</a>\n    </nav>\n    <router-outlet></router-outlet>\n  "
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);
exports.AdminComponent = AdminComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ },

/***/ 969:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var Rx_1 = __webpack_require__(446);
var ng2_interceptors_1 = __webpack_require__(275);
// Import RxJs required methods
__webpack_require__(124);
__webpack_require__(447);
var AdminService = (function () {
    // Resolve HTTP using the constructor
    function AdminService(_http) {
        this._http = _http;
        this.commentsUrl = 'http://localhost:3000/api/profile';
    }
    AdminService.prototype.getProfile = function () {
        // ...using get request
        return this._http.get(this.commentsUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    return AdminService;
}());
AdminService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof ng2_interceptors_1.InterceptorService !== "undefined" && ng2_interceptors_1.InterceptorService) === "function" && _a || Object])
], AdminService);
exports.AdminService = AdminService;
var _a;


/***/ },

/***/ 970:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var ManageCrisesComponent = (function () {
    function ManageCrisesComponent() {
    }
    return ManageCrisesComponent;
}());
ManageCrisesComponent = __decorate([
    core_1.Component({
        template: "\n    <p>Manage your crises here</p>\n  "
    }),
    __metadata("design:paramtypes", [])
], ManageCrisesComponent);
exports.ManageCrisesComponent = ManageCrisesComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ },

/***/ 971:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var ManageHeroesComponent = (function () {
    function ManageHeroesComponent() {
    }
    return ManageHeroesComponent;
}());
ManageHeroesComponent = __decorate([
    core_1.Component({
        template: "\n    <p>Manage your heroes here</p>\n  "
    }),
    __metadata("design:paramtypes", [])
], ManageHeroesComponent);
exports.ManageHeroesComponent = ManageHeroesComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ },

/***/ 972:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(73);
var admin_component_1 = __webpack_require__(968);
var admin_dashboard_component_1 = __webpack_require__(967);
var manage_crises_component_1 = __webpack_require__(970);
var manage_heroes_component_1 = __webpack_require__(971);
var auth_service_1 = __webpack_require__(178);
var adminRoutes = [
    {
        path: '',
        component: admin_component_1.AdminComponent,
        canActivate: [auth_service_1.AuthService],
        children: [
            {
                path: '',
                canActivateChild: [auth_service_1.AuthService],
                children: [
                    { path: 'crises', component: manage_crises_component_1.ManageCrisesComponent },
                    { path: 'heroes', component: manage_heroes_component_1.ManageHeroesComponent },
                    { path: '', component: admin_dashboard_component_1.AdminDashboardComponent }
                ]
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(adminRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    }),
    __metadata("design:paramtypes", [])
], AdminRoutingModule);
exports.AdminRoutingModule = AdminRoutingModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ },

/***/ 973:
/***/ function(module, exports) {

"use strict";
"use strict";
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
exports.User = User;


/***/ }

});
//# sourceMappingURL=0.map