import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SeaDataAngular';

  constructor(private route: Router) { }

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
 
    password: new FormControl('', [Validators.required]),
});
get f() { return this.loginForm.controls; }
 
}
