import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { CustomQuizPage } from '../pages/custom-quiz/custom-quiz';
import { PrepararSimuladoPage } from '../pages/preparar-simulado/preparar-simulado';
import { TutorialInicialPage } from '../pages/tutorial-inicial/tutorial-inicial';
import { HistoricoPage } from '../pages/historico/historico';
import { SimuladoPage } from '../pages/simulado/simulado';

import { AuthService } from '../providers/auth/auth-service';

const firebaseConfig = {
  apiKey: "AIzaSyCrc_fwSyiIVLf3v9YPvrEzRUENqUDPexs",
  authDomain: "app-advogados-39f27.firebaseapp.com",
  databaseURL: "https://app-advogados-39f27.firebaseio.com",
  projectId: "app-advogados-39f27",
  storageBucket: "app-advogados-39f27.appspot.com",
  messagingSenderId: "103835262760"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ResetpasswordPage,
    CustomQuizPage,
    PrepararSimuladoPage,
    TutorialInicialPage,
    HistoricoPage,
    SimuladoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ResetpasswordPage,
    CustomQuizPage,
    PrepararSimuladoPage,
    TutorialInicialPage,
    HistoricoPage,
    SimuladoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
