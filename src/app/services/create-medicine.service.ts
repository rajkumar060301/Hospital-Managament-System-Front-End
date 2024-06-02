import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateMedicineService {
  //private apiUrl = 'http://localhost:8080/api/v2/insert';
  private apiUrl = 'https://hospital-management-system-backend-88dw.onrender.com/api/v2/insert';

  constructor(private http: HttpClient) { }

  insertMedicine(medicine: any): Observable<any> {
    return this.http.post(this.apiUrl, medicine);
  }
}
