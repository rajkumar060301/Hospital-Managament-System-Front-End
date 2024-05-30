import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Patinet } from '../patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent {

  patinets:Patinet=new Patinet();
  id :number = 0;
  constructor(private patientService: PatientService,private router : Router, private route :ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patinets=data;
    })
    
  }

}
