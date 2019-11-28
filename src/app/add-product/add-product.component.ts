import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm : FormGroup;

  constructor() { }

  ngOnInit() {
   this.addProductForm = new FormGroup({
     'name' : new FormControl(null, [Validators.required, Validators.maxLength(20)]),
     'price' : new FormControl(null, Validators.required),
     'description' : new FormControl(null),
   });
  }

  addNewProduct(){
    console.log(this.addProductForm);
  }
 

}
