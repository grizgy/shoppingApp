import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.css']
})
export class SelectedItemComponent implements OnInit {

  "productToConfigure" : Product;

  constructor(private productService : ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('id'));
  this.productService.getProductById(productIdFromRoute).subscribe((prod) => this.productToConfigure = prod);
  }

}
