import { Component } from '@angular/core';
import { MedicineService } from '../services/medicine.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent {
  medicineData: any;

  constructor(private medicineService:MedicineService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.medicineService.fetchData().subscribe((data) => {
      console.log(data);
        this.medicineData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }


}
