webpackJsonp([8],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomQuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preparar_simulado_preparar_simulado__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomQuizPage = /** @class */ (function () {
    function CustomQuizPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CustomQuizPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomQuizPage');
    };
    CustomQuizPage.prototype.goHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CustomQuizPage.prototype.start = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__preparar_simulado_preparar_simulado__["a" /* PrepararSimuladoPage */]);
    };
    CustomQuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-custom-quiz',template:/*ion-inline-start:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/custom-quiz/custom-quiz.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="goHomePage()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title text-center>Customize o seu quiz</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="menu-content" padding>\n  <ion-row id="number-header">\n    <ion-col>\n      <ion-icon ios="ios-remove" md="md-remove"></ion-icon>\n    </ion-col>\n    <ion-col id="box-number-questions">\n      <span id="number-questions">20</span>\n      <span id="text">questões</span>\n    </ion-col>\n    <ion-col>\n      <ion-icon ios="ios-add" md="md-add"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <ion-list>\n    <ion-item class="custom-check">\n      <ion-label class="customLabel">Antropologia</ion-label>\n      <ion-checkbox [(ngModel)]="pepperoni"></ion-checkbox>\n    </ion-item>\n    <ion-item class="custom-check">\n      <ion-label class="customLabel">Direito Civil</ion-label>\n      <ion-checkbox [(ngModel)]="sausage"></ion-checkbox>\n    </ion-item>\n    <ion-item class="custom-check">\n      <ion-label class="customLabel">Fundamentos do Direito Penal</ion-label>\n      <ion-checkbox [(ngModel)]="mushrooms"></ion-checkbox>\n    </ion-item>\n    <ion-item class="custom-check">\n      <ion-label class="customLabel">Teoria da Constituição</ion-label>\n      <ion-checkbox [(ngModel)]="mushroomsasdsad"></ion-checkbox>\n    </ion-item>\n    <ion-item class="custom-check">\n      <ion-label class="customLabel">Ciência Politica</ion-label>\n      <ion-checkbox [(ngModel)]="mushroomsasdad"></ion-checkbox>\n    </ion-item>\n    <ion-item class="custom-check">\n      <ion-label class="customLabel">Sociologia do Direito</ion-label>\n      <ion-checkbox [(ngModel)]="mushroomsasd"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>\n    <ion-col class="signup-col">\n      <button ion-button class="submit-btn" full (click)="start()">Iniciar</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/custom-quiz/custom-quiz.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CustomQuizPage);
    return CustomQuizPage;
}());

//# sourceMappingURL=custom-quiz.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__["a" /* User */]();
    }
    SignupPage.prototype.createAccount = function () {
        var _this = this;
        if (this.form.form.valid) {
            var toast_1 = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.createUser(this.user)
                .then(function (user) {
                user.sendEmailVerification();
                toast_1.setMessage('Usuário criado com sucesso.');
                toast_1.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                if (error.code == 'auth/email-already-in-use') {
                    toast_1.setMessage('Thrown if there already exists an account with the given email address.');
                }
                if (error.code == 'auth/invalid-email') {
                    toast_1.setMessage('Thrown if the email address is not valid.');
                }
                if (error.code == 'auth/operation-not-allowed') {
                    toast_1.setMessage('Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.');
                }
                if (error.code == 'auth/weak-password') {
                    toast_1.setMessage('Thrown if the password is not strong enough.');
                }
                toast_1.present();
            });
        }
    };
    SignupPage.prototype.signIn = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__signin_signin__["a" /* SigninPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], SignupPage.prototype, "form", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/signup/signup.html"*/'<ion-content class="cadastre-content" padding>\n  <ion-row class="logo-row">\n    <ion-col>\n      <img src="assets/imgs/mulher.png" />\n    </ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form #form="ngForm" novalidate>\n      <ion-row>\n        <ion-col>\n          <ion-item class="input-custom">\n            <ion-label floating>E-mail</ion-label>\n            <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n          </ion-item>\n          <ion-item class="input-custom">\n            <ion-label floating>Senha</ion-label>\n            <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n          </ion-item>\n          <ion-item class="input-custom">\n            <ion-label floating>Confirme a senha</ion-label>\n            <ion-input type="password"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="submit-btn" full [disabled]="!form.form.valid" (click)="createAccount()">\n            Cadastrar\n          </button>\n          <button ion-button class="register-btn" block clear (click)="signIn()">\n            Você já tem uma conta? Entrar\n          </button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResetpasswordPage = /** @class */ (function () {
    function ResetpasswordPage(navCtrl, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.userEmail = '';
    }
    ResetpasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (this.form.form.valid) {
            var toast_1 = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.resetPassword(this.userEmail)
                .then(function () {
                toast_1.setMessage('Solicitação foi enviada para o seu e-mail.');
                toast_1.present();
                _this.navCtrl.pop();
            })
                .catch(function (error) {
                if (error.code == 'auth/invalid-email') {
                    toast_1.setMessage('Thrown if the email address is not valid.');
                }
                else if (error.code == 'auth/user-not-found') {
                    toast_1.setMessage('Thrown if there is no user corresponding to the email address.');
                }
                toast_1.present();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], ResetpasswordPage.prototype, "form", void 0);
    ResetpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpassword',template:/*ion-inline-start:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/resetpassword/resetpassword.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Resetar minha senha\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form #form="ngForm" novalidate>\n    <ion-list>\n\n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" name="email" [(ngModel)]="userEmail" #email="ngModel" required></ion-input>\n      </ion-item>\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n        O campo é obrigatório\n      </ion-item>\n\n    </ion-list>\n\n    <button ion-button block color="primary" [disabled]="!form.form.valid" (click)="resetPassword()">\n      Resetar minha senha\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/resetpassword/resetpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the HistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistoricoPage = /** @class */ (function () {
    function HistoricoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoricoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoricoPage');
    };
    HistoricoPage.prototype.close = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    HistoricoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historico',template:/*ion-inline-start:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/historico/historico.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="close()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n      <ion-title text-center>\n        Meu histórico\n      </ion-title>\n  </ion-navbar>\n  </ion-header>\n\n<ion-content padding class="tutorial-page">\n  <ion-card>\n\n    <ion-card-content>\n      <ion-slides pager>\n        <ion-slide>\n          <h2>Simulado OAB 2015</h2>\n          <img src="assets/imgs/star.png" class="slide-image" />\n          <p>Questões respondidas</p>\n          <p>\n            <b>32</b>\n          </p>\n          <p>Concluido em</p>\n          <p>3 de abril</p>\n          <p>Pontos:\n            <b>80/10</b>\n          </p>\n        </ion-slide>\n\n        <ion-slide>\n          <h2>Simulado OAB 2016</h2>\n          <img src="assets/imgs/star.png" class="slide-image" />\n          <p>Questões respondidas</p>\n          <p>\n            <b>32</b>\n          </p>\n          <p>Concluido em</p>\n          <p>3 de abril</p>\n          <p>Pontos:\n            <b>80/10</b>\n          </p>\n        </ion-slide>\n\n        <ion-slide>\n          <h2>Simulado OAB 2017</h2>\n          <img src="assets/imgs/star.png" class="slide-image" />\n          <p>Questões respondidas</p>\n          <p>\n            <b>32</b>\n          </p>\n          <p>Concluido em</p>\n          <p>3 de abril</p>\n          <p>Pontos:\n            <b>80/10</b>\n          </p>\n        </ion-slide>\n      </ion-slides>\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/historico/historico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HistoricoPage);
    return HistoricoPage;
}());

//# sourceMappingURL=historico.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimuladoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SimuladoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SimuladoPage = /** @class */ (function () {
    function SimuladoPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    SimuladoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SimuladoPage');
    };
    SimuladoPage.prototype.close = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirme sua ação',
            message: 'Deseja realmente sair do simulado?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sair',
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    SimuladoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-simulado',template:/*ion-inline-start:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/simulado/simulado.html"*/'\n<ion-header>\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="close()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n      <ion-title>Simulado</ion-title>\n  </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding class="question">\n  <ion-row>\n    <ion-col text-center>\n      <h2>Simulado OAB 2015</h2>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <p> 01. Fábio, advogado com mais de dez anos de efetivaatividade, obtém a indicação e passa a ser Conselheirode Tribunal\n        de Contas do Estado do Rio de Janeiro.Diante disso, à luz das normas estatutárias ocorrerá: </p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n      <ion-list radio-group no-lines [(ngModel)]="userAnswer">\n        <ion-item>\n          <ion-label class="customLabel">o cancelamento da inscrição como advogado.</ion-label>\n          <ion-radio checked="true" value="A"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="customLabel">a suspensão até que cesse a incompatibilidade.</ion-label>\n          <ion-radio value="B"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label class="customLabel">o licenciamento do profissional.</ion-label>\n          <ion-radio value="C"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n            <ion-label class="customLabel">a passagem para a reserva do quadro de advogados.</ion-label>\n            <ion-radio value="D"></ion-radio>\n          </ion-item>\n      </ion-list>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/simulado/simulado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SimuladoPage);
    return SimuladoPage;
}());

//# sourceMappingURL=simulado.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialInicialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialInicialPage = /** @class */ (function () {
    function TutorialInicialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TutorialInicialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialInicialPage');
    };
    TutorialInicialPage.prototype.skipTutorial = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    TutorialInicialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial-inicial',template:/*ion-inline-start:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/tutorial-inicial/tutorial-inicial.html"*/'<ion-content padding class="tutorial-page">\n  <ion-slides pager class="slide-content">\n    <ion-slide>\n      <h2>Jogue Quiz</h2>\n      <img src="assets/imgs/homen1.png" class="slide-image" />\n      <p>Como o quiz você pode treinar para os simulados e conseguir notas ainda mais altas!</p>\n    </ion-slide>\n\n    <ion-slide>\n        <h2>Faça Simulados</h2>\n        <img src="assets/imgs/mulher1.png" class="slide-image" />\n        <p>Com os simulados você pode ver como está o seu conhecimento, experimentar uma prova semelhante a da OAB.</p>\n    </ion-slide>\n\n    <ion-slide>\n        <h2>Faça Progresso</h2>\n        <img src="assets/imgs/homen2.png" class="slide-image" />\n        <p>Você pode ver como nós te ajudamos! O nosso histórico permite ver o resultado de cada simulado que você realizar.</p>\n    </ion-slide>\n  </ion-slides>\n  <button ion-button class="skip-btn" full (click)="skipTutorial()">Ignorar</button>\n</ion-content>'/*ion-inline-end:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/tutorial-inicial/tutorial-inicial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TutorialInicialPage);
    return TutorialInicialPage;
}());

//# sourceMappingURL=tutorial-inicial.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/custom-quiz/custom-quiz.module": [
		306,
		7
	],
	"../pages/historico/historico.module": [
		307,
		6
	],
	"../pages/preparar-simulado/preparar-simulado.module": [
		308,
		5
	],
	"../pages/resetpassword/resetpassword.module": [
		309,
		4
	],
	"../pages/signin/signin.module": [
		310,
		3
	],
	"../pages/signup/signup.module": [
		311,
		2
	],
	"../pages/simulado/simulado.module": [
		312,
		1
	],
	"../pages/tutorial-inicial/tutorial-inicial.module": [
		313,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(233);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_resetpassword_resetpassword__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_custom_quiz_custom_quiz__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_preparar_simulado_preparar_simulado__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_inicial_tutorial_inicial__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_historico_historico__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_simulado_simulado__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var firebaseConfig = {
    apiKey: "AIzaSyCrc_fwSyiIVLf3v9YPvrEzRUENqUDPexs",
    authDomain: "app-advogados-39f27.firebaseapp.com",
    databaseURL: "https://app-advogados-39f27.firebaseio.com",
    projectId: "app-advogados-39f27",
    storageBucket: "app-advogados-39f27.appspot.com",
    messagingSenderId: "103835262760"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_custom_quiz_custom_quiz__["a" /* CustomQuizPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_preparar_simulado_preparar_simulado__["a" /* PrepararSimuladoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_inicial_tutorial_inicial__["a" /* TutorialInicialPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_historico_historico__["a" /* HistoricoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_simulado_simulado__["a" /* SimuladoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/custom-quiz/custom-quiz.module#CustomQuizPageModule', name: 'CustomQuizPage', segment: 'custom-quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historico/historico.module#HistoricoPageModule', name: 'HistoricoPage', segment: 'historico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preparar-simulado/preparar-simulado.module#PrepararSimuladoPageModule', name: 'PrepararSimuladoPage', segment: 'preparar-simulado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpassword/resetpassword.module#ResetpasswordPageModule', name: 'ResetpasswordPage', segment: 'resetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#LoginPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/simulado/simulado.module#SimuladoPageModule', name: 'SimuladoPage', segment: 'simulado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial-inicial/tutorial-inicial.module#TutorialInicialPageModule', name: 'TutorialInicialPage', segment: 'tutorial-inicial', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_custom_quiz_custom_quiz__["a" /* CustomQuizPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_preparar_simulado_preparar_simulado__["a" /* PrepararSimuladoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tutorial_inicial_tutorial_inicial__["a" /* TutorialInicialPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_historico_historico__["a" /* HistoricoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_simulado_simulado__["a" /* SimuladoPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth_service__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_inicial_tutorial_inicial__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                authObserver.unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_inicial_tutorial_inicial__["a" /* TutorialInicialPage */];
                authObserver.unsubscribe();
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/italofialho/Projetos/Faculdade/app-advogados/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/italofialho/Projetos/Faculdade/app-advogados/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_quiz_custom_quiz__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__historico_historico__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__preparar_simulado_preparar_simulado__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, authService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
    }
    HomePage.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut()
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    HomePage.prototype.customQuiz = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__custom_quiz_custom_quiz__["a" /* CustomQuizPage */]);
    };
    HomePage.prototype.goHistoricoPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__historico_historico__["a" /* HistoricoPage */]);
    };
    HomePage.prototype.goPrepararSimulado = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__preparar_simulado_preparar_simulado__["a" /* PrepararSimuladoPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      Menu\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="menu-content" padding>\n    <ion-row>\n      <ion-col class="signup-col">\n        <button ion-button id="btn-simulado" full (click)="goPrepararSimulado()">Simulado</button>\n        <button ion-button id="btn-quizz" full (click)="customQuiz()">Quiz</button>\n        <button ion-button id="btn-historico" full (click)="goHistoricoPage()">Histórico</button>\n        <button ion-button id="btn-sair" full (click)="signOut()">\n          Sair\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-content>\n'/*ion-inline-end:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
        this.user = angularFireAuth.authState;
    }
    AuthService.prototype.createUser = function (user) {
        return this.angularFireAuth
            .auth
            .createUserWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.signIn = function (user) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    };
    AuthService.prototype.signOut = function () {
        return this.angularFireAuth.auth.signOut();
    };
    AuthService.prototype.resetPassword = function (email) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resetpassword_resetpassword__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__["a" /* User */]();
    }
    SigninPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.resetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__resetpassword_resetpassword__["a" /* ResetpasswordPage */]);
    };
    SigninPage.prototype.loginFacebook = function () {
        var toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
        toast.setMessage('Login com o Facebook ainda não implementado.');
        toast.present();
    };
    SigninPage.prototype.signIn = function () {
        var _this = this;
        if (this.form.form.valid) {
            this.authService.signIn(this.user)
                .then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                var toast = _this.toastCtrl.create({ duration: 3000, position: 'bottom' });
                if (error.code == 'auth/invalid-email') {
                    toast.setMessage('Thrown if the email address is not valid.');
                }
                if (error.code == 'auth/user-disabled') {
                    toast.setMessage('Thrown if the user corresponding to the given email has been disabled.');
                }
                if (error.code == 'auth/user-not-found') {
                    toast.setMessage('Thrown if there is no user corresponding to the given email.');
                }
                if (error.code == 'auth/wrong-password') {
                    toast.setMessage('Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.');
                }
                toast.present();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */])
    ], SigninPage.prototype, "form", void 0);
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/signin/signin.html"*/'<ion-content class="login-content" padding>\n  <ion-row class="logo-row">\n    <ion-col>\n      <img src="assets/imgs/logo.png" />\n    </ion-col>\n  </ion-row>\n  <div class="login-box">\n    <form #form="ngForm" novalidate>\n      <ion-row>\n        <ion-col>\n          <ion-item class="input-custom">\n            <ion-label floating>E-mail</ion-label>\n            <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n          </ion-item>\n          <ion-item class="input-custom">\n            <ion-label floating>Senha</ion-label>\n            <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button class="social-button-facebook" full>\n            <ion-icon ios="logo-facebook" md="logo-facebook" (click)="loginFacebook()"></ion-icon> Continuar com o Facebook</button>\n          <button ion-button class="submit-btn" full (click)="signIn()">Entrar</button>\n          <button ion-button class="register-btn" block clear (click)="createAccount()">\n            Não tem uma conta ainda? Registre-se\n          </button>\n          <button ion-button class="register-btn" block clear (click)="resetPassword()">\n            Perdeu sua senha? clique aqui!\n          </button>\n\n        </ion-col>\n      </ion-row>\n\n    </form>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrepararSimuladoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simulado_simulado__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrepararSimuladoPage = /** @class */ (function () {
    function PrepararSimuladoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ngOnInit();
    }
    PrepararSimuladoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrepararSimuladoPage');
    };
    PrepararSimuladoPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__simulado_simulado__["a" /* SimuladoPage */]);
        }, 2000);
    };
    PrepararSimuladoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preparar-simulado',template:/*ion-inline-start:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/preparar-simulado/preparar-simulado.html"*/'<ion-content class="menu-content" padding>\n    <ion-row text-center>\n      <ion-col class="preparar-simulado">\n          <img class="grayscale" src="assets/imgs/mulher1.png"/>\n          <h2>Preparando simulado</h2>\n          <p>Aguarde enquanto estamos preparando o simulado...</p>\n          <div class="linha"></div>\n      </ion-col>\n    </ion-row>\n  </ion-content>\n'/*ion-inline-end:"/home/italofialho/Projetos/Faculdade/app-advogados/src/pages/preparar-simulado/preparar-simulado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PrepararSimuladoPage);
    return PrepararSimuladoPage;
}());

//# sourceMappingURL=preparar-simulado.js.map

/***/ })

},[211]);
//# sourceMappingURL=main.js.map