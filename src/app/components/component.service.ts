import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { VisualComponent } from '../model/visual-component';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  private URL = '/components';
  private componentDB: AngularFirestoreCollection<VisualComponent> = null;

  constructor(private db: AngularFirestore) {
    this.componentDB = this.db.collection(this.URL);
   }

   create(component: VisualComponent) {
    this.componentDB.add({...component});
   }

   update(id: string, component: VisualComponent) {
    return this.componentDB.doc(id).update(component);
   }

   delete(id: string) {
    return this.componentDB.doc(id).delete();
   }

   getById(id: string) {
     return this.componentDB.doc(id).valueChanges();
   }

   getList() {
     return this.componentDB;
   }

   getCategory() {
     return this.db.collection('categories').valueChanges();
   }
}
