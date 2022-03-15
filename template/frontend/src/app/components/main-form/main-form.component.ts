import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/services/product.service';
import { AppService } from 'src/app/services/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  products : Product[] = [];
  @Input() "term" : string;
  @Input()"category" : string;

  "subscription" : Subscription;

  constructor( private productService : ProductService, private appsevice: AppService) { }

  ngOnInit(): void {
    this.subscription = this.appsevice.currentMessage.subscribe(message => this.category = message) 
    this.productService.getProducts().subscribe((products) => this.products = products);  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  receiveTerm( inputTerm : string) {
    this.term = inputTerm;
   }
   
}
