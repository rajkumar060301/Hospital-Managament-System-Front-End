import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MedicineComponent } from './medicine/medicine.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DoctorloginComponent } from './doctordashboard/doctorlogin.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DoctorloginportalComponent } from './doctorloginportal/doctorloginportal.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminauthgardService } from './adminauthgard.service';
import { DoctorauthgardService } from './doctorauthgard.service';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';


const routes: Routes = [
  {path:"admin", component:AdmindashboardComponent,canActivate:[AdminauthgardService]},
  {path:"medicine", component:MedicineComponent,canActivate:[DoctorauthgardService]},
  {path:"appointment", component:AppointmentComponent,canActivate:[AdminauthgardService]},
  {path:"create-medicine", component:CreateMedicineComponent,canActivate:[DoctorauthgardService]},
  {path:"create-appointment", component:CreateAppointmentComponent,canActivate:[AdminauthgardService]},
  {path:"home", component:HomeComponent},
  {path:"", redirectTo:'home' , pathMatch:'full' },
  {path:"doctordashboard", component:DoctorloginComponent,canActivate:[DoctorauthgardService]},
  {path:"create-patient", component:CreatePatientComponent,canActivate:[DoctorauthgardService]},
  {path:"update-patient/:id", component:UpdatePatientComponent,canActivate:[DoctorauthgardService]},
  {path:"view-patient/:id", component:ViewPatientComponent,canActivate:[DoctorauthgardService]},
  {path:"update-medicine/:id", component:UpdateMedicineComponent,canActivate:[DoctorauthgardService]},
  {path:"doctorlogin", component:DoctorloginportalComponent},
  {path:"adminlogin", component:AdminloginComponent},
  {path:"doctor-register", component:DoctorRegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
