import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  "productToConfigure" : Product;

  constructor(private productService : ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('id'));
  this.productService.getProductById(productIdFromRoute).subscribe((prod) => this.productToConfigure = prod);
  }

}
