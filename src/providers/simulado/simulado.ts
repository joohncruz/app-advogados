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

  getQuiz(){
    return new Promise((resolve, reject) => {
      
    });
  }

  getSimulado() {
    var simulado = [];
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
    });
  }

  getDisciplinas(id) {
    var questions =[];
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
    var questions =[];
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

