import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HospitalRegistrationComponent } from './hospital-registration/hospital-registration.component';
import { HospitalloginComponent } from './hospital-registration/hospital-registration.component';

const routes: Routes = [
  {
    path:'',
    component:LandingComponent
  },{
    path:'hospital_registration',
    component:HospitalRegistrationComponent
  }



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
