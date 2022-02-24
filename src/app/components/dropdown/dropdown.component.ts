import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { categoryEnum } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service'; 
import { Product } from 'src/app/product';
 
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  
  "productCategories" : Observable<categoryEnum>;
  products : Product[] = [];

  constructor(private categoriesService:ProductService) { }

  ngOnInit(){
  }
  
  onClick(str:string) {
    console.log(str)  
    this.categoriesService.getProducts().subscribe((products) => (this.products = products));
  }

  
}
