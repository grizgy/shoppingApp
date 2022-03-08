import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() "product" : Product;
  @Output()total : number = 0;
  @Output() emitGrandTotal = new EventEmitter<number>();

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  askForConfirmation(product : Product) {
    var userVal = confirm("Do you want to remove " + product.title + "?")
    if (userVal == true) {
      this.removeProduct(product)
    }
  }

  removeProduct(product : Product){
    this.cartService.removeCartItem(product);
    this.total = 0;
  }

  getQuantity() : number {
    return this.product.quantity;
    
  }

  setQuantity( inputNumber : number) {
    this.product.quantity = inputNumber;
    this.total = this.product.quantity * this.product.price;
    this.emitGrandTotal.emit(this.product.quantity);
   }

}
