import { Component } from '@angular/core';
import { DoctorRegister } from '../doctor-register';
import { DoctorRegisterService } from '../doctor-register.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrl: './doctor-register.component.css'
})
export class DoctorRegisterComponent {

  doctorRegister: DoctorRegister = new DoctorRegister();
  submitted = false
  emailExists = false;
  phoneExists = false;
  constructor(private doctorRegisterService : DoctorRegisterService, private router:Router){}
  registerDoctor(form: NgForm){
    this.submitted = true;
    if (form.invalid) {
      return;
    }

    this.doctorRegisterService.createDoctor(this.doctorRegister).subscribe(response=>{
      console.log(response);
      this.goToDoctorLogin();
    },
    error => {
      console.error('Error:', error);
    }
  );
}

goToDoctorLogin(){
  this.router.navigate(['/doctorlogin'])
}

}
