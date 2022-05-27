import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ClaimsRoutingModule, routedComponents } from './claims-routing.module';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import { ClaimsService } from './shared/claims.service';
import { AngularMaterialModule } from '../angular-material.module';
import { ClaimsComponent } from './claims.component';
import { ClaimComponent } from './claims/claim.component';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { FormFieldModule, InputsModule } from "@progress/kendo-angular-inputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { ProgressBarModule } from "@progress/kendo-angular-progressbar";
import { IconsModule } from '@progress/kendo-angular-icons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { EditService } from './claims/edit.service';
@NgModule({
  imports: [
    FormsModule, IconsModule, CommonModule,
    HttpClientModule, FormsModule, ReactiveFormsModule, AngularMaterialModule, ClaimsRoutingModule,
    GridModule, DialogModule, ButtonsModule, LayoutModule, InputsModule, LabelModule, DropDownsModule,
    ProgressBarModule, FormFieldModule
  ],
  declarations: [
    ClaimsListComponent, routedComponents, ClaimsComponent, ClaimComponent
  ],
  providers: [
    ClaimsService, {
      deps: [HttpClient],
      provide: EditService,
      useFactory: (jsonp: HttpClient) => () => new EditService(jsonp),
    },
  ]
})
export class ClaimsModule { }
