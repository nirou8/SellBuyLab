import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
name: string;
description: string;
price: string;
id : number
  constructor(private route: ActivatedRoute, private ProdS: ProductsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    for(let i = 0; i<this.ProdS.products.length; i++){
      let prod = this.ProdS.products[i];
      if(prod.id == this.id){
        this.name = prod.name;
        this.price = prod.price;
        this.description = prod.description;
      }
    }

  }

}
