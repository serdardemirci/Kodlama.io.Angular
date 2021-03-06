import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1 = {productId:1, productName:"Bardak"}
  product2 = {productId:2, productName:"Masa"}

  products = [this.product1, this.product2]
  constructor() { }

  ngOnInit(): void {
  }

}
