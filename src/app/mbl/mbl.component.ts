import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mbl',
  templateUrl: './mbl.component.html',
  styleUrls: ['./mbl.component.css']
})
export class MblComponent implements OnInit {

  mcref = false;
  transDoc = false;
  transDocMsr = false;
  transEqupmnt = false;
  itrny = false;


  constructor(private route: Router, private data: DataService) { }
  ngOnInit(): void {
    let buttonType = this.data.getMessage();
    if (buttonType === "Add MBL") {
      this.transDoc = true;
      this.transDocMsr = true;
      this.transEqupmnt = true;
      this.itrny = true;
    }
  }
}
