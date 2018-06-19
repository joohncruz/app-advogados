import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { SimuladoCompletoPage } from '../simulado-completo/simulado-completo';

import { Content } from 'ionic-angular';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-simulado',
  templateUrl: 'simulado.html',
})
export class SimuladoPage {
  @ViewChild(Content) content: Content;
  simulado: any;
  userSimulate: any;
  books: any;
  currentBook: any;
  userOption: any;
  finished: any;
  simuladoRefKey: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private userProvider: UserProvider) {

    console.log('TRACE: SimuladoPage 1');
    this.simulado = this.navParams.get('simulado');
    console.log('TRACE: SimuladoPage 2', this.simulado);
    
    this.userSimulate = this.simulado;
    console.log('TRACE: SimuladoPage 3', this.userSimulate);
    
    this.finished = false;
    this.books = Object.keys(this.simulado.questions);
    console.log('TRACE: SimuladoPage 4', this.books);
    

    const questions = this.simulado.questions[this.books[0]];
    console.log('TRACE: SimuladoPage 5', questions);

    this.currentBook = {
      bookId: this.books[0],
      questions,
      currentQuestionId: 0,
      currentQuestion: questions[Object.keys(questions)[0]],
    }

    this.genEmptyRef();
  }

  genEmptyRef(){
    const user = this.userProvider.getUser();
    this.userProvider.getSimuladoRefKey(user.uid).then((ref) => {
      this.simuladoRefKey = ref.key;
      console.log("simuladoRefKey:", ref.key);
    });
  }

  confirmQuestion(question, userOption) {
    console.log('TRACE: confirmQuestion');

    if (userOption) {
      const respostaCorreta = question.resposta_correta;
      const resposta = question.respostas[userOption];

      this.showFeedback(
        respostaCorreta === userOption ? 'Resposta Correta!' : 'Resposta Incorreta',
        resposta.justificativa ? resposta.justificativa : 'Nenhuma justificativa informada.',
        () => this.nextQuestion(userOption, this.currentBook)
      );
    } else {
      let toast = this.toastCtrl.create({
        message: 'Você deve escolher uma alternativa para continuar!',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();
    }

  }

  nextQuestion(userOption, currentBook) {
    console.log('TRACE: nextQuestion');
    let nextBook = {};

    this.updateUserSimulate(currentBook, userOption);
    const nextQuestionId = currentBook.currentQuestionId + 1;

    console.log('totalQuestions', this.simulado.questions, this.books, currentBook)
    const totalQuestions =
      Object.keys(this.simulado.questions[currentBook.bookId]).length;

    console.log('totalQuestions', totalQuestions)

    console.log('isAnsweredAllQuestions')

    const isAnsweredAllQuestions = nextQuestionId >= totalQuestions;

    console.log('isAnsweredAllQuestions', isAnsweredAllQuestions)

    // const totalBooks =
    //   Object.keys(this.books).length;

    // Caso nao tenha respondido todas as questões da materia atual atual.
    if (!isAnsweredAllQuestions) {
      console.log('if(!isAnsweredAllQuestions)')
      nextBook = {
        bookId: currentBook.bookId,
        questions: currentBook.questions,
        currentQuestionId: nextQuestionId,
        currentQuestion: currentBook.questions[nextQuestionId],
      }

    } else if (isAnsweredAllQuestions && this.books.length > 1) {
      console.log('else if (isAnsweredAllQuestions && this.books.length > 1)')
      this.books.shift();
      const questions = this.simulado.questions[this.books[0]];

      nextBook = {
        bookId: this.books[0],
        questions,
        currentQuestionId: 0,
        currentQuestion: questions[Object.keys(questions)[0]],
      }
    } else {
      console.log('else')
      this.finished = true;
      this.navCtrl.setRoot(SimuladoCompletoPage, { 'simulado': this.userSimulate });
      return;
    }

    this.userOption = '';
    this.currentBook = nextBook;
  }

  updateUserSimulate(currentBook, userOption) {
    console.log('TRACE: updateUserSimulate', currentBook, userOption)
    console.log('TRACE: updateUserSimulate > 2', this.userSimulate)
    
    this.userSimulate.questions[currentBook.bookId][currentBook.currentQuestionId].resposta_informada = userOption;

    console.log('TRACE: updateUserSimulate > 3', this.userSimulate)
    const user = this.userProvider.getUser()
    console.log('TRACE: updateUserSimulate > 4', user, this.userSimulate)

    if (user.exames) {
      this.userProvider.updateUser(`${user.uid}/exames/${this.simuladoRefKey}/`, {
        ...this.userSimulate
      })
    } else {
      this.userProvider.updateUser(`${user.uid}/exames/${this.simuladoRefKey}/`, {
        ...this.userSimulate
      })
    }

  }

  showFeedback(title, message, nextQuestion) {
    const confirm = this.alertCtrl.create({
      title,
      message: message,
      buttons: [
        {
          text: 'Próxima',
          handler: () => {
            this.scrollToTop();
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

  close() {
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

  scrollToTop() {
    this.content.scrollToTop();
  }

}

