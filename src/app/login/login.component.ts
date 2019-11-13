import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myEmail : string = '';
fColor : string = "#ff0000";
isOK = false;
fSize = 23;
  constructor() {
   
  }

  ngOnInit() {
  }

  checkEmail(event: Event){
    console.log(event);
    this.myEmail = (<HTMLInputElement> event.target).value;
  }
}
