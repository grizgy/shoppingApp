import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  
  products : Product[] = [];
  constructor( private productService : ProductService ) { }


  ngOnInit() {
    this.productService.getProducts().subscribe((products) => this.products = products);
  }

}
