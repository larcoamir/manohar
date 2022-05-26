import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthService} from '../../services/auth.service'
import { Observable, of, from } from 'rxjs';
import {Tenant} from './tenant.model';
import {environment} from '../../../environments/environment'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from 'src/app/users/shared/user.model';

@Injectable()
export class TenantService {
    //private _tenanttUrl = 'http://localhost:2342//api/tenant/';

    constructor(private http: HttpClient, private _authHttp: AuthService) { }

    getTenants(): Observable<Tenant[]> {
       /* return this._authHttp.AuthGet(this._tenanttUrl +'tenantlist')
            .map((response: Response) => <Tenant[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);*/
            return this.http.get<Tenant[]>(`${environment.apiUrl}tenants/`)
           // .catch
            //return from([]);
    }

    getTenantUsers(tenantId: number | any): Observable<User[]> {
        /* return this._authHttp.AuthGet(this._tenanttUrl +'tenantlist')
             .map((response: Response) => <Tenant[]> response.json())
             .do(data => console.log('All: ' +  JSON.stringify(data)))
             .catch(this.handleError);*/
             return this.http.get<User[]>(`${environment.apiUrl}tenants/${tenantId}/Users`)
            // .catch
             //return from([]);
     }
    private handleError(error: HttpResponse<any>) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        //return Observable.throw(error.json().error || 'Server error');
    }
}
