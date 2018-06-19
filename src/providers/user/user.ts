import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class UserProvider {
  userRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.userRef = this.db.list('users');
  }

  addUser (uid, email, displayName) {
    const promise = this.userRef.update(uid, { uid, email, displayName });
    promise.then(response => {
      this.saveUserLocalStorage({ key: uid, uid, email, displayName})
    });
    
  }

  saveUserLocalStorage(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getSimuladoRefKey(uid){
    return this.db.list(`users/${uid}/exames/`).push(null);
  }

  updateUser(ref, obj) {
    this.userRef.update(ref, obj).then(response =>  { 

      if(obj.uid) {
        this.clearUser();
        this.saveUserLocalStorage(obj);
      } else {
        const user = this.getUser()
        this.clearUser();
        this.saveUserLocalStorage({
          ...user,
          exames: [
            obj
          ]
        });        
      }
      
    }).catch(error => console.log(error));
  }
  

  getUser () {
    return JSON.parse(localStorage.getItem('user'))
  }

  clearUser () {
    localStorage.removeItem('user');
  }

}
