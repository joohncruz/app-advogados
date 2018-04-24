import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-custom-quiz',
  templateUrl: 'custom-quiz.html',
})
export class CustomQuizPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomQuizPage');
  }

  goHomePage() {
    this.navCtrl.setRoot(HomePage);
  }


}
