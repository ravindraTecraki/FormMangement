import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing-page/landing.component';
import { Hospital_reg } from './hospital/component/hospital_reg/hospital-re';
import { CommonModule } from '@angular/common';
import { HDashboardComponent } from './hospital/component/h-dashboard/h-dashboard.component';
import { HospitalLoginComponent } from './hospital/component/hospital_login/hospital_login.component';

const routes: Routes = [
  {
    path:'',
    component:LandingComponent
  }
, {
  path:'reg',
  component:Hospital_reg
}
,

{
  path:"dashboard",
  component:HDashboardComponent
}
,
{
  path:"login",
  component:HospitalLoginComponent
}

];



@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],


exports: [RouterModule]
})
export class AppRoutingModule { }
