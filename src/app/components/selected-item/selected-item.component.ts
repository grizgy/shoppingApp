import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {

  "productToConfigure" : Product;
  "quantityOfElement" : number = 1;

  sizes : string []= [
    'XS',
    'S',
    'M',
    'L'
  ];

  colors : string []= [
    'ivory',
    'mint',
    'wine',
    'indigo',
    'coal'
  ];

  constructor(private productService : ProductService, private route:ActivatedRoute, private cartService : CartService) { }

  ngOnInit(): void {
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('id'));
  this.productService.getProductById(productIdFromRoute).subscribe((prod) => this.productToConfigure = prod);
  }

  addTocart(product : Product){
    this.cartService.addProduct(product);
  }
  
  receiveTotal( inputNumber : number) {
   this.productToConfigure.quantity = inputNumber;
   this.quantityOfElement = inputNumber;
  }

  setColor(color:string) {
    this.productToConfigure.color = color;
  }

  setSize(size:string) {
    this.productToConfigure.size = size;
    }

}