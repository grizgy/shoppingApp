import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public count : number = 0;
  @Input() "routerHead" : string ;
  @Output() emmitCategoryHeader = new EventEmitter<string>();

  public term : string = "";
  constructor( private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(response =>
      this.count = response.length)
  }

  filterCategory( category : string) {
    this.term = category;
    console.log(this.term + " Header")
    this.emmitCategoryHeader.emit(category);
   }


}
