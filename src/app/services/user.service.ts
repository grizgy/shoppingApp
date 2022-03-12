import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userApiUrl = 'http://localhost:5000/users'
  private loginUrl = 'http://localhost:5000/login'

  constructor(private http: HttpClient, private router: Router) { }
  
  addUser(user : any) {
      return this.http.post<User>(this.userApiUrl, user).subscribe(
        res => {
          localStorage.setItem('registerToken', res.email)
          console.log(res)
          this.router.navigate(['/'])
        },
        err => console.log(err)
      )  

  }
  
  loginUser(user: any) {

    return this.http.post<any>(this.loginUrl, user)
    .subscribe(
      res => {
        localStorage.setItem('loginToken', res.email)
        console.log(res)
        // this.router.navigate(['/'])
      },
      err => console.log(err)
    )  
    
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
