import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorauthService } from '../doctorauth.service';

@Component({
  selector: 'app-doctorloginportal',
  templateUrl: './doctorloginportal.component.html',
  styleUrl: './doctorloginportal.component.css'
})
export class DoctorloginportalComponent {
  username : string = "";
  password : string = "";
  inValidLogin = false;

  constructor(private doctorAuthService : DoctorauthService,private router:Router){}
  checkLogin(){
    if(this.doctorAuthService.authenticate(this.username, this.password)){
      this.router.navigate(['doctordashboard']);
      this.inValidLogin=false;
    }
    else{
      alert("Login creditional not match");
      this.router.navigate(['home']);
      this.inValidLogin=true;
    }

  }

}
