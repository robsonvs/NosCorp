import { Component, OnInit } from '@angular/core';

import { ComponentService } from '../../components/component.service';
import { VisualComponent } from './../../model/visual-component';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  visualcomponent: VisualComponent = new VisualComponent();
  categories: Observable<any[]>;
  id: string;

  constructor(private service: ComponentService,
              private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      service.getById(this.id).subscribe(c =>
          this.visualcomponent = c as VisualComponent);
    }
  }

  ngOnInit(): void {
    this.categories = this.service.getCategory();
  }

  save() {
    if (this.id) {
      this.service.update(this.id, this.visualcomponent);
    } else {
      this.service.create(this.visualcomponent);
      this.visualcomponent = new VisualComponent();
    }
  }
}
