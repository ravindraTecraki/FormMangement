import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

import { PLoginComponent } from './hospital/p-login/p-login.component';
import { RegistrationComponent } from './hospital/registration/registration.component';
import { PSignupComponent } from './hospital/p-signup/p-signup.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path:'',
    component:LandingComponent
  }
, {
  path:'login',
  component:PLoginComponent
}
,{
  path:'reg',
  component:RegistrationComponent
},{
  path:'signup',
  component:PSignupComponent
}

];



@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],


exports: [RouterModule]
})
export class AppRoutingModule { }
