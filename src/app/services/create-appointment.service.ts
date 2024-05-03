import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateAppointmentService {

  private apiUrl = 'http://localhost:8080/api/v3/insert';

  constructor(private httpClient: HttpClient) { }

  createAppointment(appointment: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, appointment);
  }
}
