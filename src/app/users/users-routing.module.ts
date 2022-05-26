import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { UserResolver } from './shared/user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UserListComponent,
      },
      {
        path: ':id',
        component: UserComponent,
        resolve: {
          user: UserResolver
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserResolver]
})
export class UsersRoutingModule { }

export const routedComponents = [UsersComponent, UserListComponent, UserComponent];
