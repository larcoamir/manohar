import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, authProviders } from './app-routing.module';
import { AppComponent } from './app.component';


import { PageNotFoundComponent } from './page-not-found.component';
import { SplashScreenComponent } from './splash-screen.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
//import { UserService } from './shared/services/user.service';

// from slt
import { CoreModule } from './core/core.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { BreadcrumbModule } from "xng-breadcrumb";
import { BreadcrumbService } from 'xng-breadcrumb';
import { AngularMaterialModule } from './angular-material.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SplashScreenComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    MatSidenavModule,
    BreadcrumbModule,
    AngularMaterialModule
  ],
  providers: [authProviders, BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
