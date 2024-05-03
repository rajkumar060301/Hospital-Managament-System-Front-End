import { Component } from '@angular/core';
import { Patinet } from '../patient';
import { PatientService } from '../services/patient.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  patients : Patinet[] = [];

  constructor(private patientService : PatientService, private router : Router){}
  ngOnInit(): void {

    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      return this.patients=data;
    })
  }

  deleteData(id:number){
    this.patientService.deletePatients(id).subscribe(
      (response: any) => { 
        console.log(response.message);
        this.goPatients();
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting appointment:', error);
      }
    );
  }


  goPatients() {
    const currentUrl = this.router.url; 
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => { 
      this.router.navigate([currentUrl]);
    });  
  }
  

}
