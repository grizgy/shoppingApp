import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : Product[] = [];
  
  private count : number = 0;
  "total" : number;
  
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(products => {
      this.products = products;
    })
    this.total == this.cartService.getTotalPrice();
  }

  // calculateTotalPrice () {
  //   this.total == this.cartService.getTotalPrice();
  //   console.log(this.total);
  // }




}
