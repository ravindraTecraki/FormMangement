import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalLoginComponent } from './component/hospital_login/hospital_login.component';
import { Hospital_reg } from './component/hospital_reg/hospital-re';
import { HDashboardComponent } from './component/h-dashboard/h-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [HospitalLoginComponent,Hospital_reg, HDashboardComponent ],
  imports: [
    CommonModule,ReactiveFormsModule
  ]
})
export class HospitalModule { }
