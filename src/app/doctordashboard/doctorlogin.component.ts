import { Component } from '@angular/core';
import { Patinet } from '../patient';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { DoctorauthService } from '../doctorauth.service';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrl: './doctorlogin.component.css'
})
export class DoctorloginComponent {
  patients : Patinet[] = [];

  constructor(private patientService : PatientService, private router : Router, private doctorAuthService:DoctorauthService){}
  ngOnInit(): void {

    this.getPatients();
  }

  updatePatient(id: number){
    this.router.navigate(['update-patient',id]);


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


  viewPatients(id:number){
    return this.router.navigate(['view-patient',id]);


  }
  goPatients() {
    const currentUrl = this.router.url; 
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => { 
      this.router.navigate([currentUrl]);
    });  
  }

  logOut(){
    this.doctorAuthService.logOut();
    return this.router.navigate(['home']);
  }


}
