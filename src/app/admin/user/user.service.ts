import { Injectable } from '@angular/core';

import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

import { User } from './../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = '/users';
  private dbUser: AngularFirestoreCollection<User> = null;

  constructor(db: AngularFirestore) {
    this.dbUser = db.collection(this.URL);
  }

  save(user: User) {
    console.log('ID: ' + user.id);
    // if (user.id === null) {
      this.create(user);
    // } else {
    //   this.update(user.id, user);
    // }
  }

  create(user: User) {
    // user = new User();
    user.status = 'Active';
    this.dbUser.doc(user.email).set({...user});
  }

  update(id: string, user: User) {
    return this.dbUser.doc(id).update(user);
  }

  delete(id: string) {
    return this.dbUser.doc(id).delete();
  }

  getById(id: string) {
    return this.dbUser.doc(id);
  }

  getAll() {
    return this.dbUser;
  }
}
