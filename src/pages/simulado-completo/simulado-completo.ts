import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-simulado-completo',
  templateUrl: 'simulado-completo.html',
})
export class SimuladoCompletoPage {
  simulado: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.simulado = this.navParams.get('simulado');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimuladoCompletoPage');
  }

  home() {
    this.navCtrl.setRoot(HomePage);
  }
}
