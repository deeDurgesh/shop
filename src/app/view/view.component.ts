import { Component, OnInit } from '@angular/core';
import { AddService } from '../shared/add.service';
import { Add } from '../shared/add.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  list: Add[];

  constructor(private service: AddService) { }

  ngOnInit() {
    this.service.getAdd().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        const c = item.payload.doc.data() as Add;
        c.id = item.payload.doc.id;
        return c;
      });
    });
  }

}
