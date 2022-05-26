import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantComponent } from './tenant/tenant.component';


const routes: Routes = [
  {
    path: '',
    component: TenantListComponent,
    children: [
      {
        path: ':id',
        component: TenantComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class TenantsRoutingModule { }

export const routedComponents = [TenantComponent, TenantListComponent];