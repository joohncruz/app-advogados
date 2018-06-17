import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class SimuladoProvider {
  simuladoRef: AngularFireList<any>;
  simulados: Observable<any[]>;
  loading: boolean;

  constructor(private db: AngularFireDatabase) {
    this.loading = true;
    this.simuladoRef = this.db.list('/simulado/');
  }

  getQuiz() {
    return new Promise((resolve, reject) => {
      var simulado = {
        ano: 2018,
        questions: {
          constitucional: {
            1: {
              "pergunta": "eu amo nicolas constitucional?",
              "resposta_correta": "a",
              "respostas": {
                "a": {
                  "descricao": "sim constitucional a",
                  "justificativa": "por que sim"
                },
                "b": {
                  "descricao": "não constitucional b",
                  "justificativa": "por que não"
                },
                "c": {
                  "descricao": "não constitucional c",
                  "justificativa": "por que não"
                },
                "d": {
                  "descricao": "não constitucional d",
                  "justificativa": "por que não"
                },
              },
            },
            2: {
              "pergunta": "eu amo nicolas constitucional dois?",
              "resposta_correta": "a",
              "respostas": {
                "a": {
                  "descricao": "sim constitucional a",
                  "justificativa": "por que sim"
                },
                "b": {
                  "descricao": "não constitucional b",
                  "justificativa": "por que não"
                },
                "c": {
                  "descricao": "não constitucional c",
                  "justificativa": "por que não"
                },
                "d": {
                  "descricao": "não constitucional d",
                  "justificativa": "por que não"
                },
              },
            },
          },
          etica: {
            1: {
              "pergunta": "eu amo nicolas etica?",
              "resposta_correta": "a",
              "respostas": {
                "a": {
                  "descricao": "sim etica a",
                  "justificativa": "por que sim"
                },
                "b": {
                  "descricao": "não etica b",
                  "justificativa": "por que não"
                },
                "c": {
                  "descricao": "não etica c",
                  "justificativa": "por que não"
                },
                "d": {
                  "descricao": "não etica d",
                  "justificativa": "por que não"
                },
              },
            },
          },
        },
      };
      this.shuffleArray(simulado).then((s) => {
        resolve(s);
      });
    });
  }

  getSimulado() {
    return new Promise((resolve, reject) => {
      var simulado = {
        ano: 2018,
        questions: {
          constitucional: {
            1: {
              "pergunta": "eu amo nicolas constitucional?",
              "resposta_correta": "a",
              "respostas": {
                "a": {
                  "descricao": "sim constitucional a",
                  "justificativa": "por que sim"
                },
                "b": {
                  "descricao": "não constitucional b",
                  "justificativa": "por que não"
                },
                "c": {
                  "descricao": "não constitucional c",
                  "justificativa": "por que não"
                },
                "d": {
                  "descricao": "não constitucional d",
                  "justificativa": "por que não"
                },
              },
            },
            2: {
              "pergunta": "eu amo nicolas constitucional dois?",
              "resposta_correta": "a",
              "respostas": {
                "a": {
                  "descricao": "sim constitucional a",
                  "justificativa": "por que sim"
                },
                "b": {
                  "descricao": "não constitucional b",
                  "justificativa": "por que não"
                },
                "c": {
                  "descricao": "não constitucional c",
                  "justificativa": "por que não"
                },
                "d": {
                  "descricao": "não constitucional d",
                  "justificativa": "por que não"
                },
              },
            },
          },
          etica: {
            1: {
              "pergunta": "eu amo nicolas etica?",
              "resposta_correta": "a",
              "respostas": {
                "a": {
                  "descricao": "sim etica a",
                  "justificativa": "por que sim"
                },
                "b": {
                  "descricao": "não etica b",
                  "justificativa": "por que não"
                },
                "c": {
                  "descricao": "não etica c",
                  "justificativa": "por que não"
                },
                "d": {
                  "descricao": "não etica d",
                  "justificativa": "por que não"
                },
              },
            },
          },
        },
      };
      this.shuffleArray(simulado).then((s) => {
        resolve(s);
      });
    });



    /* var simulado = [];
    return new Promise((resolve, reject) => {
      this.simuladoRef
        .snapshotChanges()
        .subscribe(snapshot => {
          snapshot.forEach(item => {
            simulado.push(item.key);
          });

          this.shuffleArray(simulado).then(shuffle => {
            const simuladoId = shuffle[0];
            let materias: any;

            this.getDisciplinas(simuladoId).then(res => {
              materias = res;
              console.log(materias);
              resolve({id: simuladoId, materias: {...materias}})
            })
          });
        });
    }); */
  }

  getDisciplinas(id) {
    var questions = [];
    return new Promise((resolve, reject) => {
      this.db.list(`/simulado/${id}`)
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
      this.db.list(`/simulado/${id}/${disciplina}`)
        .snapshotChanges()
        .subscribe(snapshot => {
          snapshot.forEach(item => {
            questions.push(item.payload.val());
          });

          resolve(questions);
        });
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
}

