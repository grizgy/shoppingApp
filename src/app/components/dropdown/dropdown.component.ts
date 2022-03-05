import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { categoryEnum } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service'; 
import { Product } from 'src/app/product';
import { AppService } from 'src/app/services/app.service';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  
  "productCategories" : Observable<categoryEnum>;
  products : Product[] = [];
  
  "subscription" : Subscription;
  constructor(private categoriesService:ProductService, private appsevice: AppService) { }

  ngOnInit(){
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  onClick(str:string) {
    this.appsevice.changeMessage(str)
  }


}