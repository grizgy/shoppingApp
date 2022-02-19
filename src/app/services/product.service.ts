import { Injectable } from '@angular/core';
import { categoryEnum, Product } from '../product';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   private apiUrl = 'http://localhost:5000/products'

  constructor(private http: HttpClient) { }

  getProducts () : Observable<Product[]> { 
    return this.http.get<Product[]>(this.apiUrl);
  }
  
  getProductById (product:Product) : Observable<Product[]> { 
    return this.http.get<Product[]>(`${this.apiUrl}/${product.id}`);
  }





  
  
  findProductsByCategory (category:categoryEnum) : Observable<Product[]> { 
    return this.http.get<Product[]>(this.apiUrl);
  }


  // searchProductsByWord (text:string) : Observable<Product[]> { 

  //   console.log(`${this.apiUrl}/?id=${text}`);
  //   return this.http.get<Product[]>(`${this.apiUrl}/?id=${text}`).pipe();

  // }

  searchProductsByWord (text:string) : Observable<Product[]> {
     
    fetch(`${this.apiUrl}/?category=${text}`)
    .then(res=>res.json())
    .then(json=>console.log(json))


   // console.log(`${this.apiUrl}/?id=${text}`);
     return this.http.get<Product[]>(`${this.apiUrl}/?category=${text}`);

  }
  

}
