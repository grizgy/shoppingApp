import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { categoryEnum } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service'; 
 
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  
  "productCategories" : Observable<categoryEnum>;

  constructor(private categoriesService:ProductService) { }

  ngOnInit(){
    // this.productCategories = this.categoriesService.findProductsByCategory();
  }
  onClick(str:string) {
    console.log(str)  
  }

  
}
