import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router'
import { FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  "loginUserData" : any = {};

  constructor(private userService: UserService, private router: Router) { }

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(this.loginUserData.email, Validators.required),
      password: new FormControl(this.loginUserData.password, [
        Validators.required,
        Validators.minLength(4)
      ])
    }); 
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
