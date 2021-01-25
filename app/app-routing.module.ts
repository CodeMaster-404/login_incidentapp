import { LoginComponent } from 'src/app/main/auth/login/login.component';
import { HomescreenComponent } from './main/homescreen/homescreen.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomescreenComponent
  },

  // without this line login redirect doesn't work
  { path: 'login', component: LoginComponent},
  { path: '**', component: PageNotFoundComponent} // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
