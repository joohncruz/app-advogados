import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { PrepararSimuladoPage } from '../preparar-simulado/preparar-simulado';

@IonicPage()
@Component({
  selector: 'page-custom-quiz',
  templateUrl: 'custom-quiz.html',
})
export class CustomQuizPage {
  NumeroQuestoes: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomQuizPage');
    this.NumeroQuestoes = 20;
  }

  goHomePage() {
    this.navCtrl.setRoot(HomePage);
  }

  start() {
    this.navCtrl.setRoot(PrepararSimuladoPage);
  }

  adicionarQuestoes(){
    this.NumeroQuestoes = this.NumeroQuestoes + 1;
  }

  removerQuestoes(){
    if(this.NumeroQuestoes > 0){
      this.NumeroQuestoes = this.NumeroQuestoes - 1;
    }
  }

 
}
