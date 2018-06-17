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
  selected: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private simuladoProvider: SimuladoProvider) {
      this.isQuiz = this.navParams.get('isQuiz');
      this.selected = this.navParams.get('disciplinasSelecionadas');
  }

  ionViewDidLoad() {
    if(!this.isQuiz){
      this.simuladoProvider.getSimulado().then((res) => {
        console.log("getSimulado res:", res);
        this.navCtrl.setRoot(SimuladoPage, {'simulado': res});
      });
    }else{
      this.simuladoProvider.getQuiz(this.selected).then((res) => {
        console.log("getQuiz res:", res);
        this.navCtrl.setRoot(SimuladoPage, {'simulado': res});
      });
    }
  }
}
