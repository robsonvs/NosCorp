import { Component, OnInit } from '@angular/core';

import { ComponentService } from '../component.service';
import { VisualComponent } from '../../model/visual-component';

import { take, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  components: any;

  constructor(private service: ComponentService) { }

  ngOnInit(): void {
    this.getComponentByCategory();
  }

  getComponentByCategory() {
    this.service.getList().ref.where('category', '==', 'media').get()
    .then(querySnapshot => {
      const c = [];
      querySnapshot.forEach(doc => {
          c.push(doc.data());
          this.components = c;
      });
    }).catch(error => {
      console.log('Error getting documents: ', error);
    });
  }
}
