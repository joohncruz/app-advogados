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

  getSimulado() {
    var questions = [];
    return new Promise((resolve, reject) => {
      this.simuladoRef
        .snapshotChanges()
        .subscribe(snapshot => {
          snapshot.forEach(item => {
            questions.push(item.key);
          });

          console.log(questions);
          this.shuffleArray(questions).then(shuffle => {
            console.log(shuffle);
            resolve(shuffle);
          });
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

  addSimuladoToUser() {
    console.log('addSimuladoToUser')
  }

}

