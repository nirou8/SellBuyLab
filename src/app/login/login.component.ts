import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
connectedUser = {
  first_name: '',
    last_name: '',
    email: '',
    password: '',
    country: '',
    state: '',
    city: '',
    zip: ''
}
fColor : string = "#ff0000";
isOK = false;
fSize = 23;
  constructor(private router: Router) {
   
  }

  ngOnInit() {
  }


  loginUser(){
    let wrongCredentials = true;
   let accounts = JSON.parse(localStorage["accounts"]);
   for(let account of accounts){
     if(this.connectedUser.email == account.email && 
      this.connectedUser.password == account.password ){
        wrongCredentials = false;
        this.router.navigate(['/home']);
      }
   }

   if(wrongCredentials){
     alert("please verify your email or password")
   }

  }
}
