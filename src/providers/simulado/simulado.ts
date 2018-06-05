import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class SimuladoProvider {
  simuladoRef: AngularFireList<any>;
  simulados: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.simuladoRef = db.list('simulado');
    //this.simulados = db.list('simulado').valueChanges();
  }

  /* getSimulado(): Observable<any[]> {
    return this.simulados;
  } */

  getSimulado() {
    var questions = [];
    return new Promise((resolve, reject) => {
      this.db
        .list('/simulado/')
        .snapshotChanges()
        .subscribe(snapshot => {
          snapshot.forEach(item => {
            questions.push(item.key);
          });
          this.shuffleArray(questions).then(shuffle => {
            resolve(shuffle);
          });
        });
    });
  }

  private shuffleArray(a) {
    return new Promise((resolve, reject) => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      resolve(a);
    });
  }

  addSimuladoToUser() {
    console.log('addSimuladoToUser')
  }

}

