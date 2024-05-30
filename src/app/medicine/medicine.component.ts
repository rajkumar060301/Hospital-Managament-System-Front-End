import { Component } from '@angular/core';
import { MedicineService } from '../services/medicine.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent {
  medicineData: any;

  constructor(private medicineService:MedicineService, private router : Router) { }
  ngOnInit(): void {
    this.medicineService.fetchData().subscribe((data) => {
        this.medicineData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );


  }

  updateMedicine(id : number){
    return this.goToMedicine(id);

  }

  deleteMedicine(id : number){
    this.medicineService.deleteMedicine(id).subscribe(
      (response: any) => { 
        console.log(response.message);
        this.goToMedicines();
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting medicine:', error);
      }
    );

  }

  goToMedicine(id : number){
    return this.router.navigate(['/update-medicine',id]);
  }

  goToMedicines(){
    const currentUrl = this.router.url; 
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => { 
      this.router.navigate([currentUrl]);
    });  
  }

}
