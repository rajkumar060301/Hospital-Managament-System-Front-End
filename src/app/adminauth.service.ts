import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }
  authenticate(username :string, password: string){
    if(username=="raja" && password=="raja"){
      sessionStorage.setItem("username", username);
      return true;
    }
    else{
      return false;
    }

  }

isUserLogin(){
  console.log("admin user login to hain");
  let user = sessionStorage.getItem("username");
  return !(user==null);
}

logOut(){
  console.log("admin logout user ho gya")
  sessionStorage.removeItem("username");

}


}
