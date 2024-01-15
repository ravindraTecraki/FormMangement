import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HospitalRegistrationComponent } from './hospital-registration/hospital-registration.component';
import { HospitalloginComponent } from './hospitallogin/hospitallogin.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HospitalRegistrationComponent,
    HospitalloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
