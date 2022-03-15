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

  registerUser() {
      // this.userService.addUser(this.registerForm.value)
      this.userService.addUser({
        id: this.registerForm.value.id,
        email: this.registerForm.value.email,
        username:this.registerForm.value.username,
        password:this.registerForm.value.password,
        firstname:this.registerForm.value.firstname,
        lastname:this.registerForm.value.lastname,
        phone:this.registerForm.value.phone
      })
  }

   registerForm!: FormGroup;

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      id: new FormControl(''),
      email: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    }); 
  }

  get id():FormControl {
    return this.registerForm.get('id') as FormControl;
  }

}