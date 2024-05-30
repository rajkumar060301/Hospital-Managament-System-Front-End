import { Injectable } from '@angular/core';
import { DoctorauthService } from './doctorauth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoctorauthgardService implements CanActivate {

  constructor(private doctorAuthSErvice:DoctorauthService, private router:Router) { }
    canActivate(){
      if(this.doctorAuthSErvice.isUserLogin()){
        return true;
      }
      else{
        this.router.navigate(['doctorlogin']);
        return false;
      }
  }

}
