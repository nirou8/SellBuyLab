import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  account = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    country: '',
    state: '',
    city: '',
    zip: ''
  };

isDisabled = '';
pass1: string;
pass2: string;
errorStyle = 'none';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onChangeCountry() {
    if (this.isDisabled == '') {
      this.account.city = '';
      this.account.state = '';
      this.account.zip = '';
    }
  }

  checkPasswordMatching(){
    if(this.pass1 !== this.pass2){
      console.log("Matching Error")
      this.errorStyle="solid 2px red"
    }else{
      this.errorStyle = "none"
    }
  }

  createAccount() {
    let existingAccount = false;
    this.account.country = this.isDisabled;
    this.account.password = this.pass1;
   if(localStorage['accounts'] ) {
     let accounts = JSON.parse(localStorage['accounts']);
     for(let i=0; i<accounts.length; i++){
       if(this.account.email == accounts[i].email){
         existingAccount = true;
         alert("account already existing");
         break;
       }
     }

     if(!existingAccount){
     accounts.push(this.account)
     localStorage['accounts'] = JSON.stringify(accounts);
     this.router.navigate(['/'])
     }
   }else{
    localStorage['accounts'] = JSON.stringify([this.account]);
    this.router.navigate(['/'])
   }
   
  }

}
