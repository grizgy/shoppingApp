import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() "product" : Product;
  // @Output() clickingOnProduct : EventEmitter <Product> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickOpen(product:Product) {
    // this.clickingOnProduct.emit(product);

    console.log(product)  
  }

}
