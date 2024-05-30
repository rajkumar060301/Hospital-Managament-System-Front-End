import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../services/medicine.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {
  medicine:Medicine=new Medicine();
  id :number = 0;
  constructor(private medicineService: MedicineService,private router : Router, private route :ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data;
    })
    
  }


  onUpdate(){
    this.medicineService.updateMedicineById(this.id, this.medicine).subscribe(data=>{
      this.goToMedicine();
    });

  }
  goToMedicine(){
    this.router.navigate(['/medicine'])
  }
}
