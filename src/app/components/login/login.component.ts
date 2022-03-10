import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  "loginUserData" : any = {};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser () {
    this.userService.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        // this.router.navigate(['/'])
      },
      err => console.log(err)
    ) 
  }

}
