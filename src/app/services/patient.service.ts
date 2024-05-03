import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patinet } from '../patinet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor( private httpClient : HttpClient) { }
  private baseUrl = "http://localhost:8080/api/v1/patients";
  getPatientList():Observable<Patinet[]>{
    return  this.httpClient.get<Patinet[]>(`${this.baseUrl}`);
  }


}
