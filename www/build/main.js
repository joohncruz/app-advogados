webpackJsonp([9],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomQuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__preparar_simulado_preparar_simulado__ = __webpack_require__(62);
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
        this.NumeroQuestoes = 0;
        this.disciplinasSelecionadas = [];
        this.NumeroQuestoes = 20;
        this.disciplinas = [
            "Ética",
            "Filosofia",
            "Constitucional",
            "Direito Humanos",
            "Internacional",
            "Tributário",
            "Administrativo",
            "Ambiental",
            "Civil",
            "ECA",
            "CDC",
            "Empresarial",
            "Processo Civil",
            "Penal",
            "Processo Penal",
            "Direito do Trabalho",
            "Processo do Trabalho"
        ];
        this.disciplina = this.disciplinas[0];
    }
    CustomQuizPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CustomQuizPage", __WEBPACK_IMPORTED_MODULE_3_lodash__["get"](this, "NumeroQuestoes"));
    };
    CustomQuizPage.prototype.goHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CustomQuizPage.prototype.start = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__preparar_simulado_preparar_simulado__["a" /* PrepararSimuladoPage */], {
            'isQuiz': true,
            'disciplinasSelecionadas': this.disciplinasSelecionadas,
            'questionsCount': this.NumeroQuestoes
        });
    };
    CustomQuizPage.prototype.adicionarQuestoes = function () {
        this.NumeroQuestoes = this.NumeroQuestoes + 1;
    };
    CustomQuizPage.prototype.removerQuestoes = function () {
        if (this.NumeroQuestoes > 0) {
            this.NumeroQuestoes = this.NumeroQuestoes - 1;
        }
    };
    CustomQuizPage.prototype.normalizeString = function (str) {
        return str
            .replace(/ /g, "_")
            .replace("?", "")
            .normalize("NFD") // Formato de Normalização Canônico de Decomposição.
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    };
    CustomQuizPage.prototype.onChange = function (disciplina, checked) {
        var normalizedString = this.normalizeString(disciplina);
        if (checked) {
            this.disciplinasSelecionadas.push({
                key: disciplina,
                normalizeRef: normalizedString,
                value: checked
            });
        }
        else {
            this.disciplinasSelecionadas = __WEBPACK_IMPORTED_MODULE_3_lodash__["remove"](this.disciplinasSelecionadas, function (arr) {
                var _arr = arr;
                return _arr.normalizeRef == normalizedString;
            });
        }
    };
    CustomQuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-custom-quiz",template:/*ion-inline-start:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\custom-quiz\custom-quiz.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="goHomePage()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title text-center>Customize o seu quiz</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="menu-content" padding>\n\n  <ion-row id="number-header">\n\n    <ion-col>\n\n      <ion-icon ios="ios-remove" md="md-remove" (click)="removerQuestoes()"></ion-icon>\n\n    </ion-col>\n\n    <ion-col id="box-number-questions">\n\n      <span id="number-questions" name="NumeroQuestoes">{{NumeroQuestoes}}</span>\n\n      <span id="text">questões</span>\n\n    </ion-col>\n\n    <ion-col>\n\n      <ion-icon ios="ios-add" md="md-add" (click)="adicionarQuestoes()"></ion-icon>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item class="custom-check" *ngFor="let item of disciplinas">\n\n      <ion-label class="customLabel">{{item}}</ion-label>\n\n      <ion-checkbox (ionChange)="onChange(item, $event.checked)" value="item"></ion-checkbox>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-row>\n\n    <ion-col class="signup-col">\n\n      <button ion-button class="submit-btn" full (click)="start()">Iniciar</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\custom-quiz\custom-quiz.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CustomQuizPage);
    return CustomQuizPage;
}());

//# sourceMappingURL=custom-quiz.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_user__ = __webpack_require__(57);
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
    function SignupPage(navCtrl, loadingCtrl, toastCtrl, authService, userProvider) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.userProvider = userProvider;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__["a" /* User */]();
    }
    SignupPage.prototype.createAccount = function () {
        var _this = this;
        if (this.form.form.valid) {
            var loading_1 = this.loadingCtrl.create({
                showBackdrop: true,
                content: "Criando conta...",
                duration: 5000
            });
            loading_1.present();
            var toast_1 = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.createUser(this.user)
                .then(function (user) {
                user.sendEmailVerification();
                user.updateProfile({ displayName: _this.user.displayName });
                _this.userProvider.addUser(user.uid, user.email, _this.user.displayName);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]).then(function () {
                    toast_1.setMessage("Ol\u00E1 " + _this.user.displayName);
                    loading_1.dismiss();
                    toast_1.present();
                });
            })
                .catch(function (error) {
                loading_1.dismiss();
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
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\signup\signup.html"*/'<ion-content class="cadastre-content" padding>\n\n  <ion-row class="logo-row">\n\n    <ion-col>\n\n      <img src="assets/imgs/mulher.png" />\n\n    </ion-col>\n\n  </ion-row>\n\n  <div class="login-box">\n\n    <form #form="ngForm" novalidate>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item class="input-custom">\n\n            <ion-label floating>Nome</ion-label>\n\n            <ion-input type="text" name="displayName" [(ngModel)]="user.displayName" #displayName="ngModel" required></ion-input>\n\n          </ion-item>\n\n          <ion-item class="input-custom">\n\n            <ion-label floating>E-mail</ion-label>\n\n            <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n\n          </ion-item>\n\n          <ion-item class="input-custom">\n\n            <ion-label floating>Senha</ion-label>\n\n            <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n\n          </ion-item>\n\n          <ion-item class="input-custom">\n\n            <ion-label floating>Confirme a senha</ion-label>\n\n            <ion-input type="password"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full [disabled]="!form.form.valid" (click)="createAccount()">\n\n            Cadastrar\n\n          </button>\n\n          <button ion-button class="register-btn" block clear (click)="signIn()">\n\n            Você já tem uma conta? Entrar\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__providers_user_user__["a" /* UserProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(46);
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
            selector: 'page-resetpassword',template:/*ion-inline-start:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\resetpassword\resetpassword.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Resetar minha senha\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form #form="ngForm" novalidate>\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>E-mail</ion-label>\n\n        <ion-input type="text" name="email" [(ngModel)]="userEmail" #email="ngModel" required></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="email.errors && (email.dirty || email.touched)" class="text-danger">\n\n        O campo é obrigatório\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <button ion-button block color="primary" [disabled]="!form.form.valid" (click)="resetPassword()">\n\n      Resetar minha senha\n\n    </button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\resetpassword\resetpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */]])
    ], ResetpasswordPage);
    return ResetpasswordPage;
}());

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_simulado_simulado__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HistoricoPage = /** @class */ (function () {
    function HistoricoPage(navCtrl, navParams, simuladoProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.simuladoProvider = simuladoProvider;
        this.historicos = [];
        this.user = {
            nome: 'teste',
            exames: [
                {
                    ano: 2018,
                    questions: {
                        constitucional: {
                            1: {
                                pergunta: "eu amo nicolas constitucional?",
                                resposta_correta: "a",
                                resposta_informada: "b",
                                respostas: {
                                    a: {
                                        descricao: "sim constitucional a",
                                        justificativa: "por que sim"
                                    },
                                    b: {
                                        descricao: "não constitucional b",
                                        justificativa: "por que não"
                                    },
                                    c: {
                                        descricao: "não constitucional c",
                                        justificativa: "por que não"
                                    },
                                    d: {
                                        descricao: "não constitucional d",
                                        justificativa: "por que não"
                                    }
                                }
                            },
                            2: {
                                pergunta: "eu amo nicolas constitucional dois?",
                                resposta_correta: "a",
                                resposta_informada: "a",
                                respostas: {
                                    a: {
                                        descricao: "sim constitucional a",
                                        justificativa: "por que sim"
                                    },
                                    b: {
                                        descricao: "não constitucional b",
                                        justificativa: "por que não"
                                    },
                                    c: {
                                        descricao: "não constitucional c",
                                        justificativa: "por que não"
                                    },
                                    d: {
                                        descricao: "não constitucional d",
                                        justificativa: "por que não"
                                    }
                                }
                            }
                        },
                        etica: {
                            1: {
                                pergunta: "eu amo nicolas etica?",
                                resposta_correta: "a",
                                resposta_informada: "b",
                                respostas: {
                                    a: {
                                        descricao: "sim etica a",
                                        justificativa: "por que sim"
                                    },
                                    b: {
                                        descricao: "não etica b",
                                        justificativa: "por que não"
                                    },
                                    c: {
                                        descricao: "não etica c",
                                        justificativa: "por que não"
                                    },
                                    d: {
                                        descricao: "não etica d",
                                        justificativa: "por que não"
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    ano: 2016,
                    questions: {
                        constitucional: {
                            1: {
                                pergunta: "eu amo nicolas constitucional?",
                                resposta_correta: "a",
                                resposta_informada: "b",
                                respostas: {
                                    a: {
                                        descricao: "sim constitucional a",
                                        justificativa: "por que sim"
                                    },
                                    b: {
                                        descricao: "não constitucional b",
                                        justificativa: "por que não"
                                    },
                                    c: {
                                        descricao: "não constitucional c",
                                        justificativa: "por que não"
                                    },
                                    d: {
                                        descricao: "não constitucional d",
                                        justificativa: "por que não"
                                    }
                                }
                            },
                            2: {
                                pergunta: "eu amo nicolas constitucional dois?",
                                resposta_correta: "a",
                                resposta_informada: "a",
                                respostas: {
                                    a: {
                                        descricao: "sim constitucional a",
                                        justificativa: "por que sim"
                                    },
                                    b: {
                                        descricao: "não constitucional b",
                                        justificativa: "por que não"
                                    },
                                    c: {
                                        descricao: "não constitucional c",
                                        justificativa: "por que não"
                                    },
                                    d: {
                                        descricao: "não constitucional d",
                                        justificativa: "por que não"
                                    }
                                }
                            }
                        },
                        etica: {
                            1: {
                                pergunta: "eu amo nicolas etica?",
                                resposta_correta: "a",
                                resposta_informada: "a",
                                respostas: {
                                    a: {
                                        descricao: "sim etica a",
                                        justificativa: "por que sim"
                                    },
                                    b: {
                                        descricao: "não etica b",
                                        justificativa: "por que não"
                                    },
                                    c: {
                                        descricao: "não etica c",
                                        justificativa: "por que não"
                                    },
                                    d: {
                                        descricao: "não etica d",
                                        justificativa: "por que não"
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    ano: 2017,
                    questions: {
                        constitucional: {
                            1: {
                                pergunta: "eu amo nicolas constitucional?",
                                resposta_correta: "a",
                                resposta_informada: "a",
                                respostas: {
                                    a: {
                                        descricao: "sim constitucional a",
                                        justificativa: "por que sim"
                                    },
                                    b: {
                                        descricao: "não constitucional b",
                                        justificativa: "por que não"
                                    },
                                    c: {
                                        descricao: "não constitucional c",
                                        justificativa: "por que não"
                                    },
                                    d: {
                                        descricao: "não constitucional d",
                                        justificativa: "por que não"
                                    }
                                }
                            },
                            2: {
                                pergunta: "eu amo nicolas constitucional dois?",
                                resposta_correta: "a",
                                resposta_informada: "a",
                                respostas: {
                                    a: {
                                        descricao: "sim constitucional a",
                                        justificativa: "por que sim"
                                    },
                                    b: {
                                        descricao: "não constitucional b",
                                        justificativa: "por que não"
                                    },
                                    c: {
                                        descricao: "não constitucional c",
                                        justificativa: "por que não"
                                    },
                                    d: {
                                        descricao: "não constitucional d",
                                        justificativa: "por que não"
                                    }
                                }
                            }
                        },
                        etica: {
                            1: {
                                pergunta: "eu amo nicolas etica?",
                                resposta_correta: "a",
                                resposta_informada: "a",
                                respostas: {
                                    a: {
                                        descricao: "sim etica a",
                                        justificativa: "por que sim"
                                    },
                                    b: {
                                        descricao: "não etica b",
                                        justificativa: "por que não"
                                    },
                                    c: {
                                        descricao: "não etica c",
                                        justificativa: "por que não"
                                    },
                                    d: {
                                        descricao: "não etica d",
                                        justificativa: "por que não"
                                    }
                                }
                            }
                        }
                    }
                },
            ]
        };
        this.historicos = this.user.exames.map(function (exam) { return ({ exam: exam, resultado: _this.simuladoProvider.getResult(exam) }); });
        console.log(this.historicos);
    }
    HistoricoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoricoPage');
    };
    HistoricoPage.prototype.close = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    HistoricoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historico',template:/*ion-inline-start:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\historico\historico.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-buttons left>\n\n          <button ion-button icon-only (click)="close()">\n\n              <ion-icon name="arrow-back"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n      <ion-title text-center>\n\n        Meu histórico\n\n      </ion-title>\n\n  </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding class="tutorial-page">\n\n  <ion-card>\n\n\n\n    <ion-card-content>\n\n      <ion-slides pager>\n\n\n\n        <ion-slide *ngFor="let historico of historicos">\n\n          <h2>Simulado OAB {{historico.exam.ano}}</h2>\n\n          <img src="assets/imgs/star.png" class="slide-image" />\n\n          <p>Questões respondidas</p>\n\n          <p>\n\n            <b>{{historico.resultado.respondidas}}</b>\n\n          </p>\n\n          <p>Concluido em</p>\n\n          <p>3 de abril</p>\n\n          <p>Pontos:\n\n            <b>{{historico.resultado.corretas}}/{{historico.resultado.total}} </b>\n\n            <b>{{historico.resultado.nota}} %</b>\n\n          </p>\n\n        </ion-slide>\n\n   \n\n      </ion-slides>\n\n    </ion-card-content>\n\n\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\historico\historico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_simulado_simulado__["a" /* SimuladoProvider */]])
    ], HistoricoPage);
    return HistoricoPage;
}());

//# sourceMappingURL=historico.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimuladoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_simulado_simulado__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simulado_completo_simulado_completo__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SimuladoPage = /** @class */ (function () {
    function SimuladoPage(navCtrl, navParams, alertCtrl, simuladoProvider, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.simuladoProvider = simuladoProvider;
        this.userProvider = userProvider;
        this.simulado = this.navParams.get('simulado');
        this.finished = false;
        this.books = Object.keys(this.simulado.questions);
        var questions = this.simulado.questions[this.books[0]];
        this.currentBook = {
            bookId: this.books[0],
            questions: questions,
            currentQuestionId: 0,
            currentQuestion: questions[Object.keys(questions)[0]],
        };
        this.userSimulate = this.simulado;
    }
    SimuladoPage.prototype.confirmQuestion = function (question, userOption) {
        var _this = this;
        var respostaCorreta = question.resposta_correta;
        var resposta = question.respostas[userOption];
        this.showFeedback(respostaCorreta === userOption ? 'Resposta Correta!' : 'Resposta Incorreta', resposta.justificativa ? resposta.justificativa : 'Nenhuma justificativa informada.', function () { return _this.nextQuestion(userOption, _this.currentBook); });
    };
    SimuladoPage.prototype.nextQuestion = function (userOption, currentBook) {
        var nextBook = {};
        this.updateUserSimulate(currentBook, userOption);
        var nextQuestionId = currentBook.currentQuestionId + 1;
        console.log('totalQuestions', this.simulado.questions, this.books, currentBook);
        var totalQuestions = Object.keys(this.simulado.questions[currentBook.bookId]).length;
        console.log('totalQuestions', totalQuestions);
        console.log('isAnsweredAllQuestions');
        var isAnsweredAllQuestions = nextQuestionId >= totalQuestions;
        console.log('isAnsweredAllQuestions', isAnsweredAllQuestions);
        var totalBooks = Object.keys(this.books).length;
        // Caso nao tenha respondido todas as questões da materia atual atual.
        if (!isAnsweredAllQuestions) {
            console.log('if(!isAnsweredAllQuestions)');
            nextBook = {
                bookId: currentBook.bookId,
                questions: currentBook.questions,
                currentQuestionId: nextQuestionId,
                currentQuestion: currentBook.questions[nextQuestionId],
            };
        }
        else if (isAnsweredAllQuestions && this.books.length > 1) {
            console.log('else if (isAnsweredAllQuestions && this.books.length > 1)');
            this.books.shift();
            var questions = this.simulado.questions[this.books[0]];
            nextBook = {
                bookId: this.books[0],
                questions: questions,
                currentQuestionId: 1,
                currentQuestion: questions[Object.keys(questions)[0]],
            };
        }
        else {
            console.log('else');
            this.finished = true;
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__simulado_completo_simulado_completo__["a" /* SimuladoCompletoPage */], { 'simulado': this.userSimulate });
            return;
        }
        this.userOption = '';
        this.currentBook = nextBook;
    };
    SimuladoPage.prototype.updateUserSimulate = function (currentBook, userOption) {
        this.userSimulate.questions[currentBook.bookId][currentBook.currentQuestionId].resposta_informada = userOption;
        // TODO: Atualizar o objeto dentro do usuario.
        console.log('------------- updateUserSimulate(currentBook, userOption)');
        var user = this.userProvider.getUser();
        console.log(user);
    };
    SimuladoPage.prototype.showFeedback = function (title, message, nextQuestion) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Próxima',
                    handler: function () {
                        _this.scrollToTop();
                        nextQuestion();
                    }
                }
            ]
        });
        confirm.present();
    };
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
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    SimuladoPage.prototype.scrollToTop = function () {
        this.content.scrollToTop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], SimuladoPage.prototype, "content", void 0);
    SimuladoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-simulado',template:/*ion-inline-start:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\simulado\simulado.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n      <ion-buttons left>\n\n          <button ion-button icon-only (click)="close()">\n\n              <ion-icon name="arrow-back"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n      <ion-title>Simulado {{simulado.ano}}</ion-title>\n\n  </ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n<ion-content padding class="question">\n\n  <ion-row>\n\n    <ion-col text-center>\n\n      <h2>Simulado OAB {{simulado.ano}}</h2>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <p> [{{currentBook.bookId}}] {{currentBook.currentQuestionId}}. \n\n        {{currentBook.currentQuestion.pergunta}}\n\n      </p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <ion-list radio-group no-lines [(ngModel)]="userOption">\n\n        <ion-item>\n\n          <ion-label class="customLabel">\n\n            {{currentBook.currentQuestion.respostas.a.descricao}}  \n\n          </ion-label>\n\n          <ion-radio checked="true" value="a"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label class="customLabel">\n\n            {{currentBook.currentQuestion.respostas.b.descricao}}  \n\n          </ion-label>\n\n          <ion-radio checked="true" value="b"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label class="customLabel">\n\n            {{currentBook.currentQuestion.respostas.c.descricao}}  \n\n          </ion-label>\n\n          <ion-radio checked="true" value="c"></ion-radio>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label class="customLabel">\n\n            {{currentBook.currentQuestion.respostas.d.descricao}}  \n\n          </ion-label>\n\n          <ion-radio checked="true" value="d"></ion-radio>\n\n        </ion-item>\n\n\n\n      </ion-list>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <button ion-button id="btn-confirm" full (click)="confirmQuestion(currentBook.currentQuestion, userOption)">\n\n    Confirmar\n\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\simulado\simulado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_simulado_simulado__["a" /* SimuladoProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], SimuladoPage);
    return SimuladoPage;
}());

//# sourceMappingURL=simulado.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimuladoCompletoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_simulado_simulado__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SimuladoCompletoPage = /** @class */ (function () {
    function SimuladoCompletoPage(navCtrl, navParams, simuladoProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.simuladoProvider = simuladoProvider;
        this.resultado = { total: 0, corretas: 0, nota: 0 };
        this.simulado = this.navParams.get('simulado');
        this.resultado = this.simuladoProvider.getResult(this.simulado);
        console.log(this.resultado);
    }
    SimuladoCompletoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SimuladoCompletoPage');
    };
    SimuladoCompletoPage.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    SimuladoCompletoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-simulado-completo',template:/*ion-inline-start:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\simulado-completo\simulado-completo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="home()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <h2>Simulado OAB {{ simulado.ano }} </h2>\n\n      <img src="assets/imgs/star.png" class="slide-image" />\n\n      <p>Questões</p>\n\n      <p>\n\n        <b>{{ resultado.corretas || 0 }} / {{ resultado.total || 0 }} </b>\n\n      </p>\n\n      <button ion-button id="btn-sair" full (click)="home()">\n\n        Principal\n\n      </button>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\simulado-completo\simulado-completo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_simulado_simulado__["a" /* SimuladoProvider */]])
    ], SimuladoCompletoPage);
    return SimuladoCompletoPage;
}());

//# sourceMappingURL=simulado-completo.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialInicialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(36);
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
        localStorage.setItem("tutorialViewed", "true");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    TutorialInicialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial-inicial',template:/*ion-inline-start:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\tutorial-inicial\tutorial-inicial.html"*/'<ion-content padding class="tutorial-page">\n\n  <ion-slides pager class="slide-content">\n\n    <ion-slide>\n\n      <h2>Jogue Quiz</h2>\n\n      <img src="assets/imgs/homen1.png" class="slide-image" />\n\n      <p>Como o quiz você pode treinar para os simulados e conseguir notas ainda mais altas!</p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n        <h2>Faça Simulados</h2>\n\n        <img src="assets/imgs/mulher1.png" class="slide-image" />\n\n        <p>Com os simulados você pode ver como está o seu conhecimento, experimentar uma prova semelhante a da OAB.</p>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n        <h2>Faça Progresso</h2>\n\n        <img src="assets/imgs/homen2.png" class="slide-image" />\n\n        <p>Você pode ver como nós te ajudamos! O nosso histórico permite ver o resultado de cada simulado que você realizar.</p>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <button ion-button class="skip-btn" full (click)="skipTutorial()">Ignorar</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\tutorial-inicial\tutorial-inicial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TutorialInicialPage);
    return TutorialInicialPage;
}());

//# sourceMappingURL=tutorial-inicial.js.map

/***/ }),

/***/ 133:
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
webpackEmptyAsyncContext.id = 133;

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/custom-quiz/custom-quiz.module": [
		360,
		8
	],
	"../pages/historico/historico.module": [
		361,
		7
	],
	"../pages/preparar-simulado/preparar-simulado.module": [
		362,
		6
	],
	"../pages/resetpassword/resetpassword.module": [
		363,
		5
	],
	"../pages/signin/signin.module": [
		364,
		4
	],
	"../pages/signup/signup.module": [
		365,
		3
	],
	"../pages/simulado-completo/simulado-completo.module": [
		366,
		2
	],
	"../pages/simulado/simulado.module": [
		367,
		1
	],
	"../pages/tutorial-inicial/tutorial-inicial.module": [
		368,
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
webpackAsyncContext.id = 176;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 189:
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

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_quiz_custom_quiz__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__historico_historico__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__preparar_simulado_preparar_simulado__ = __webpack_require__(62);
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
        this.user = JSON.parse(localStorage.getItem("user"));
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__preparar_simulado_preparar_simulado__["a" /* PrepararSimuladoPage */], { 'isQuiz': false });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-center>\n\n      Menu\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="menu-content" padding>\n\n  <ion-row>\n\n    <ion-col class="signup-col">\n\n      <h3 text-center>Olá\n\n        <b>{{user.displayName}}</b>,\n\n      </h3>\n\n      <h6 text-center>Escoha o que deseja fazer...</h6>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col class="signup-col">\n\n      <button ion-button id="btn-simulado" full (click)="goPrepararSimulado()">Simulado</button>\n\n      <button ion-button id="btn-quizz" full (click)="customQuiz()">Quiz</button>\n\n      <button ion-button id="btn-historico" full (click)="goHistoricoPage()">Histórico</button>\n\n      <button ion-button id="btn-sair" full (click)="signOut()">\n\n        Sair\n\n      </button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(264);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_resetpassword_resetpassword__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_custom_quiz_custom_quiz__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_preparar_simulado_preparar_simulado__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_simulado_completo_simulado_completo__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_inicial_tutorial_inicial__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_historico_historico__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_simulado_simulado__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_user_user__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_simulado_simulado__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var firebaseConfig = {
    apiKey: "AIzaSyCwycl6nj3cYiI-L_L86ime09JmDTUzYQE",
    authDomain: "base-nova.firebaseapp.com",
    databaseURL: "https://base-nova.firebaseio.com",
    projectId: "base-nova",
    storageBucket: "base-nova.appspot.com",
    messagingSenderId: "337720806704"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_custom_quiz_custom_quiz__["a" /* CustomQuizPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_preparar_simulado_preparar_simulado__["a" /* PrepararSimuladoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_simulado_completo_simulado_completo__["a" /* SimuladoCompletoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_inicial_tutorial_inicial__["a" /* TutorialInicialPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_historico_historico__["a" /* HistoricoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_simulado_simulado__["a" /* SimuladoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/custom-quiz/custom-quiz.module#CustomQuizPageModule', name: 'CustomQuizPage', segment: 'custom-quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historico/historico.module#HistoricoPageModule', name: 'HistoricoPage', segment: 'historico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preparar-simulado/preparar-simulado.module#PrepararSimuladoPageModule', name: 'PrepararSimuladoPage', segment: 'preparar-simulado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpassword/resetpassword.module#ResetpasswordPageModule', name: 'ResetpasswordPage', segment: 'resetpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#LoginPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/simulado-completo/simulado-completo.module#SimuladoCompletoPageModule', name: 'SimuladoCompletoPage', segment: 'simulado-completo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/simulado/simulado.module#SimuladoPageModule', name: 'SimuladoPage', segment: 'simulado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial-inicial/tutorial-inicial.module#TutorialInicialPageModule', name: 'TutorialInicialPage', segment: 'tutorial-inicial', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_resetpassword_resetpassword__["a" /* ResetpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_custom_quiz_custom_quiz__["a" /* CustomQuizPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_preparar_simulado_preparar_simulado__["a" /* PrepararSimuladoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_simulado_completo_simulado_completo__["a" /* SimuladoCompletoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tutorial_inicial_tutorial_inicial__["a" /* TutorialInicialPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_historico_historico__["a" /* HistoricoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_simulado_simulado__["a" /* SimuladoPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_simulado_simulado__["a" /* SimuladoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_inicial_tutorial_inicial__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__ = __webpack_require__(36);
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
                if (localStorage.getItem("tutorialViewed") == "true") {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_signin_signin__["a" /* SigninPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tutorial_inicial_tutorial_inicial__["a" /* TutorialInicialPage */];
                }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resetpassword_resetpassword__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(57);
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
    function SigninPage(navCtrl, toastCtrl, authService, alertCtrl, loadingCtrl, userProvider) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userProvider = userProvider;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__providers_auth_user__["a" /* User */]();
    }
    SigninPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.resetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__resetpassword_resetpassword__["a" /* ResetpasswordPage */]);
    };
    SigninPage.prototype.loginFacebook = function () {
        var _this = this;
        this.authService.signInFacebook().then(function (authUser) {
            //Setando usuario no localStorage
            _this.userProvider.saveUserLocalStorage({
                key: authUser.user.uid,
                uid: authUser.user.uid,
                email: authUser.additionalUserInfo.profile.email,
                displayName: authUser.additionalUserInfo.profile.name
            });
            //Redicerionando usuari.
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]).then(function () {
                var toast = _this.toastCtrl.create({
                    duration: 3000,
                    position: "bottom"
                });
                toast.setMessage("Ol\u00E1 " + authUser.additionalUserInfo.profile.name + ".");
                toast.present();
            });
        }).catch(function (error) {
            //Mensagem de erro
            var toast = _this.toastCtrl.create({
                duration: 3000,
                position: "bottom"
            });
            toast.setMessage(error.message);
        });
    };
    SigninPage.prototype.signIn = function () {
        var _this = this;
        if (this.form.form.valid) {
            var loading_1 = this.loadingCtrl.create({
                showBackdrop: true,
                content: "Fazendo login...",
                duration: 5000
            });
            loading_1.present();
            this.authService
                .signIn(this.user)
                .then(function (authUser) {
                console.log("signIn authUser", authUser);
                _this.userProvider.saveUserLocalStorage({ key: authUser.uid, uid: authUser.uid, email: authUser.email, displayName: authUser.displayName });
                loading_1.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]).then(function () {
                    var toast = _this.toastCtrl.create({
                        duration: 3000,
                        position: "bottom"
                    });
                    toast.setMessage("Ol\u00E1 " + authUser.displayName + ".");
                    toast.present();
                });
            })
                .catch(function (error) {
                loading_1.dismiss();
                var toast = _this.toastCtrl.create({
                    duration: 3000,
                    position: "bottom"
                });
                if (error.code == "auth/invalid-email") {
                    toast.setMessage("O endereço de e-mail não é válido.");
                }
                if (error.code == "auth/user-disabled") {
                    toast.setMessage("O endereço de email pode ter sido desativado.");
                }
                if (error.code == "auth/user-not-found") {
                    toast.setMessage("Email não está cadastrado no sistema.");
                }
                if (error.code == "auth/wrong-password") {
                    toast.setMessage("Endereço de email ou senha inválidos.");
                }
                toast.present();
            });
        }
        else {
            var toast = this.toastCtrl.create({
                duration: 3000,
                position: "bottom"
            });
            toast.setMessage("Preencha corretamente todos os dados antes de continuar!");
            toast.present();
        }
    };
    SigninPage.prototype.saveUserLocalStorage = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("form"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
    ], SigninPage.prototype, "form", void 0);
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-signin",template:/*ion-inline-start:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\signin\signin.html"*/'<ion-content class="login-content" padding>\n\n  <ion-row class="logo-row">\n\n    <ion-col>\n\n      <img src="assets/imgs/logo.png" />\n\n    </ion-col>\n\n  </ion-row>\n\n  <div class="login-box">\n\n    <form #form="ngForm" novalidate>\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-item class="input-custom">\n\n            <ion-label color="light" floating>E-mail</ion-label>\n\n            <ion-input type="text" name="email" [(ngModel)]="user.email" #email="ngModel" required></ion-input>\n\n          </ion-item>\n\n          <ion-item class="input-custom">\n\n            <ion-label color="light" floating>Senha</ion-label>\n\n            <ion-input type="password" name="password" [(ngModel)]="user.password" #password="ngModel" required></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full (click)="signIn()">Entrar</button>\n\n          <button ion-button class="social-button-facebook" full  (click)="loginFacebook()">\n\n            <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n\n            Continuar com o Facebook\n\n          </button>\n\n          <button ion-button class="register-btn" block clear (click)="createAccount()">\n\n            Não tem uma conta ainda? Registre-se\n\n          </button>\n\n          <button ion-button class="register-btn" block clear (click)="resetPassword()">\n\n            Perdeu sua senha? clique aqui!\n\n          </button>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */]) === "function" && _g || Object])
    ], SigninPage);
    return SigninPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
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
    AuthService.prototype.signInFacebook = function () {
        return this.angularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider());
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimuladoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimuladoProvider = /** @class */ (function () {
    function SimuladoProvider(db) {
        this.db = db;
        this.loading = true;
        this.simuladoRef = this.db.list("/simulados/");
        this.getSimuladoByRef();
    }
    SimuladoProvider.prototype.getSimuladoByRef = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.simuladoRef.valueChanges().subscribe(function (snapshot) {
                var randomSimulado = snapshot[Math.floor(Math.random() * snapshot.length)];
                console.log("getSimuladoByRef:", snapshot);
                console.log("randomSimulado:", randomSimulado);
                resolve(randomSimulado);
            });
        });
    };
    SimuladoProvider.prototype.getQuiz = function (selected, maxCount) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getSimuladoByRef().then(function (simulado) {
                _this.getMateriasSelecionadas(selected).then(function (selected1) {
                    _this.parseQuiz(selected1, simulado, maxCount).then(function (s1) {
                        _this.shuffleArray(s1).then(function (s) {
                            resolve(s);
                        });
                    });
                });
            });
        });
    };
    SimuladoProvider.prototype.getSimulado = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getSimuladoByRef().then(function (simulado) {
                _this.shuffleArray(simulado).then(function (s) {
                    resolve(s);
                });
            });
        });
    };
    SimuladoProvider.prototype.getDisciplinas = function (id) {
        var _this = this;
        var questions = [];
        return new Promise(function (resolve, reject) {
            _this.db
                .list("/simulado/" + id)
                .snapshotChanges()
                .subscribe(function (snapshot) {
                snapshot.forEach(function (item) {
                    questions.push(item.key);
                });
                resolve(questions);
            });
        });
    };
    SimuladoProvider.prototype.getQuestions = function (id, disciplina) {
        var _this = this;
        var questions = [];
        return new Promise(function (resolve, reject) {
            _this.db
                .list("/simulado/" + id + "/" + disciplina)
                .snapshotChanges()
                .subscribe(function (snapshot) {
                snapshot.forEach(function (item) {
                    questions.push(item.payload.val());
                });
                resolve(questions);
            });
        });
    };
    SimuladoProvider.prototype.getMateriasSelecionadas = function (selected) {
        var mapped = [];
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](selected, function (item) {
                mapped.push(item.normalizeRef);
            });
            resolve(mapped);
        });
    };
    SimuladoProvider.prototype.normalizeString = function (str) {
        return str
            .replace(/ /g, "_")
            .replace("?", "")
            .normalize("NFD") // Formato de Normalização Canônico de Decomposição.
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    };
    SimuladoProvider.prototype.parseQuiz = function (quizArr, simuladoArr, maxCount) {
        var _this = this;
        var parsedArr = [];
        var questionCount = 0;
        return new Promise(function (resolve) {
            console.log("quizArr:", quizArr);
            console.log("simuladoArr:", simuladoArr);
            console.log("maxCount:", maxCount);
            __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](simuladoArr.questions, function (item, key) {
                console.log("counter:", __WEBPACK_IMPORTED_MODULE_2_lodash__["size"](__WEBPACK_IMPORTED_MODULE_2_lodash__["values"](parsedArr)));
                if (__WEBPACK_IMPORTED_MODULE_2_lodash__["includes"](quizArr, _this.normalizeString(key))) {
                    if (questionCount <= maxCount) {
                        var questionsToAdd = [];
                        __WEBPACK_IMPORTED_MODULE_2_lodash__["each"](item, function (item2) {
                            questionCount++;
                            if (questionCount <= maxCount) {
                                questionsToAdd.push(item2);
                            }
                        });
                        console.log("questionsToAdd:", questionsToAdd);
                        parsedArr[_this.normalizeString(key)] = questionsToAdd;
                    }
                }
            });
            simuladoArr.questions = parsedArr;
            console.log("parsedArr:", simuladoArr);
            resolve(simuladoArr);
        });
    };
    SimuladoProvider.prototype.shuffleArray = function (array) {
        return new Promise(function (resolve, reject) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
            }
            resolve(array);
            var _a;
        });
    };
    SimuladoProvider.prototype.getResult = function (exam) {
        var total = 0;
        var respondidas = 0;
        var corretas = 0;
        var nota = 0;
        Object.keys(exam.questions).forEach(function (bookText) {
            var book = exam.questions[bookText];
            Object.keys(book).forEach(function (questionText) {
                var question = book[questionText];
                total += 1;
                if (question.resposta_informada) {
                    respondidas += 1;
                }
                ;
                if (question.resposta_informada &&
                    question.resposta_correta === question.resposta_informada) {
                    corretas += 1;
                }
                ;
            });
            nota = Math.floor((corretas / total) * 100);
        });
        return { total: total, respondidas: respondidas, corretas: corretas, nota: nota };
    };
    SimuladoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SimuladoProvider);
    return SimuladoProvider;
}());

//# sourceMappingURL=simulado.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProvider = /** @class */ (function () {
    function UserProvider(db) {
        this.db = db;
        this.userRef = this.db.list('users');
    }
    UserProvider.prototype.addUser = function (uid, email, displayName) {
        //const promise = this.userRef.push({ uid, email, displayName })
        var _this = this;
        var promise = this.userRef.update(uid, { uid: uid, email: email, displayName: displayName });
        promise.then(function (response) {
            _this.saveUserLocalStorage({ key: uid, uid: uid, email: email, displayName: displayName });
        });
    };
    UserProvider.prototype.saveUserLocalStorage = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
    };
    UserProvider.prototype.updateUser = function (ref, obj) {
        this.userRef.update(ref, obj).then(function (response) { return console.log(response); }).catch(function (error) { return console.log(error); });
    };
    UserProvider.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem('user'));
    };
    UserProvider.prototype.clearUser = function () {
        localStorage.removeItem('user');
        return true;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrepararSimuladoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simulado_simulado__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_simulado_simulado__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
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
    function PrepararSimuladoPage(navCtrl, navParams, simuladoProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.simuladoProvider = simuladoProvider;
        this.alertCtrl = alertCtrl;
        this.isQuiz = this.navParams.get('isQuiz');
        this.selected = this.navParams.get('disciplinasSelecionadas');
        this.questionsCount = this.navParams.get('questionsCount');
    }
    PrepararSimuladoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (!this.isQuiz) {
            this.simuladoProvider.getSimulado().then(function (res) {
                console.log("getSimulado res:", res);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__simulado_simulado__["a" /* SimuladoPage */], { 'simulado': res });
            });
        }
        else {
            this.simuladoProvider.getQuiz(this.selected, this.questionsCount).then(function (res) {
                console.log("getQuiz res:", res);
                var result = res;
                if (result.questions && __WEBPACK_IMPORTED_MODULE_5_lodash__["size"](__WEBPACK_IMPORTED_MODULE_5_lodash__["values"](result.questions)) > 0) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__simulado_simulado__["a" /* SimuladoPage */], { 'simulado': res });
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]).then(function () {
                        var alert = _this.alertCtrl.create({
                            title: 'Questões não encontradas',
                            subTitle: 'Não encontramos nenhum simulado que contem as opções selecionadas! Tente mudar o filtro do seu Quiz.',
                            buttons: ['Entendi']
                        });
                        alert.present();
                    });
                }
            });
        }
    };
    PrepararSimuladoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-preparar-simulado',template:/*ion-inline-start:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\preparar-simulado\preparar-simulado.html"*/'<ion-content class="menu-content" padding>\n\n    <ion-row text-center>\n\n      <ion-col class="preparar-simulado">\n\n          <img class="grayscale" src="assets/imgs/mulher1.png"/>\n\n          <h2>Preparando simulado</h2>\n\n          <p>Aguarde enquanto estamos preparando o simulado...</p>\n\n          <div class="linha"></div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\glads\Documents\Faculdade\4_Semestre\app-advogados\src\pages\preparar-simulado\preparar-simulado.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_simulado_simulado__["a" /* SimuladoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PrepararSimuladoPage);
    return PrepararSimuladoPage;
}());

//# sourceMappingURL=preparar-simulado.js.map

/***/ })

},[244]);
//# sourceMappingURL=main.js.map