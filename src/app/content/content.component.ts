import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
laptops = [
  {name : "ASUS", price : "1400$", description : "this is an ASUS laptop"},
{name : "Lenovo", price : "1200$", description : "this is a Lenovo laptop"},
{name : "ACER", price : "1500$", description : "this is an ACER laptop"},
{name : "DELL", price : "2000$", description : "this is a DELL laptop"},
{name : "Samsung", price : "1800$", description : "this is a Samsung laptop"},
{name : "HP", price : "1600$", description : "this is an HP laptop"},
];
  constructor() { }

  ngOnInit() {
  }

}
