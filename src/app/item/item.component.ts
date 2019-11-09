import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  btnText: string = 'See more';

  laptop = {
    name : "ASUS", 
    price : "1400$", 
    description : "Asus Vivobook 15 FHD Ordinateur portable 15,6 FHD Intel Core i3, 8 Go DDR4 RAM, 128 Go M.2 SSD, Windows 10 S, F512FA-AB34, Gris ardoise."
  };

  btnStatus : boolean = true;

  constructor() {

    setTimeout( () => { this.btnStatus = false; } ,5000);

   }

   seeDetails(){
    this.btnStatus = true;
    setTimeout( () => { this.btnStatus = false; } ,5000);
   }

   infos(){
     alert("this is the Card Alert")
   }

  ngOnInit() {
  }

}
