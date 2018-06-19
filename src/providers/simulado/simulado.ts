import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

import * as _ from 'lodash';

@Injectable()
export class SimuladoProvider {
  simuladoRef: AngularFireList<any>;
  simulados: Observable<any[]>;
  loading: boolean;

  constructor(private db: AngularFireDatabase) {
    this.loading = true;
    this.simuladoRef = this.db.list("/simulados/");
    this.getSimuladoByRef();
  }

  getSimuladoByRef() {
    return new Promise(resolve => {
      this.simuladoRef.valueChanges().subscribe(snapshot => {
        let randomSimulado = snapshot[Math.floor(Math.random() * snapshot.length)];
        console.log('getSimuladoByRef', randomSimulado)
        resolve(randomSimulado);
      });
    });
  }

  getQuiz(selected, maxCount) {
    console.log('TRACE: getQuiz 1', selected, maxCount)
    return new Promise((resolve, reject) => {
      this.getSimuladoByRef().then(simulado => {
        console.log('TRACE: getQuiz 2', simulado)
        
        this.getMateriasSelecionadas(selected).then(selected1 => {
          console.log('TRACE: getQuiz 3', selected1)
          
          this.parseQuiz(selected1, simulado, maxCount).then(s1 => {
            console.log('TRACE: getQuiz 4', s1)
            
            this.shuffleArray(s1).then(s => {
              console.log('TRACE: getQuiz 5', s)
              
              resolve(s);
            });
          });
        });
      });
    });
  }

  getSimulado() {
    return new Promise((resolve, reject) => {
      this.getSimuladoByRef().then(simulado => {
        this.shuffleArray(simulado).then(s => {
          resolve(s);
        });
      });
    });
  }

  getDisciplinas(id) {
    var questions = [];
    return new Promise((resolve, reject) => {
      this.db
        .list(`/simulado/${id}`)
        .snapshotChanges()
        .subscribe(snapshot => {
          snapshot.forEach(item => {
            questions.push(item.key);
          });

          resolve(questions);
        });
    });
  }

  getQuestions(id, disciplina) {
    var questions = [];
    return new Promise((resolve, reject) => {
      this.db
        .list(`/simulado/${id}/${disciplina}`)
        .snapshotChanges()
        .subscribe(snapshot => {
          snapshot.forEach(item => {
            questions.push(item.payload.val());
          });

          resolve(questions);
        });
    });
  }

  getMateriasSelecionadas(selected) {
    var mapped = [];
    return new Promise(resolve => {
      _.each(selected, item => {
        mapped.push(item.normalizeRef);
      });
      resolve(mapped);
    });
  }

  normalizeString(str) {
    return str
      .replace(/ /g, "_")
      .replace("?", "")
      .normalize("NFD") // Formato de Normalização Canônico de Decomposição.
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  private parseQuiz(quizArr, simuladoArr, maxCount) {
    var parsedArr: any = {};
    var questionCount: any = 0;
    return new Promise(resolve => {

      console.log("TRACE parseQuiz 1: quizArr:", quizArr);
      console.log("TRACE parseQuiz 2: simuladoArr:", simuladoArr);
      console.log("TRACE parseQuiz 3: maxCount:", maxCount);

      _.each(simuladoArr.questions, (item, key) => {
        console.log("TRACE parseQuiz 4: counter:", _.size(_.values(parsedArr)));
        if (_.includes(quizArr, this.normalizeString(key))) {
          if (questionCount <= maxCount) {
            var questionsToAdd: any = [];
            _.each(item, item2 => {
              questionCount++;
              if (questionCount <= maxCount) {
                questionsToAdd.push(item2);
              }
            });
            console.log("TRACE parseQuiz 5: questionsToAdd:", questionsToAdd);
            parsedArr[this.normalizeString(key)] = questionsToAdd;
          }
        }
      });

      console.log("TRACE parseQuiz 6: parsedArr:", parsedArr);
      console.log("TRACE parseQuiz 7: simuladoArr 1:", simuladoArr);
      simuladoArr.questions = parsedArr;
      console.log("TRACE parseQuiz 8: simuladoArr 2:", simuladoArr);
      resolve(simuladoArr);
    });
  }

  private shuffleArray(array) {
    return new Promise((resolve, reject) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      resolve(array);
    });
  }

  getResult(exam) {
    let total = 0;
    let respondidas = 0;
    let corretas = 0;
    let nota = 0;

    Object.keys(exam.questions).forEach((bookText) => {
      const book = exam.questions[bookText];
      Object.keys(book).forEach((questionText) => {
        const question = book[questionText];

        total += 1;

        if (question.resposta_informada) {
          respondidas += 1;
        };

        if (question.resposta_informada &&
          question.resposta_correta === question.resposta_informada) {
          corretas += 1;
        };

      });

      nota = Math.floor((corretas / total) * 100);
    });

    return { total, respondidas, corretas, nota };

  }
}
