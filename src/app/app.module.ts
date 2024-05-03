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

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    MedicineComponent,
    CreateMedicineComponent,
    CreateAppointmentComponent,
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
