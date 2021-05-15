import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  userName: string;
  isCollapsed = true;

  locationCode:string;
  ngOnInit(): void {
    this.userName =  window.localStorage.getItem("userName");
    this.locationCode = window.localStorage.getItem("locationCode");
  }

}
