import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() "product" : Product;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }

}
