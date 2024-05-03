import { Component } from '@angular/core';
import { Patinet } from '../patinet';
import { PatientService } from '../services/patient.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  patients : Patinet[] = [];

  constructor(private patientService : PatientService){}
  ngOnInit(): void {

    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      console.warn(data);
      return this.patients=data;
      console.warn(this.patients);
    })
  }
  

}
