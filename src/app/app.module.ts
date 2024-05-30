import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MedicineComponent } from './medicine/medicine.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PatientService } from './services/patient.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DoctorloginComponent } from './doctordashboard/doctorlogin.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DoctorloginportalComponent } from './doctorloginportal/doctorloginportal.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    MedicineComponent,
    CreateMedicineComponent,
    CreateAppointmentComponent,
    HomeComponent,
    DoctorloginComponent,
    CreatePatientComponent,
    UpdatePatientComponent,
    ViewPatientComponent,
    UpdateMedicineComponent,
    DoctorloginportalComponent,
    AdminloginComponent,
    DoctorRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
