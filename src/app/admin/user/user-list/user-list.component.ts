import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { UserService } from './../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(
          u => ({id: u.payload.doc.id,
                ...u.payload.doc.data()})))
    ).subscribe(users => {this.users = users});
  }
}
