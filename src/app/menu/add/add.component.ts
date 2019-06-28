import { Component, OnInit } from '@angular/core';
import { AddService } from 'src/app/shared/add.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private service: AddService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
      this.service.formData = {
        id: null,
        fullName: '',
        quantity: '',
        img: '',
        mobile: '',
      };
    }
  }
  onSubmit(form: NgForm) {
    const data = form.value;
    this.firestore.collection('addlist').add(data);
    this.resetForm(form);
  }
}
