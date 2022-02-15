import { Injectable } from '@angular/core';
import { categoryEnum, Product } from '../product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private apiUrl = 'http://localhost:5000/products'

  constructor(private http: HttpClient) { }

  getProducts () : Observable<Product[]> { 
    return this.http.get<Product[]>(this.apiUrl);
  }

  
  findProductsByCategory (category:categoryEnum) : Observable<Product[]> { 
    return this.http.get<Product[]>(this.apiUrl);
  }

  // searchProducts () : Observable<Product[]> { 
  //   return this.http.get<Product[]>(this.apiUrl);
  // }

  
}
