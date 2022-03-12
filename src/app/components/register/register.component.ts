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
      this.userService.addUser(this.registerForm.value)
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
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    }); 
  }

}