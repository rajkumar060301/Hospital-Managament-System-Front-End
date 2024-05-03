import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/v2/medicines');
  }

  
}
