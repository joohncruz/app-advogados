import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SimuladoProvider } from '../../providers/simulado/simulado';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-simulado-completo',
  templateUrl: 'simulado-completo.html',
})
export class SimuladoCompletoPage {
  simulado: any;
  resultado: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    private simuladoProvider: SimuladoProvider
  ) {
    this.resultado = { total: 0, corretas: 0, nota: 0 }
    this.simulado = this.navParams.get('simulado');
    this.resultado = this.simuladoProvider.getResult(this.simulado);
    console.log(this.resultado);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimuladoCompletoPage');
  }

  home() {
    this.navCtrl.setRoot(HomePage);
  }
}
