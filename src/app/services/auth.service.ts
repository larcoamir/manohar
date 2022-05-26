import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { UserManager, Log, MetadataService, User, UserManagerSettings } from 'oidc-client';
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUser(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  startSignoutMainWindow() {
    throw new Error('Method not implemented.');
  }
  startSigninMainWindow() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
