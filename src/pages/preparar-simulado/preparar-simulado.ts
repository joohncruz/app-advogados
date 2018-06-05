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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private simuladoProvider: SimuladoProvider) {
    this.ngOnInit();
  }

  ionViewDidLoad() {
    this.simuladoProvider.getSimulado().then((res) => {
      this.navParams = res;
      this.navCtrl.setRoot(SimuladoPage);
    });
  }

  ngOnInit() {
    
    /* setTimeout(() => {
      this.navParams = that.simulados;
      this.navCtrl.setRoot(SimuladoPage);
    }, 2000); */
  }

}
