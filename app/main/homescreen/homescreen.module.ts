import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './../auth/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './../auth/auth.module';

const routes: Routes = [
    { path: '', redirectTo:'/homescreen', pathMatch: 'full'},
    { path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./../auth/auth.module').then(m => m.AuthModule)
  },

  ];


@NgModule({
  declarations: [ ],
  imports: [
      RouterModule.forChild(routes),
      CommonModule,

  ],
  exports: [RouterModule]
})
export class HomeScreenModule { }
