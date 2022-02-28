import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { categoryEnum } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service'; 
import { Product } from 'src/app/product';
import { filter, map  } from "rxjs/operators";
import { interval, of, timer } from "rxjs";
import { fromArray } from "rxjs/internal/observable/fromArray";

 
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
    // of(1,2,3,4,5,6,7,8,9,10)
    //   .pipe(
    //     filter(val => {
    //       return val %2==0;
    //     }),
    //   )
    //   .subscribe(val => console.log(val));

    
  }
  
  onClick(str:string) {
    // console.log(str)  
    // this.categoriesService.getProducts().subscribe((products) => (this.products = products));

    // of('men s clothing','women s clothing','jewelery','electronics','All categories')
    
    // this.categoriesService.getProducts().pipe(
    //   filter((products) => this.products == products),
    // ).subscribe(val => console.log(val));

    fromArray(this.products)
    .pipe(   
    filter(x => x.title === str)
 ).subscribe(val => console.log(val));

  }


}