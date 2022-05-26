import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ClaimsRoutingModule, routedComponents } from './claims-routing.module';
import { GridModule } from "@progress/kendo-angular-grid";
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { ClaimsService } from './shared/claims.service';
import { AngularMaterialModule } from '../angular-material.module';
import { ClaimsComponent } from './claims.component';
import { ClaimComponent } from './claims/claim.component';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
@NgModule({
  imports: [HttpClientModule, FormsModule, ReactiveFormsModule, AngularMaterialModule,
    ClaimsRoutingModule, GridModule, DialogModule,
    ButtonsModule
  ],
  declarations: [
    ClaimsListComponent, routedComponents, ClaimsComponent, ClaimComponent
  ],
  providers: [
    ClaimsService
  ]
})
export class ClaimsModule { }
