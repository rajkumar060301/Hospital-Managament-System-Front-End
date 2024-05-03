import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MedicineComponent } from './medicine/medicine.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';

const routes: Routes = [
  {path:"admin", component:AdmindashboardComponent},
  {path:"medicine", component:MedicineComponent},
  {path:"appointment", component:AppointmentComponent},
  {path:"create-medicine", component:CreateMedicineComponent},
  {path:"create-appointment", component:CreateAppointmentComponent},
  {path:"home", component:HomeComponent},
  {path:"", redirectTo:'home' , pathMatch:'full' },
  {path:"doctorlogin", component:DoctorloginComponent},
  {path:"create-patient", component:CreatePatientComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
