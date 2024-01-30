import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalLoginComponent } from './component/hospital_login/hospital_login.component';
import { Hospital_reg } from './component/hospital_reg/hospital-re';
import { HDashboardComponent } from './component/h-dashboard/h-dashboard.component';


const routes: Routes = [
  {
    path: 'hospital',
    children: [
      {
        path: 'login',
        component: HospitalLoginComponent,
      },
      {
        path: 'register',
        component: Hospital_reg,
      },
      {
        path: 'dashboard',
        component: HDashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }