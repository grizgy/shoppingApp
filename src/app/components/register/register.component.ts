import { Component, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router'
import { FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  "registerUserData" : any = {}

  // registerForm = new FormGroup(
  //   {
  //   email: new FormControl(', Validators.required, Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")'), 
  //   // ['', Validators.required, Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")],
  //   // userName:['', Validators.required],
  //   password: new FormControl ('', Validators.required)
  //   // ['', Validators.required],
  //   // firstName:['', Validators.required],
  //   // familyName:['', Validators.required],
  //   }
  // );
  
 

  registerUser() {

      this.userService.addUser(this.registerUserData).subscribe(
        res => {
          // localStorage.setItem('token', res.token)
          console.log(res)
          // this.router.navigate(['/'])
        },
        err => console.log(err)
      )      
      // return this.userService.addUser(user);

  }

   registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
       name: new FormControl(this.registerUserData.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.registerUserData.email, Validators.required)
    }); 
  }

}
