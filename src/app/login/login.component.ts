import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  submitted = false;
  constructor(private route: Router, private notifyService: NotificationService) { }

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
  if((this.loginForm.value.name == 'dheeraj') && (this.loginForm.value.password == 'dheeraj')){
    window.localStorage.removeItem("userName");
    console.log("the usernMe.."+this.loginForm.value.name);
    window.localStorage.setItem("userName", this.loginForm.value.name);
    this.route.navigate(['select-location']); 
    this.notifyService.showSuccess('Login Successfully', this.loginForm.value.name);
  
  }
  else {
    this.notifyService.showError('username or password incorrect','');

  }
}

// form: FormGroup;
// loading = false;
// submitted = false;
// returnUrl: string;

// constructor(
//     private formBuilder: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router,
// ) { }

// ngOnInit() {
//     this.form = this.formBuilder.group({
//         username: ['', Validators.required],
//         password: ['', Validators.required]
//     });

//     // get return url from route parameters or default to '/'
//     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
// }

// // convenience getter for easy access to form fields
// get f() { return this.form.controls; }

// onSubmit() {
//     this.submitted = true;

//     // reset alerts on submit
//     //this.alertService.clear();

//     // stop here if form is invalid
//     if (this.form.invalid) {
//         return;
//     }

//     this.loading = true;
//     // this.accountService.login(this.f.username.value, this.f.password.value)
//     //     .pipe(first())
//     //     .subscribe(
//     //         data => {
//     //             this.router.navigate([this.returnUrl]);
//     //         },
//     //         error => {
//     //             this.alertService.error(error);
//     //             this.loading = false;
//     //         });
// }
}

