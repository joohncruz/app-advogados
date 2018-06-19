import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TutorialInicialPage } from '../pages/tutorial-inicial/tutorial-inicial';

import { AngularFireAuth } from 'angularfire2/auth';
import { SigninPage } from '../pages/signin/signin';
import { HeaderColor } from '@ionic-native/header-color';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    afAuth: AngularFireAuth, private headerColor: HeaderColor) {
    const authObserver = afAuth.authState.subscribe(user => {
      if(user) {
        this.rootPage = HomePage;
        authObserver.unsubscribe();
      } else {
        if(localStorage.getItem("tutorialViewed") == "true"){
          this.rootPage = SigninPage;
        }else{
          this.rootPage = TutorialInicialPage;
        }
        authObserver.unsubscribe();
      }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('#ffffff')
      this.headerColor.tint('#3b5998');
      splashScreen.hide();
    });
  }
}

