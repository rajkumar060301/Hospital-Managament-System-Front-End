import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

  fetchAppointment():Observable<any>{
    return this.httpClient.get("http://localhost:8080/api/v3/appointments");
}

baseUrl = "http://localhost:8080/api/v3/appointments";

deleteAppointments(id : number):Observable<object>{
  return this.httpClient.delete(`${this.baseUrl}/${id}`);
}



}
