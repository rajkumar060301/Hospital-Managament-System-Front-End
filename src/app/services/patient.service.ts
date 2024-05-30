import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patinet } from '../patient';
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

  private baseUrlPatient = "http://localhost:8080/api/v1/insert";
  createPatient(patient : any):Observable<any>{
    return this.httpClient.post(this.baseUrlPatient, patient);

  }

  deletePatients(id : number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  getPatientById(id:number):Observable<Patinet>{
    return this.httpClient.get<Patinet>(`${this.baseUrl}/${id}`);

  }


  updatePatientById(id : number, patient : Patinet):Observable<object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, patient);
  }


}
