import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin';

@IonicPage()
@Component({
  selector: 'page-tutorial-inicial',
  templateUrl: 'tutorial-inicial.html',
})
export class TutorialInicialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialInicialPage');
  }

  skipTutorial() {
    localStorage.setItem("tutorialViewed", "true");
    this.navCtrl.setRoot(SigninPage);
  }

}
