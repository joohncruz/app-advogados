import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class UserProvider {
  userRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.userRef = this.db.list('users');
  }

  addUser (uid, email, displayName) {
    const promise = this.userRef.push({ uid, email, displayName })
    
    promise.then(response => {
      this.saveUserLocalStorage({key: response.key, uid, email, displayName})
    });
    
  }

  saveUserLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUser () {
    return JSON.stringify(localStorage.getItem('user'))
  }

  clearUser () {
    localStorage.removeItem('user')
    return true
  }

}
