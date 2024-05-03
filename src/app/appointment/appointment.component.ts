import { Component } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  responseAppointment : any;

  constructor(private appoimentServices:AppointmentService,private router: Router){}

  ngOnInit(): void {
    return this.appointmetData();
    
  }

  appointmetData(){
    this.appoimentServices.fetchAppointment().subscribe(data=>{
      return this.responseAppointment=data;
    })
  }
  deleteAppointment(id: number) {
    this.appoimentServices.deleteAppointments(id).subscribe(
      (response: any) => { 
        console.log(response.message);
        this.goAppointment();
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting appointment:', error);
      }
    );
  }

  goAppointment() {
    const currentUrl = this.router.url; 
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => { 
      this.router.navigate([currentUrl]);
    });  
  }

}
