import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserProvider {
  userRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.userRef = db.list('users');
  }

  addUser (uid, email, displayName) {
    const promise = this.userRef.push({ uid, email, displayName })
    
    promise.then(response => {
      localStorage.setItem('user', JSON.stringify({key: response.key, uid, email, displayName}))
    });
    
  }

  getUser () {
    return JSON.stringify(localStorage.getItem('user'))
  }

  clearUser () {
    localStorage.removeItem('user')
    return true
  }

}
