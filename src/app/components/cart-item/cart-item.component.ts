import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() "product" : Product;
  products : Product[] = [];
  
  constructor(private productService : ProductService ) { }

  ngOnInit(): void {
   this.productService.getProducts().subscribe((products) =>{console.log(this.products = products)} );
  //  this.productService.getProductById(this.product);
  }

}
