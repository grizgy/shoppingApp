import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : Product[] = []
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts() {
    return this.productList.asObservable();
  }

  addProduct(product : Product) {
    if( !this.cartItemList.find((t) =>t.id === product.id )) {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      console.log(this.cartItemList);
    }
  }

  getTotalPrice (): number {
    let total = 0;
    this.cartItemList.map((p : any) => {
      total += p.total;
    })
    return total;
  }

  removeCartItem( product : Product) {
    this.cartItemList.map((a:Product, index:number) => {
      if(product.id === a.id) {
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }


}
