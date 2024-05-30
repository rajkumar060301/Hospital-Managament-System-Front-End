import { Component } from '@angular/core';
import { Patinet } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {
  patinets:Patinet=new Patinet();
  id :number = 0;
  constructor(private patientService: PatientService,private router : Router, private route :ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patinets=data;
    })
    
  }
  onUpdate(){
    this.patientService.updatePatientById(this.id,this.patinets).subscribe(data=>{
      this.goToDoctorDashboard();
    });

    
  }
  goToDoctorDashboard(){
    return this.router.navigate(['/doctordashboard'])
  }
}
