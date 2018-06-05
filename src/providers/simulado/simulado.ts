import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class SimuladoProvider {
  simuladoRef: AngularFireList<any>;
  simulados: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.simuladoRef = db.list('simulado');
    this.simulados = db.list('simulado').valueChanges();
  }

  getSimulado(): Observable<any[]> {
    return this.simulados;
  }

  addSimuladoToUser() {
    console.log('addSimuladoToUser')
  }
  
}

