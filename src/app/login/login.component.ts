import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'login-screen',
  templateUrl: './login.component.html',
  
})
export class LoginComponent implements OnInit {
  isExpired: boolean = false;

  constructor(private location:Location,
   private service: AuthService,
   private userService: UserService) {
     this.userService.isUserSessionExpired().then( (expired : any) =>{
      this.isExpired = expired;
    });

  }

  ngOnInit() {

    

  }
  
  login() {
    this.service.startSigninMainWindow();
  }

  logout() {
    this.service.startSignoutMainWindow();
  }

  goback() {
    // this.location.back();
  }

}
