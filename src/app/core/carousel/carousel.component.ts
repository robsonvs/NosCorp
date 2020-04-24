import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  items: any;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.getCarousel();
  }

  getCarousel() {
    this.db.collection('/carousel').snapshotChanges()
      .pipe(take(1)).pipe(
        map(changes =>
          changes.map(
            c => {
              return c.payload.doc.data();
            }))
    ).subscribe(carousel => this.items = carousel);
  }

}
