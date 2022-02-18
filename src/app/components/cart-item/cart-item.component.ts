import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() "product" : Product;

  constructor() { }

  ngOnInit(): void {
  }

}
