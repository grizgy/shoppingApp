import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userApiUrl = 'http://localhost:5000/users'
  private loginUrl = 'http://localhost:5000/login'
  public productList = new BehaviorSubject<any>([]);
  public userList : User[] = []

  constructor(private http: HttpClient, private router: Router) { }
  
  addUser(user : any) {

    return this.http.post<User>(this.userApiUrl, user)

    // if( !this.userList.find((t) =>t.email === user.email )) {
    //   this.userList.push(user);
    //   this.productList.next(this.userList);
    //   console.log(this.userList);
    // } else{
    //   console.log("Sorry, there is already an account with this email " + user.email)
    // }

  }
  
  loginUser(user: any) {
    return this.http.post<any>(this.loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/events'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }

}
