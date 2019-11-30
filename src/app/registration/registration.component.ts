import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('f') registrationForm: NgForm;
  categories = [{name : 'books', label : 'Books'}, {name : 'video_games', label : 'Video Games'},
  {name : 'movies', label : 'Movies'}, {name : 'electonics', label : 'Electonics'},
  {name : 'music', label : 'Music'}, {name : 'sports', label : 'Sports'}];

  account = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    categories : []
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }


  createAccount() {
console.log(this.registrationForm);
this.account.first_name = this.registrationForm.value.fname;
this.account.last_name = this.registrationForm.value.lname;
this.account.email = this.registrationForm.value.email;
this.account.password = this.registrationForm.value.pass1;
this.account.country = this.registrationForm.value.country;
this.account.state = this.registrationForm.value.state;
this.account.city = this.registrationForm.value.city;
this.account.zip = this.registrationForm.value.zip;

for (const key in this.registrationForm.value.categories) {
      const selected = this.registrationForm.value.categories[key];
      if (selected) {
      this.account.categories.push(key);
     }
  }

console.log(this.account);
    let existingAccount = false;
    if (localStorage.accounts) {
     const accounts = JSON.parse(localStorage.accounts);
     for (let i = 0; i < accounts.length; i++) {
       if ( this.registrationForm.value.email === accounts[i].email) {
         existingAccount = true;
         alert('account already existing');
         break;
       }
     }

     if (!existingAccount) {
     accounts.push(this.account);
     localStorage.accounts = JSON.stringify(accounts);
     this.router.navigate(['/']);
     }
   } else {
    localStorage.accounts = JSON.stringify([this.account]);
    this.router.navigate(['/']);
   } 

  }

}
