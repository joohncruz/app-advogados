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
  userSimulate: any;
  books: any;
  currentBook: any;
  userOption: any;
  
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

    this.books = Object.keys(this.simulado.questions);

    const questions = this.simulado.questions[this.books[0]];
    this.currentBook = {
      bookId: this.books[0],
      questions,
      currentQuestionId: 1,
      currentQuestion: questions[Object.keys(questions)[0]],
    }
    
    this.userSimulate = this.simulado; 
  }

  confirmQuestion(question, userOption) {
    const respostaCorreta = question.resposta_correta;
    const resposta = question.respostas[userOption];

    this.showFeedback(
      respostaCorreta === userOption ? 'Resposta Correta!' : 'Resposta Incorreta', 
      resposta.justificativa,
      () => this.nextQuestion(userOption, this.currentBook)
    );
  }
  
  nextQuestion(userOption, currentBook) {
    this.updateUserSimulate(currentBook, userOption);
    const nextQuestionId = currentBook.currentQuestionId + 1;

    const totalQuestions = 
      Object.keys(this.simulado.questions[this.books[currentBook.bookId]]).length;
    
    const isAnsweredAllQuestions = nextQuestionId > totalQuestions; 
  
    const totalBooks = 
      Object.keys(this.books).length;

    const isAnsweredAllBooks = false;

    const nextBook = {
      bookId: isAnsweredAllQuestions ? 
        this.books[currentBook.bookId] : currentBook.bookId,
      questions: currentBook.questions,
      currentQuestionId: nextQuestionId,
      currentQuestion: currentBook.questions[Object.keys(currentBook.questions)[nextQuestionId - 1]],

    }

    console.log('-----------------')
    console.log(nextBook)
    this.currentBook = nextBook;
  }

  updateUserSimulate(currentBook, userOption) {
    this.userSimulate.questions[currentBook.bookId][currentBook.currentQuestionId].resposta_informada = userOption;
    // TODO: Atualizar o objeto dentro do usuario.
  }

  showFeedback(title, message, nextQuestion) {
    const confirm = this.alertCtrl.create({
      title,
      message: message,
      buttons: [
        {
          text: 'Próxima',
          handler: () => { 
            nextQuestion();
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

