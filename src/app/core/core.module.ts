import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { EntityService } from './entity.service';
import { ExceptionService } from './exception.service';
import { MessageService } from './message.service';
import { NavComponent } from './nav/nav.component';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { ModalModule } from './modal/modal.module';
import { SpinnerModule } from './spinner/spinner.module';
import { ToastModule } from './toast/toast.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BreadcrumbModule } from "xng-breadcrumb";
import { AngularMaterialModule } from '../angular-material.module';

// imports: imports the module's exports. which is usually declarables and providers
// in our case the spinner has no providers.
//
// exports: exports modules AND components/directives/pipes that other modules may want to use
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, BreadcrumbModule,
    ModalModule, SpinnerModule, ToastModule,
    MatSidenavModule, BrowserAnimationsModule,
    AngularMaterialModule
  ],
  exports: [
    CommonModule, FormsModule, RouterModule,
    ModalModule, SpinnerModule, ToastModule, [NavComponent]
  ],
  declarations: [NavComponent],
  providers: [
    EntityService,
    ExceptionService,
    MessageService,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
