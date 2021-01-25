import { BrowserModule } from '@angular/platform-browser';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AppModule } from 'src/app/app.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor, ErrorInterceptor, fakeBackendProvider } from 'src/app/_helpers';
// import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule(
{
  declarations: [
    // DashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AppModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
],
})
export class AuthModule {}

