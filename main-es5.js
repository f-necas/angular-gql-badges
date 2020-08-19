function _templateObject3() {
  var data = _taggedTemplateLiteral(["query UserList {\n        users {\n            id\n            username\n        }\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["query UserList {\n        users {\n            id\n            username\n            badges {\n                name\n                image_b64\n            }\n        }\n      }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      mutation addBadge($userId: Int!, $name: String!, $image_b64: String!) {\n        insert_badges(objects: {fk_user_id: $userId, image_b64: $image_b64, name: $name}) {\n            returning {\n                id\n            }\n          }\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _graphql_all_users_with_badges_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../graphql/all-users-with-badges.service */
    "./src/app/graphql/all-users-with-badges.service.ts");
    /* harmony import */


    var _graphql_admin_gql_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../graphql/admin-gql.service */
    "./src/app/graphql/admin-gql.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdminComponent_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r1.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.username);
      }
    }

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(allUsers, addBadge) {
        _classCallCheck(this, AdminComponent);

        this.allUsers = allUsers;
        this.addBadge = addBadge;
        this.base64textString = "";
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.users = this.allUsers.watch().valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result.data.users;
          }));
        }
      }, {
        key: "handleFileSelect",
        value: function handleFileSelect(evt) {
          var files = evt.target.files;
          var file = files[0];

          if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
          }
        }
      }, {
        key: "_handleReaderLoaded",
        value: function _handleReaderLoaded(readerEvt) {
          var binaryString = readerEvt.target.result;
          this.base64textString = 'data:image/png;base64,' + btoa(binaryString);
        }
      }, {
        key: "addBadgeToUser",
        value: function addBadgeToUser() {
          console.log('this.userId ' + this.userId);
          console.log('this.name ' + this.name);
          console.log('this.base64textString ' + this.base64textString);

          if (!!this.userId && !!this.name && !!this.base64textString) {
            this.addBadge.mutate({
              userId: this.userId,
              name: this.name,
              image_b64: this.base64textString
            }).subscribe();
          } else {
            console.log("one is empty");
          }
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ɵfac = function AdminComponent_Factory(t) {
      return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_graphql_all_users_with_badges_service__WEBPACK_IMPORTED_MODULE_2__["AllUsers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_graphql_admin_gql_service__WEBPACK_IMPORTED_MODULE_3__["AddBadgeGQL"]));
    };

    AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminComponent,
      selectors: [["app-admin"]],
      decls: 21,
      vars: 6,
      consts: [[3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", 3, "ngModel", "ngModelChange"], ["for", "filePicker"], ["type", "file", "id", "filePicker", 3, "change"], [3, "src"], ["type", "button", 3, "click"], [3, "value"]],
      template: function AdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_select_ngModelChange_3_listener($event) {
            return ctx.userId = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdminComponent_option_4_Template, 2, 2, "option", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Choose or drag a file:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdminComponent_Template_input_change_12_listener($event) {
            return ctx.handleFileSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Base64 encoded version");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_button_click_19_listener() {
            return ctx.addBadgeToUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "hey");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.users));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.base64textString, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin',
          templateUrl: './admin.component.html',
          styleUrls: ['./admin.component.scss']
        }]
      }], function () {
        return [{
          type: _graphql_all_users_with_badges_service__WEBPACK_IMPORTED_MODULE_2__["AllUsers"]
        }, {
          type: _graphql_admin_gql_service__WEBPACK_IMPORTED_MODULE_3__["AddBadgeGQL"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _badges_badges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./badges/badges.component */
    "./src/app/badges/badges.component.ts");

    var routes = [{
      path: '',
      component: _badges_badges_component__WEBPACK_IMPORTED_MODULE_3__["BadgesComponent"]
    }, {
      path: 'admin',
      component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return [""];
    };

    var _c1 = function _c1() {
      return ["/admin"];
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angular-graphql';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 4,
      consts: [[1, "navbar"], ["routerLinkActive", "active", 3, "routerLink"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: #790000;\n  padding: 10px 20px;\n  border-bottom: 1px solid #d3d3d3;\n  display: flex;\n  justify-content: space-between;\n}\n\n.navbar[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #eea1a1;\n  font-weight: 800;\n  letter-spacing: 2px;\n  text-decoration: none;\n}\n\n.navbar[_ngcontent-%COMP%]    > a.active[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2FuZ3VsYXItZ3FsLWJhZGdlcy9hbmd1bGFyLWdxbC1iYWRnZXMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVBO0VBSUksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREpJO0VBQ0ksWUFBQTtBQ01SIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5MDAwMDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5uYXZiYXIgPiBhe1xuICAgICYuYWN0aXZle1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIGNvbG9yOiAjZWVhMWExO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iLCIubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5MDAwMDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubmF2YmFyID4gYSB7XG4gIGNvbG9yOiAjZWVhMWExO1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2YmFyID4gYS5hY3RpdmUge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _graphql_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./graphql.module */
    "./src/app/graphql.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin/admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony import */


    var _badges_badges_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./badges/badges.component */
    "./src/app/badges/badges.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_5__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], _badges_badges_component__WEBPACK_IMPORTED_MODULE_8__["BadgesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_5__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], _badges_badges_component__WEBPACK_IMPORTED_MODULE_8__["BadgesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_5__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/badges/badges.component.ts":
  /*!********************************************!*\
    !*** ./src/app/badges/badges.component.ts ***!
    \********************************************/

  /*! exports provided: BadgesComponent */

  /***/
  function srcAppBadgesBadgesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BadgesComponent", function () {
      return BadgesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _graphql_all_users_with_badges_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../graphql/all-users-with-badges.service */
    "./src/app/graphql/all-users-with-badges.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BadgesComponent_li_2_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function BadgesComponent_li_2_div_5_Template_div_wheel_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r4.onWheelp($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var badge_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", badge_r3.image_b64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", badge_r3.name);
      }
    }

    function BadgesComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("wheel", function BadgesComponent_li_2_Template_div_wheel_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.onWheel($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BadgesComponent_li_2_div_5_Template, 2, 2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.username, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", user_r1.badges);
      }
    }

    var BadgesComponent = /*#__PURE__*/function () {
      function BadgesComponent(allUsersWithBadges) {
        _classCallCheck(this, BadgesComponent);

        this.allUsersWithBadges = allUsersWithBadges;
      }

      _createClass(BadgesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.users = this.allUsersWithBadges.watch().valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            return result.data.users;
          }));
        }
      }, {
        key: "onWheel",
        value: function onWheel(event) {
          event.target.parentElement.scrollLeft += event.deltaY;
          event.preventDefault();
        }
      }, {
        key: "onWheelp",
        value: function onWheelp(event) {
          event.target.parentElement.parentElement.scrollLeft += event.deltaY;
          event.preventDefault();
        }
      }]);

      return BadgesComponent;
    }();

    BadgesComponent.ɵfac = function BadgesComponent_Factory(t) {
      return new (t || BadgesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_graphql_all_users_with_badges_service__WEBPACK_IMPORTED_MODULE_2__["AllUsersWithBadgesService"]));
    };

    BadgesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BadgesComponent,
      selectors: [["app-badges"]],
      decls: 4,
      vars: 3,
      consts: [["role", "main", 1, "content"], [1, "usersList"], ["class", "userRow", 4, "ngFor", "ngForOf"], [1, "userRow"], [1, "d-ib", "userName"], [1, "center-text"], [1, "d-ib", "badges", 3, "wheel"], ["class", "badgeImg", 3, "wheel", 4, "ngFor", "ngForOf"], [1, "badgeImg", 3, "wheel"], ["width", "75", 3, "src", "alt"]],
      template: function BadgesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BadgesComponent_li_2_Template, 6, 2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.users));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      styles: [".userList[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.d-ib[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  height: 100%;\n}\n\n.userRow[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #d3d3d3;\n  height: 75px;\n  width: 100vw;\n}\n\n.userName[_ngcontent-%COMP%] {\n  width: 150px;\n  border-right: 1px solid #d3d3d3;\n  height: 100%;\n  text-align: center;\n}\n\n.userName[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  height: 75px;\n  line-height: 75px;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\nimg[_ngcontent-%COMP%] {\n  margin: auto 10px;\n  line-height: 75px;\n}\n\n.badgeImg[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.badgeImg.two[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  -webkit-filter: saturate(0);\n          filter: saturate(0);\n}\n\n.badgeImg.three[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  -webkit-filter: hue-rotate(100);\n          filter: hue-rotate(100);\n}\n\n.badges[_ngcontent-%COMP%] {\n  width: calc(100vw - 151px);\n  white-space: nowrap;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n\n\n.badges[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n\n\n.badges[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2FuZ3VsYXItZ3FsLWJhZGdlcy9hbmd1bGFyLWdxbC1iYWRnZXMvc3JjL2FwcC9iYWRnZXMvYmFkZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYWRnZXMvYmFkZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFBO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0tKOztBREpJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ01SOztBREhBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ01KOztBREpBO0VBQ0kscUJBQUE7QUNPSjs7QURMQTtFQUNJLDJCQUFBO1VBQUEsbUJBQUE7QUNRSjs7QURMQTtFQUNJLCtCQUFBO1VBQUEsdUJBQUE7QUNRSjs7QURMQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDUUo7O0FETEEsZ0RBQUE7O0FBQ0E7RUFDSSxhQUFBO0FDUUo7O0FETEEsNENBQUE7O0FBQ0E7RUFDSSx3QkFBQTtFQUEwQixnQkFBQTtFQUMxQixxQkFBQTtFQUF1QixZQUFBO0FDVTNCIiwiZmlsZSI6InNyYy9hcHAvYmFkZ2VzL2JhZGdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyTGlzdCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4uZC1pYiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnVzZXJSb3cge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xuICAgIGhlaWdodDogNzVweDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG4udXNlck5hbWUge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZDNkM2QzO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgJiA+IHNwYW4ge1xuICAgICAgICBoZWlnaHQ6IDc1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA3NXB4O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbmltZyB7XG4gICAgbWFyZ2luOiBhdXRvIDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDc1cHg7XG59XG4uYmFkZ2VJbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5iYWRnZUltZy50d28gPiBpbWcge1xuICAgIGZpbHRlcjogc2F0dXJhdGUoMCk7XG59XG5cbi5iYWRnZUltZy50aHJlZSA+IGltZyB7XG4gICAgZmlsdGVyOiBodWUtcm90YXRlKDEwMCk7XG59XG5cbi5iYWRnZXMge1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTUxcHgpO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuLmJhZGdlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xuLmJhZGdlcyB7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xufVxuIiwiLnVzZXJMaXN0IHtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmQtaWIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnVzZXJSb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDNkMztcbiAgaGVpZ2h0OiA3NXB4O1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi51c2VyTmFtZSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2QzZDNkMztcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udXNlck5hbWUgPiBzcGFuIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBsaW5lLWhlaWdodDogNzVweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiA3NXB4O1xufVxuXG4uYmFkZ2VJbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5iYWRnZUltZy50d28gPiBpbWcge1xuICBmaWx0ZXI6IHNhdHVyYXRlKDApO1xufVxuXG4uYmFkZ2VJbWcudGhyZWUgPiBpbWcge1xuICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMTAwKTtcbn1cblxuLmJhZGdlcyB7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTUxcHgpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xuLmJhZGdlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgSUUsIEVkZ2UgYW5kIEZpcmVmb3ggKi9cbi5iYWRnZXMge1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIC8qIElFIGFuZCBFZGdlICovXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgLyogRmlyZWZveCAqL1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BadgesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-badges',
          templateUrl: './badges.component.html',
          styleUrls: ['./badges.component.scss']
        }]
      }], function () {
        return [{
          type: _graphql_all_users_with_badges_service__WEBPACK_IMPORTED_MODULE_2__["AllUsersWithBadgesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/graphql.module.ts":
  /*!***********************************!*\
    !*** ./src/app/graphql.module.ts ***!
    \***********************************/

  /*! exports provided: createApollo, GraphQLModule */

  /***/
  function srcAppGraphqlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createApollo", function () {
      return createApollo;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
      return GraphQLModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @apollo/client/core */
    "./node_modules/@apollo/client/core/index.js");
    /* harmony import */


    var apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! apollo-angular/http */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApolloLinkHttp.js");

    var uri = 'https://badge-db.herokuapp.com/v1/graphql'; // <-- add the URL of the GraphQL server here

    function createApollo(httpLink) {
      return {
        link: httpLink.create({
          uri: uri
        }),
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]()
      };
    }

    var GraphQLModule = function GraphQLModule() {
      _classCallCheck(this, GraphQLModule);
    };

    GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GraphQLModule
    });
    GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GraphQLModule_Factory(t) {
        return new (t || GraphQLModule)();
      },
      providers: [{
        provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
        useFactory: createApollo,
        deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]]
      }]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphQLModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          providers: [{
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_1__["APOLLO_OPTIONS"],
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]]
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/graphql/admin-gql.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/graphql/admin-gql.service.ts ***!
    \**********************************************/

  /*! exports provided: AddBadgeGQL */

  /***/
  function srcAppGraphqlAdminGqlServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddBadgeGQL", function () {
      return AddBadgeGQL;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);

    var AddBadgeGQL = /*#__PURE__*/function (_apollo_angular__WEBP) {
      _inherits(AddBadgeGQL, _apollo_angular__WEBP);

      var _super = _createSuper(AddBadgeGQL);

      function AddBadgeGQL() {
        var _this;

        _classCallCheck(this, AddBadgeGQL);

        _this = _super.apply(this, arguments);
        _this.document = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a(_templateObject());
        return _this;
      }

      return AddBadgeGQL;
    }(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Mutation"]);

    AddBadgeGQL.ɵfac = function AddBadgeGQL_Factory(t) {
      return ɵAddBadgeGQL_BaseFactory(t || AddBadgeGQL);
    };

    AddBadgeGQL.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AddBadgeGQL,
      factory: AddBadgeGQL.ɵfac,
      providedIn: 'root'
    });

    var ɵAddBadgeGQL_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AddBadgeGQL);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddBadgeGQL, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/graphql/all-users-with-badges.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/graphql/all-users-with-badges.service.ts ***!
    \**********************************************************/

  /*! exports provided: AllUsersWithBadgesService, AllUsers */

  /***/
  function srcAppGraphqlAllUsersWithBadgesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllUsersWithBadgesService", function () {
      return AllUsersWithBadgesService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllUsers", function () {
      return AllUsers;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! apollo-angular */
    "./node_modules/apollo-angular/__ivy_ngcc__/fesm2015/ngApollo.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! graphql-tag */
    "./node_modules/graphql-tag/src/index.js");
    /* harmony import */


    var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);

    ;

    var AllUsersWithBadgesService = /*#__PURE__*/function (_apollo_angular__WEBP2) {
      _inherits(AllUsersWithBadgesService, _apollo_angular__WEBP2);

      var _super2 = _createSuper(AllUsersWithBadgesService);

      function AllUsersWithBadgesService() {
        var _this2;

        _classCallCheck(this, AllUsersWithBadgesService);

        _this2 = _super2.apply(this, arguments);
        _this2.document = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a(_templateObject2());
        return _this2;
      }

      return AllUsersWithBadgesService;
    }(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Query"]);

    AllUsersWithBadgesService.ɵfac = function AllUsersWithBadgesService_Factory(t) {
      return ɵAllUsersWithBadgesService_BaseFactory(t || AllUsersWithBadgesService);
    };

    AllUsersWithBadgesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AllUsersWithBadgesService,
      factory: AllUsersWithBadgesService.ɵfac,
      providedIn: 'root'
    });

    var ɵAllUsersWithBadgesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AllUsersWithBadgesService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllUsersWithBadgesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();

    var AllUsers = /*#__PURE__*/function (_apollo_angular__WEBP3) {
      _inherits(AllUsers, _apollo_angular__WEBP3);

      var _super3 = _createSuper(AllUsers);

      function AllUsers() {
        var _this3;

        _classCallCheck(this, AllUsers);

        _this3 = _super3.apply(this, arguments);
        _this3.document = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a(_templateObject3());
        return _this3;
      }

      return AllUsers;
    }(apollo_angular__WEBPACK_IMPORTED_MODULE_1__["Query"]);

    AllUsers.ɵfac = function AllUsers_Factory(t) {
      return ɵAllUsers_BaseFactory(t || AllUsers);
    };

    AllUsers.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AllUsers,
      factory: AllUsers.ɵfac,
      providedIn: 'root'
    });

    var ɵAllUsers_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](AllUsers);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllUsers, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/angular-gql-badges/angular-gql-badges/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map