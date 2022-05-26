import { NgModule } from '@angular/core';

import { UserButtonComponent } from './shared/user-button/user-button.component';

import { routedComponents, UsersRoutingModule } from './users-routing.module';

import { SharedModule } from '../shared/shared.module';
import { UserService } from './shared/user.service'; 

@NgModule({
  imports: [SharedModule, UsersRoutingModule],
  declarations: [UserButtonComponent, routedComponents],
  providers: [UserService]
})
export class UsersModule { }
// avoids having to lazy load with loadChildren: "app/vehicles/vehicle.module#VehicleModule"