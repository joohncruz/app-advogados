import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { SimuladoProvider } from '../../providers/simulado/simulado';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-simulado',
  templateUrl: 'simulado.html',
})
export class SimuladoPage {
  simulado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private simuladoProvider: SimuladoProvider) {
    this.simulado = this.navParams.get('simulado');
    this.simulado = {
      ano: 2018,
      questions: {
        constitucional: {
          1 : {
            "pergunta" : "eu amo nicolas constitucional?",
            "resposta_correta" : "a",
            "respostas" : {
              "a" : {
                "descricao": "sim constitucional a",
                "justificativa": "por que sim"
              },
              "b" : {
                "descricao": "não constitucional b",
                "justificativa": "por que não"
              },
              "c" : {
                "descricao": "não constitucional c",
                "justificativa": "por que não"
              },
              "d" : {
                "descricao": "não constitucional d",
                "justificativa": "por que não"
              },
            },
          },
        },
        etica: {
          1 : {
            "pergunta" : "eu amo nicolas etica?",
            "resposta_correta" : "a",
            "respostas" : {
              "a" : {
                "descricao": "sim etica a",
                "justificativa": "por que sim"
              },
              "b" : {
                "descricao": "não etica b",
                "justificativa": "por que não"
              },
              "c" : {
                "descricao": "não etica c",
                "justificativa": "por que não"
              },
              "d" : {
                "descricao": "não etica d",
                "justificativa": "por que não"
              },
            },
          },
        },
      },
    };
    
    console.log(this.simulado);

  }

  confirmQuestion() {
    this.showFeedback(
      'Testando o Confirm', 
      'Cara voce acertou bola pra frente apertta ai'
    );
  }

  showFeedback(title, message) {
    const confirm = this.alertCtrl.create({
      title,
      message: message,
      buttons: [
        {
          text: 'Próxima',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimuladoPage');
  }

  close(){
    let alert = this.alertCtrl.create({
      title: 'Confirme sua ação',
      message: 'Deseja realmente sair do simulado?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sair',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    alert.present();
  }

}
