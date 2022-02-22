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
  total : number = 0;
  
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(products => {
      this.products = products;
      this.total = this.cartService.getTotalPrice();
    })
    // console.log(this.total + " asdsfdsfds");

    // if (this.count == 0) {
    //   console.log("Your cart is empty")
    // } else { 
    //   console.log(this.count)
    // }
    
  }

  calculateTotalPrice () {
    this.total == this.cartService.getTotalPrice();
    console.log(this.total);
  }




}
