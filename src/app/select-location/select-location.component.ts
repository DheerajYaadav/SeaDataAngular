import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, Validators, FormControl } from '@angular/forms';
import { GeneralService } from '../general.service';
import { Location } from '../models/Location';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.scss']
})
export class SelectLocationComponent implements OnInit {

  checkHome: boolean = false;
  loginForm = new FormGroup({
    locationCode: new FormControl('', [Validators.required]),
    //mobileNumber: new FormControl('', [Validators.required, Validators.pattern("[1-9]{1}[0-9]{9}")]),
    //address: new FormControl('', [Validators.required]),
    //email:new FormControl('', [Validators.required, Validators.email]),
    import: new FormControl('', [Validators.required]),
    //confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
});
get f() { return this.loginForm.controls; }
 
  constructor(private route: Router, private selectLocService: GeneralService) { }

  locationList: Location[];
  userName: string;
  ngOnInit(): void {
    window.localStorage.removeItem("locationCode");
    console.log("the usernMe.. in  slect"+window.localStorage.getItem("userName"));
    //window.localStorage.setItem("userName", this.loginForm.value.locationCode);
    this.userName  = window.localStorage.getItem("userName");
    this.selectLocService.getAllLocations().subscribe((data:any) => {
      this.locationList = data['result'].result;
      console.log(this.locationList);
    });
  }

  go() {
    
    this.route.navigateByUrl("/errorCode");
  }
}
