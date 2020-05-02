import { Component, OnInit } from '@angular/core';

import { ComponentService } from './../component.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  components: any;

  constructor(private service: ComponentService) { }

  ngOnInit(): void {
    this.getComponentByCategory();
  }

  getComponentByCategory() {
    this.service.getList().ref.where('category', '==', 'card').get()
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
