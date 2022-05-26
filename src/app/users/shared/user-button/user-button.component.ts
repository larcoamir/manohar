import { Component, Input, OnInit } from '@angular/core';

import { User } from '../user.model';

@Component({
  //moduleId: module.id,
  selector: 'user-button',
  templateUrl: 'user-button.component.html',
  styleUrls: ['user-button.component.css'],
})
export class UserButtonComponent implements OnInit {
  @Input()
  user: User = new User;

  constructor() {}

  ngOnInit() {
  }

}
