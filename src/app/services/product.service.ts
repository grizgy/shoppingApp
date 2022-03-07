import { Injectable } from '@angular/core';
import { categoryEnum, Product } from '../product';
import { Observable, of } from 'rxjs';
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

  getProductById (id:number): Observable<Product>  { 
     return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  searchProductsByWord (text:string) : Observable<Product[]> {
     
    fetch(`${this.apiUrl}/?category=${text}`)
    .then(res=>res.json())
    .then(json=>console.log(json))


   // console.log(`${this.apiUrl}/?id=${text}`);
     return this.http.get<Product[]>(`${this.apiUrl}/?category=${text}`);

  }

}
