import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorauthService {

  constructor(private httpClient : HttpClient) { }

  //private apiUrl = 'http://localhost:8080/api/v4/doctor/doctorlist';
  private apiUrl = 'https://hospital-management-system-backend-88dw.onrender.com/api/v4/doctor/doctorlist';
  authenticate(username :string, password: string){
    if(username=="rajkumar" && password=="rajkumar"){
      sessionStorage.setItem("username", username);
      return true;
    }
    else{
      return false;

    }

  }

  isUserLogin(){
    console.log("Doctor user login to hain");
    let user = sessionStorage.getItem("username");
    return !(user==null);
  }
  
  logOut(){
    console.log("Doctor logout user ho gya")
    sessionStorage.removeItem("username");
  
  }

}
