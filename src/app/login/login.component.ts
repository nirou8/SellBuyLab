import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

@ViewChild('password') password: ElementRef;
@ViewChild('sm') smm: ElementRef;

fColor : string = "#ff0000";
isOK = false;
fSize = 23;
  constructor(private router: Router) {
   
  }

  ngOnInit() {
  }


  loginUser(e){
    console.log(this.smm.nativeElement.innerText);
    console.log(this.password.nativeElement.value);
    let wrongCredentials = true;
   let accounts = JSON.parse(localStorage["accounts"]);
   for(let account of accounts){
     if(e.value == account.email && 
      this.password.nativeElement.value == account.password ){
        wrongCredentials = false;
        this.router.navigate(['/home']);
      }
   }

   if(wrongCredentials){
     alert("please verify your email or password")
   }

  }
}
