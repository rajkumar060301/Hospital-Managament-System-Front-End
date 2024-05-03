import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CreateMedicineService } from '../services/create-medicine.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {

  medicine = {
    drugName: '',
    stock: ''
  };

  constructor(private createMedicineServices:CreateMedicineService, private router:Router){}

  onSubmit(form: NgForm) {
    this.createMedicineServices.insertMedicine(this.medicine).subscribe(
      response => {
        console.log('Success:', response);
        this.goToMedicine();
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  goToMedicine(){
    this.router.navigate(['/medicine'])
  }
}
