import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorRegisterService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = "http://localhost:8080/api/v4/doctor/register"

  createDoctor(doctor: any):Observable<any>{
    return this.httpClient.post(this.baseUrl,doctor)

  }
}
