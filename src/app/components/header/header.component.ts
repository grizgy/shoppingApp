import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public count : number = 0;
  @Input() "routerHead" : string ;
  constructor( private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(response =>
      this.count = response.length)
  }



}
