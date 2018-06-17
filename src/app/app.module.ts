import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { CustomQuizPage } from '../pages/custom-quiz/custom-quiz';
import { PrepararSimuladoPage } from '../pages/preparar-simulado/preparar-simulado';
import { SimuladoCompletoPage } from '../pages/simulado-completo/simulado-completo';

import { TutorialInicialPage } from '../pages/tutorial-inicial/tutorial-inicial';
import { HistoricoPage } from '../pages/historico/historico';
import { SimuladoPage } from '../pages/simulado/simulado';

import { AuthService } from '../providers/auth/auth-service';
import { UserProvider } from '../providers/user/user';
import { SimuladoProvider } from '../providers/simulado/simulado';

const firebaseConfig = {
  apiKey: "AIzaSyBQsMou8CwzNNRvpz6Xd8zti9dCl6spVLQ",
  authDomain: "trabmontanha-afa5c.firebaseapp.com",
  databaseURL: "https://trabmontanha-afa5c.firebaseio.com",
  projectId: "trabmontanha-afa5c",
  storageBucket: "trabmontanha-afa5c.appspot.com",
  messagingSenderId: "922779715590"
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
    SimuladoCompletoPage,
    TutorialInicialPage,
    HistoricoPage,
    SimuladoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
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
    SimuladoCompletoPage,
    TutorialInicialPage,
    HistoricoPage,
    SimuladoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    UserProvider,
    SimuladoProvider
  ]
})
export class AppModule {}
