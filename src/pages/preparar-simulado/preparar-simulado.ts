import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SimuladoPage } from '../simulado/simulado';
import { SimuladoProvider } from '../../providers/simulado/simulado';

import { HomePage } from '../home/home';
import * as _ from 'lodash';

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
    private simuladoProvider: SimuladoProvider,
    private alertCtrl: AlertController) {
    this.isQuiz = this.navParams.get('isQuiz');
    this.selected = this.navParams.get('disciplinasSelecionadas');
  }

  ionViewDidLoad() {
    if (!this.isQuiz) {
      this.simuladoProvider.getSimulado().then((res) => {
        console.log("getSimulado res:", res);
        this.navCtrl.setRoot(SimuladoPage, { 'simulado': res });
      });
    } else {
      this.simuladoProvider.getQuiz(this.selected).then((res) => {
        console.log("getQuiz res:", res);
        let result: any = res;
        if (result.questions && _.size(_.values(result.questions)) > 0) {
          this.navCtrl.setRoot(SimuladoPage, { 'simulado': res });
        } else {
          this.navCtrl.setRoot(HomePage).then(() => {
            let alert = this.alertCtrl.create({
              title: 'Questões não encontradas',
              subTitle: 'Não encontramos nenhum simulado que contem as opções selecionadas! Tente mudar o filtro do seu Quiz.',
              buttons: ['Entendi']
            });
            alert.present();
          });
        }
      });
    }
  }
}
