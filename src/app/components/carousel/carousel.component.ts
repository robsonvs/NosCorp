import { Component, OnInit } from '@angular/core';

import { VisualComponent } from '../../model/visual-component';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  components: any;

  constructor(private service: ComponentService) { }

  ngOnInit(): void {
    this.getComponentByCategory();
  }

  getComponentByCategory() {
    this.service.getList().ref.where('category', '==', 'carousel').get()
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
