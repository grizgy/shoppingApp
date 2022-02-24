import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public "total" !: number;
  shippingCosts: number = 15.00;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.total = this.cartService.getTotalPrice();
  }

}
