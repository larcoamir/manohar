import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserSessionExpired(): Promise<any> {
    return new Promise((resolve) => resolve(true));
  }
  getUser(): Promise<any> {
    return new Promise((resolve) => resolve({}));
  }

  constructor() { }
}
