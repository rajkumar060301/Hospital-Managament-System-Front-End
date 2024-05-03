import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { MedicineComponent } from './medicine/medicine.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';

const routes: Routes = [
  {path:"admin", component:AdmindashboardComponent},
  {path:"", component:AdmindashboardComponent},
  {path:"medicine", component:MedicineComponent},
  {path:"appointment", component:AppointmentComponent},
  {path:"create-medicine", component:CreateMedicineComponent},
  {path:"create-appointment", component:CreateAppointmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
