import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  products : Product[] = [];

  constructor( private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => this.products = products);

    this.products.forEach((p : any) => {
    Object.assign(p, {quantity:1, total: p.price});
    });
    
  }

}
