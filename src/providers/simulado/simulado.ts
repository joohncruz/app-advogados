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
    this.simuladoRef = this.db.list("/simulado/");
  }

  getQuiz(selected) {
    return new Promise((resolve, reject) => {
      var simulado = {
        ano: 2018,
        questions: {
          constitucional: {
            1: {
              pergunta: "eu amo nicolas constitucional?",
              resposta_correta: "a",
              respostas: {
                a: {
                  descricao: "sim constitucional a",
                  justificativa: "por que sim"
                },
                b: {
                  descricao: "não constitucional b",
                  justificativa: "por que não"
                },
                c: {
                  descricao: "não constitucional c",
                  justificativa: "por que não"
                },
                d: {
                  descricao: "não constitucional d",
                  justificativa: "por que não"
                }
              }
            },
            2: {
              pergunta: "eu amo nicolas constitucional dois?",
              resposta_correta: "a",
              respostas: {
                a: {
                  descricao: "sim constitucional a",
                  justificativa: "por que sim"
                },
                b: {
                  descricao: "não constitucional b",
                  justificativa: "por que não"
                },
                c: {
                  descricao: "não constitucional c",
                  justificativa: "por que não"
                },
                d: {
                  descricao: "não constitucional d",
                  justificativa: "por que não"
                }
              }
            }
          },
          etica: {
            1: {
              pergunta: "eu amo nicolas etica?",
              resposta_correta: "a",
              respostas: {
                a: {
                  descricao: "sim etica a",
                  justificativa: "por que sim"
                },
                b: {
                  descricao: "não etica b",
                  justificativa: "por que não"
                },
                c: {
                  descricao: "não etica c",
                  justificativa: "por que não"
                },
                d: {
                  descricao: "não etica d",
                  justificativa: "por que não"
                }
              }
            }
          }
        }
      };
      this.getMateriasSelecionadas(selected).then(selected1 => {
        this.parseQuiz(selected1, simulado).then(s1 => {
          this.shuffleArray(s1).then(s => {
            resolve(s);
          });
        });
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
              pergunta: "eu amo nicolas constitucional?",
              resposta_correta: "a",
              respostas: {
                a: {
                  descricao: "sim constitucional a",
                  justificativa: "por que sim"
                },
                b: {
                  descricao: "não constitucional b",
                  justificativa: "por que não"
                },
                c: {
                  descricao: "não constitucional c",
                  justificativa: "por que não"
                },
                d: {
                  descricao: "não constitucional d",
                  justificativa: "por que não"
                }
              }
            },
            2: {
              pergunta: "eu amo nicolas constitucional dois?",
              resposta_correta: "a",
              respostas: {
                a: {
                  descricao: "sim constitucional a",
                  justificativa: "por que sim"
                },
                b: {
                  descricao: "não constitucional b",
                  justificativa: "por que não"
                },
                c: {
                  descricao: "não constitucional c",
                  justificativa: "por que não"
                },
                d: {
                  descricao: "não constitucional d",
                  justificativa: "por que não"
                }
              }
            }
          },
          etica: {
            1: {
              pergunta: "eu amo nicolas etica?",
              resposta_correta: "a",
              respostas: {
                a: {
                  descricao: "sim etica a",
                  justificativa: "por que sim"
                },
                b: {
                  descricao: "não etica b",
                  justificativa: "por que não"
                },
                c: {
                  descricao: "não etica c",
                  justificativa: "por que não"
                },
                d: {
                  descricao: "não etica d",
                  justificativa: "por que não"
                }
              }
            }
          }
        }
      };
      this.shuffleArray(simulado).then(s => {
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

  private parseQuiz(quizArr, simuladoArr) {
    var parsedArr: any = [];
    return new Promise(resolve => {

      console.log("quizArr:", quizArr);
      console.log("simuladoArr:", simuladoArr);

      _.each(simuladoArr.questions, (item, key) => {
        if (_.includes(quizArr, this.normalizeString(key))){
          parsedArr[this.normalizeString(key)] = item;
        }
      });
      simuladoArr.questions = parsedArr;
      console.log("parsedArr:", simuladoArr);
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
    let respondidas= 0;
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
