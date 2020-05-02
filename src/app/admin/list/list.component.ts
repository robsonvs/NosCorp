import { Component, OnInit } from '@angular/core';

import { ComponentService } from '../../components/component.service';
import { VisualComponent } from './../../model/visual-component';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  components: VisualComponent[] = [];

  constructor(private service: ComponentService) { }

  ngOnInit(): void {
    this.getList();
  }

  delete(id: string) {
    if (confirm('Are you sure that you want delete this register?')){

      this.service.delete(id);
    }
  }

  getList() {
    return this.service.getList().snapshotChanges()
      .pipe(map(changes =>
        changes.map(m =>
          ({id: m.payload.doc.id,
          ...m.payload.doc.data() })))
    ).subscribe(result =>
      this.components = result
    );
  }
}
