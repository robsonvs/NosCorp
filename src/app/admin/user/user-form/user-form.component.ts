import { UserService } from './../user.service';
import { User } from './../../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = new User();

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  save() {
    this.service.save(this.user);
  }
}
