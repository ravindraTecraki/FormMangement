import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PLoginComponent } from './p-login/p-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PSignupComponent } from './p-signup/p-signup.component';



@NgModule({
  declarations: [PLoginComponent,RegistrationComponent,PSignupComponent ],
  imports: [
    CommonModule,ReactiveFormsModule
  ]
})
export class HospitalModule { }
