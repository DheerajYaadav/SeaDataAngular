import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent  {

  submitted = false;
  constructor(private route: Router) { }

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    //mobileNumber: new FormControl('', [Validators.required, Validators.pattern("[1-9]{1}[0-9]{9}")]),
    //address: new FormControl('', [Validators.required]),
    //email:new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    //confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
});
get f() { return this.loginForm.controls; }
 
login() {

  this.route.navigate(['home']);  
}

}
