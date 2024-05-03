import { Component } from '@angular/core';
import { Patinet } from '../patient';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrl: './doctorlogin.component.css'
})
export class DoctorloginComponent {
  patients : Patinet[] = [];

  constructor(private patientService : PatientService){}
  ngOnInit(): void {

    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      return this.patients=data;
    })
  }

}
