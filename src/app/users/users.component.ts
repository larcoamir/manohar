import { Component } from '@angular/core';

import { UserService } from './shared/user.service';

@Component({
  template: `<router-outlet></router-outlet>`,
  providers: [UserService]
})
export class UsersComponent  {}