import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { SplashScreenComponent } from './splash-screen.component';
import { LoginComponent } from './login/login.component'
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SplashScreenComponent },
  {
    path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), data: { title: 'Users', breadcrumb: { alias: 'Users' } }
    //canActivate:[AuthGuardService],
    //   canActivateChild:[AuthGuardService]
  },
  {
    path: 'tenants', loadChildren: () => import('./tenants/tenants.module').then(m => m.TenantsModule), data: { title: 'Tenants' } //'app/tenants/tenants.module#TenantsModule',
    // canActivate:[AuthGuardService],
    //   canActivateChild:[AuthGuardService]
  },
  {
    path: 'claims', loadChildren: () => import('./claims/claims.module').then(m => m.ClaimsModule), data: { title: 'Claims' } //'app/tenants/tenants.module#TenantsModule',
    // canActivate:[AuthGuardService],
    //   canActivateChild:[AuthGuardService]
  },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const authProviders = [
  AuthGuardService,
  AuthService,
  // AuthUserResolverService
]
