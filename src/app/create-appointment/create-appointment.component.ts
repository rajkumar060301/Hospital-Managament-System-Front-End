import { Component } from '@angular/core';
import { CreateAppointmentService } from '../services/create-appointment.service';
import { NgForm } from '@angular/forms';
import { Appointment } from '../appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {
  appointments : Appointment =new Appointment();

  constructor(private createAppointmentService:CreateAppointmentService,private router: Router){}


saveAppointment(){
  this.createAppointmentService.createAppointment(this.appointments).subscribe(
    response => {
      this.goAppointment();
      
    },
    error => {
      console.error('Error:', error);
    }
  );
}
onSubmit() {
  this.saveAppointment();

}

goAppointment(){
  this.router.navigate(['/appointment']);
}
}
