import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() "product" : Product;
  total : number = 10;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  removeProduct(product : Product){
    this.cartService.removeCartItem(product);
  }

  receiveTotal( total : number) {
    this.total = total;
  }

}
