import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from '../medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:8080/api/v2/medicines';

  fetchData(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }

  getMedicineById(id:number):Observable<Medicine>{
    return this.http.get<Medicine>(`${this.baseUrl}/${id}`);

  }

  updateMedicineById(id:number, medicine : Medicine):Observable<object>{
    return this.http.put(`${this.baseUrl}/${id}`, medicine);

  }

  deleteMedicine(id : number):Observable<object>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  
  }

} 
