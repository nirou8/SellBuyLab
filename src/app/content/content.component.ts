import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  addProductForm : FormGroup;

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
    this.addProductForm = new FormGroup({
      'name' : new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      'price' : new FormControl(null, Validators.required),
      'description' : new FormControl(null),
    });
  }

  addNewProduct(){
    this.laptops.push({
      name : this.addProductForm.value.name, 
      price : this.addProductForm.value.price,
      description :this.addProductForm.value.description
    });
  }

}
