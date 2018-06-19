import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SimuladoProvider } from '../../providers/simulado/simulado';
import { UserProvider } from '../../providers/user/user';
import { CustomQuizPage } from '../custom-quiz/custom-quiz';
import { PrepararSimuladoPage } from '../preparar-simulado/preparar-simulado';
import * as moment from 'moment';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {
  user: any;
  historicos = [];
  loadingHistory: any = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private simuladoProvider: SimuladoProvider,
    private userProvider: UserProvider,
    public loadingCtrl: LoadingController
  ) {
    this.user = userProvider.getUser();
    this.loadingHistory = true;
    moment.locale('pt-BR');
  }

  getExames() {
    let loading = this.loadingCtrl.create({

      showBackdrop: true,
      content: `Carregando historico...`,
      duration: 5000
    });
    loading.present();
    this.userProvider.getUserSimulados().then((resExames: any) => {
      this.historicos = resExames.map(exam => ({
        exam,
        lastUpdate: moment(exam.lastUpdate).format("LL"),
        resultado: this.simuladoProvider.getResult(exam)
      }))
      console.log("historicos:", this.historicos);
      this.loadingHistory = false;
      loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoPage');
    this.getExames();
  }

  close() {
    this.navCtrl.setRoot(HomePage);
  }

  customQuiz() {
    this.navCtrl.setRoot(CustomQuizPage);
  }

  goPrepararSimulado() {
    this.navCtrl.setRoot(PrepararSimuladoPage, { 'isQuiz': false });
  }
}
