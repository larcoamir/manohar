import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { ToastService } from './toast/toast.service';

@Injectable()
export class ExceptionService {
  constructor(private toastService: ToastService) { }

  catchBadResponse: (errorResponse: any) => Observable<any> = (errorResponse: any) => {
    /*let res = <Response>errorResponse;
    let err = res.json();
    let emsg = err ?
      (err.error ? err.error : JSON.stringify(err)) :
      (res.statusText || 'unknown error');
    this.toastService.activate(`Error - Bad Response - ${emsg}`);
    return Observable.of(false);*/
    return of(false);
  };
}
