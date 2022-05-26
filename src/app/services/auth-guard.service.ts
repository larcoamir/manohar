import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  private hasCurrentUserData: boolean = false;
  constructor(private authService: AuthService, private router: Router) {
    //this.authService.
  }
/**
 * 
 * @param route 
 * @param state 
 */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean { //
    //if(this.authService.loggedIn) {return true;}
    //this.router.navigate(["unauthorized"]);
    return this.authService.getUser().then(user => {
      if(user == null || user.expired)
      {
        this.router.navigate(["login"]);
        return false;
      }else{
        return true;
      }
    });
  }
    canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.canActivate(route, state);
  }
}

