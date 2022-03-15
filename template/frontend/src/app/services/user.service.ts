import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Router } from '@angular/router'
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userApiUrl = 'http://localhost:5000/users'
  private loginUrl = 'http://localhost:5000/login'

  constructor(private http: HttpClient, private router: Router, private snackBar:MatSnackBar) { }
  
  addUser(user : any) {
      return this.http.post<User>(this.userApiUrl, user).pipe( tap ((createdUser:any) => this.snackBar.open('User ' + createdUser.username + ' was created successfully', 'Close', {
        duration:5000, horizontalPosition:'right', verticalPosition:'top'
      })) ).subscribe(
        res => {
          localStorage.setItem('registerToken: ', res.email)
          console.log(res)
          // this.router.navigate(['/'])
        },
        err => console.log(err)
      ) 

  }
  
  loginUser(user: any) {

    return this.http.post<any>(this.loginUrl, user).pipe( tap ((loggedUser:any) => this.snackBar.open('Hi, ' + loggedUser.email, 'Close', {
      duration:5000, horizontalPosition:'right', verticalPosition:'top'
    })) )
    .subscribe(
      res => {
        localStorage.setItem('loginToken: ' , res.email)
        console.log(res)
        // this.router.navigate(['/'])
      },
      err => console.log(err)
    )  
    
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }

}
