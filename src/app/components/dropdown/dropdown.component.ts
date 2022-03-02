import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() emmitCategoryDropDrown = new EventEmitter<string>();

  constructor(private categoriesService:ProductService) { }

  ngOnInit(){
      
  }
  
  onClick(str:string) {
     console.log(str)  
     this.emmitCategoryDropDrown.emit(str);
  }


}