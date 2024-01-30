import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalRoutingModule } from './hospital-routing.module';
import { HospitalLoginComponent } from './component/hospital_login/hospital_login.component';
import { Hospital_reg } from './component/hospital_reg/hospital-re';
import { HDashboardComponent } from './component/h-dashboard/h-dashboard.component';
import { FormsComponent } from './component/h-dashboard/forms/forms.component';
@NgModule({
  declarations: [HospitalLoginComponent,Hospital_reg,HDashboardComponent, FormsComponent],
  imports: [
    CommonModule,
    HospitalRoutingModule
  ],
   exports:[HDashboardComponent,HospitalLoginComponent,Hospital_reg]

})
export class HospitalModule { }
