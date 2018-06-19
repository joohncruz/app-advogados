import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SimuladoProvider } from '../../providers/simulado/simulado';
import { UserProvider } from '../../providers/user/user';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {
  user: any;
  historicos = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private simuladoProvider: SimuladoProvider,
    userProvider: UserProvider
  ) {
    this.user = userProvider.getUser();
    console.log(this.user);
    this.historicos = this.user.exames.map(exam => ({ exam, resultado: this.simuladoProvider.getResult(exam) }))
    console.log(this.historicos);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPage');
  }

  close() {
    this.navCtrl.setRoot(HomePage);
  }
}
