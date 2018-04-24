import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SimuladoPage } from '../simulado/simulado';

@IonicPage()
@Component({
  selector: 'page-preparar-simulado',
  templateUrl: 'preparar-simulado.html',
})
export class PrepararSimuladoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ngOnInit();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrepararSimuladoPage');
  }

  ngOnInit(){
    setTimeout(() => {
        this.navCtrl.setRoot(SimuladoPage);
    }, 2000);
}

}
