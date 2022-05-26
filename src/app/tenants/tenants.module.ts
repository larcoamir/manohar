import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
//import { HttpModule, JsonpModule} from '@angular/http';
import {TenantListComponent} from './tenant-list/tenant-list.component';
import {TenantService} from './shared/tenant.service';
import { routedComponents, TenantsRoutingModule } from './tenants-routing.module';
import {GridModule} from "@progress/kendo-angular-grid";
import { DialogModule } from '@progress/kendo-angular-dialog';
import { TenantUsersDetailsComponent } from './tenant-users-details/tenant-users-details.component';


@NgModule({
    imports: [HttpClientModule,FormsModule, ReactiveFormsModule,
    TenantsRoutingModule,GridModule,DialogModule

  ],
  declarations: [
    TenantListComponent, routedComponents, TenantUsersDetailsComponent
  ],
  providers: [
    TenantService
  ]
})
export class TenantsModule {}
