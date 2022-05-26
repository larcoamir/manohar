import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from './user.model';
import { UserDetail} from './user-detail.model'
import { CONFIG, ExceptionService, MessageService, SpinnerService } from '../../core';

let usersUrl = CONFIG.baseUrls.users;

@Injectable()
export class UserService {
  onDbReset = this.messageService.state;
  private BASE_URL: string = 'http://localhost:2342//api/useraccount/';

  constructor(private http: HttpClient,
    private exceptionService: ExceptionService,
    private messageService: MessageService,
    private spinnerService: SpinnerService) {
    this.messageService.state.subscribe((state: any) => this.getUsers());
  }

  addUser(userDetail: UserDetail) {
    let body = JSON.stringify(userDetail);
    this.spinnerService.show();
    /* return <Observable<UserDetail>>this.http
      .post(`${usersUrl}`, body)
      .map(res => <UserDetail>res.json().data)
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide()); */
      return of(<UserDetail>{});
  }

  deleteUser(userDetail: UserDetail) {
    /* this.spinnerService.show();
    return <Observable<UserDetail>>this.http
      .delete(`${usersUrl}/${userDetail.id}`)
      .map(res => this.extractData<UserDetail>(res))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide()); */
      return of(<UserDetail>{});
  }

  getUsers() {
    this.spinnerService.show();
   /*  return <Observable<User[]>>this.http
      .get(this.BASE_URL+ 'userlist')
            .map((response: Response) => <User[]> response.json())
      
      .catch(this.exceptionService.catchBadResponse)
      
      .finally(() => this.spinnerService.hide()); */
     // return this.http.get(`${}/userlist`)
      return of(<UserDetail[]>{})
  }

  /* private extractData<T>(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return <T>(body && body.data || {});
  } */

  getUser(username: string) {
    /*this.spinnerService.show();
    return <Observable<UserDetail>>this.http
      .get(this.BASE_URL + 'user/' + username )
      .map((response: Response) => <UserDetail> response.json())
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());*/
      return of(<UserDetail>{});
  }

  updateUser(userDetail: UserDetail) {
    let body = JSON.stringify(userDetail);
    /*this.spinnerService.show();

    return <Observable<UserDetail>>this.http
      .put(`${usersUrl}/${userDetail.id}`, body)
      .map(res => this.extractData<UserDetail>(res))
      .catch(this.exceptionService.catchBadResponse)
      .finally(() => this.spinnerService.hide());
      */
     return of(<UserDetail>{});
  }
}
