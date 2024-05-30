import { Component } from '@angular/core';
import { Patinet } from '../patient';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {


  patinets:Patinet=new Patinet();

  constructor(private patientService : PatientService, private router:Router){}
  savePatient(){
    this.patientService.createPatient(this.patinets).subscribe(data=>{
      console.log(data);
      this.goToPatient();
    })

  }

  onSubmit(){
    this.savePatient();
  }
  goToPatient(){
    this.router.navigate(['/doctordashboard'])
  }
}
