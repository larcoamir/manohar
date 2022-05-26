import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { ClaimComponent } from './claims/claim.component';
import { ClaimsComponent } from './claims.component';



const routes: Routes = [
  {
    path: '',
    component: ClaimsComponent,
    children: [
      {
        path: '',
        component: ClaimsListComponent,
      },
      {
        path: ':id',
        component: ClaimComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ClaimsRoutingModule { }

export const routedComponents = [ClaimsComponent, ClaimsListComponent];