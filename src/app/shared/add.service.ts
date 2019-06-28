import { Injectable } from '@angular/core';
import { Add } from './add.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  formData: Add;
  constructor(private firestore: AngularFirestore) { }

  getAdd() {
      return this.firestore.collection('Add').snapshotChanges();
    }


}
