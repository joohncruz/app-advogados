import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth-service';
import { SigninPage } from '../signin/signin';
import { CustomQuizPage } from '../custom-quiz/custom-quiz';
import { HistoricoPage } from '../historico/historico';
import { PrepararSimuladoPage } from '../preparar-simulado/preparar-simulado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: any;
  constructor(public navCtrl: NavController, private authService: AuthService) {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  signOut() {
    this.authService.signOut()
      .then(() => {
        this.navCtrl.setRoot(SigninPage);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  customQuiz() {
    this.navCtrl.setRoot(CustomQuizPage);
  }

  goHistoricoPage() {
    this.navCtrl.setRoot(HistoricoPage);
  }

  goPrepararSimulado() {
    this.navCtrl.setRoot(PrepararSimuladoPage, { 'isQuiz': false });
  }
}
