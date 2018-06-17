import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SimuladoPage } from '../simulado/simulado';
import { SimuladoProvider } from '../../providers/simulado/simulado';

@IonicPage()
@Component({
  selector: 'page-preparar-simulado',
  templateUrl: 'preparar-simulado.html',
})
export class PrepararSimuladoPage {
  simulados: Object;
  isQuiz: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private simuladoProvider: SimuladoProvider) {
      this.isQuiz = this.navParams.get('isQuiz');
  }

  ionViewDidLoad() {
    if(!this.isQuiz){
      this.simuladoProvider.getSimulado().then((res) => {
        this.navCtrl.setRoot(SimuladoPage, {'simulado': res});
      });
    }else{
      this.simuladoProvider.getQuiz().then((res) => {
        this.navCtrl.setRoot(SimuladoPage, {'simulado': res});
      });
    }
  }
}
