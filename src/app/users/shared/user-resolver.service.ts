import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { User } from './user.model';
import {UserDetail} from './user-detail.model'
import { UserService } from './user.service';

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = route.params['id'];
    
    /*return this.userService.getUser(id)
      .map((userDetail: any) => {
        if (userDetail) {
          return userDetail;
        }
        return new UserDetail();
 
      })
      .catch((error: any) => {
        console.log(`${error}. Heading back to user list`);
        this.router.navigate(['/users']);
        return of(null);
      });*/
      return of(new User())
  }
}
