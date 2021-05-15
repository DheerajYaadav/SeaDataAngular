import { Component, Directive, EventEmitter, Input, OnInit, Output, PipeTransform, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first, map, startWith } from 'rxjs/operators';
import { ConsignerService } from '../consigner.service';
import { Consigner } from '../models/Consigner';
import { NotificationService } from '../notification.service';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-list-consigner',
  templateUrl: './list-consigner.component.html',
  styleUrls: ['./list-consigner.component.css']
})

export class ListConsignerComponent implements OnInit {

  constructor(pipe: DecimalPipe, private route: Router, private consignerService: ConsignerService, private notification: NotificationService) { 
    this.refreshConsignor();
 
  }

  page = 1;
  pageSize = 2;
  collectionSize : number;
  consignerList: Consigner[];
  popoverTitle = 'Confirmation ?';
  popoverMessage = 'Are you really <b>sure</b> you want to delete this?';
  confirmClicked = false;
  cancelClicked = false;
  submitted = false;
  formData = false;
  consignerFilter:Consigner[];
  city:any;

  ngOnInit() {
    this.consignerService.getAllConsigner().subscribe((data:any) => {
      this.consignerList = data['result'];
      console.log(this.consignerList.length)
      this.collectionSize = this.consignerList.length;
      ;
    });
  }


  
  consignerForm = new FormGroup({
    city: new FormControl(),
    code: new FormControl(),
    countryCode: new FormControl(),
    countrySubDiv: new FormControl(),
    countrySubDivName: new FormControl(),
    name: new FormControl(),
    postcode: new FormControl(),
    streetAddress: new FormControl(),
    typeOfCode: new FormControl(),
  });

  get f() { return this.consignerForm.controls; }


search(){

  if(this.city == ""){
  this.ngOnInit();}
  else  {
    this.consignerList = this.consignerList.filter(res =>{
      return res.city.toLocaleLowerCase().match(this.city.toLocaleLowerCase());
    })
  }
}

  refreshConsignor() {
    console.log(this.consignerList);
    this.consignerFilter =(this.consignerList)
    // .map((country, i) => ({id: i + 1, ...country}))
    //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  
  reset() {
    this.submitted = false;
    this.consignerForm.reset();
  }
  add() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.consignerForm.invalid) {
      return;
    }
    this.consignerService.create(this.consignerForm.value).pipe(first())
      .subscribe(
        data => {
          console.log(data['status']);
          if (data['status'] == 200) {
            //this.route.navigateByUrl("/mctrans-doc-msr");
            this.formData = true;
                    this.ngOnInit();

            this.notification.showSuccess(data['message'],this.consignerForm.value.name);
          }
          else {
            this.notification.showError(data['message'], false);
            // this.route.navigate(['login']);
          }
        },
        error => {
          //this.notifyService.showError(
        });
        this.ngOnInit();
        this.consignerForm.reset();
  }

  deleteConsigner(consigner: Consigner): void {

    // alert('Are you sure you want to delete the '+consigner.name);
    this.consignerService.deleteConsginer(consigner.id)
      .subscribe( data => {
        this.consignerList = this.consignerList.filter(u => u !== consigner);
      })
      this.notification.showError('Consigner deleted successfuly', + consigner.name);
  };

  editConsigner(consigner: Consigner): void {
    window.localStorage.removeItem("editConsignerId");
    window.localStorage.setItem("editConsignerId", consigner.id.toString());
    this.route.navigateByUrl("/edit-consigner");
  };
  addUser(): void {
    this.route.navigateByUrl("/add-consigner");
  };

}
