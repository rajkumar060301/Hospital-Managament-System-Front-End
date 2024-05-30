import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AdminauthService } from './adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminauthgardService implements CanActivate {

  constructor(private authService:AdminauthService, private router:Router) { }
  canActivate(){
    if(this.authService.isUserLogin()){
      return true;
    }
    else{
      this.router.navigate(['adminlogin']);
      return false;
    }
    
  }


}
