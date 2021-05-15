import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ConsignerService } from '../consigner.service';
import { McRefrenceServiceService } from '../mc-refrence-service.service';
import { Consigner } from '../models/Consigner';
import { MCReference } from '../models/MCReference';
import { NotificationService } from '../notification.service';
import { NgxSpinnerService } from "ngx-spinner";
import { DataService } from '../data.service';
import { MCReferenceResponse } from '../models/MCReferenceResponse';

@Component({
  selector: 'app-list-mcref',
  templateUrl: './list-mcref.component.html',
  styleUrls: ['./list-mcref.component.css']
})
export class ListMcrefComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, pipe: DecimalPipe, private route: Router, private mcRefService: McRefrenceServiceService, private notification: NotificationService, private dataService: DataService) { 
   }

  page = 1;
  pageSize = 5;
  collectionSize : number;
  mcRefList: MCReferenceResponse[];
  popoverTitle = 'Confirmation ?';
  popoverMessage = 'Are you really <b>sure</b> you want to delete this?';
  confirmClicked = false;
  cancelClicked = false;
  submitted = false;
  formData = false;
  mcRefFilter:MCReferenceResponse[];
  city:any;

  ngOnInit() {
    //  this.spinner.show();

    //  setTimeout(() => {
    //    this.spinner.hide();
    //  }, 500);
    this.mcRefService.getAllMbl().subscribe((data:any) => {
      this.mcRefList = data['result'].result;
      console.log(data['result'].result);
      this.collectionSize = this.mcRefList.length;
      ;
    });
  }


  

search(){

  if(this.city == ""){
  this.ngOnInit();}
  else  {
    this.mcRefList = this.mcRefList.filter(res =>{
      return res.mstrBlNo.toLocaleLowerCase().match(this.city.toLocaleLowerCase());
    })
  }
} 

  deleteMcRef(mcObject: MCReferenceResponse): void {

    // alert('Are you sure you want to delete the '+consigner.name);
    this.mcRefService.deleteMcRef(mcObject.id)
      .subscribe( data => {
        this.mcRefList = this.mcRefList.filter(u => u !== mcObject);
      })
      this.notification.showError('MBL deleted successfuly', + mcObject.mstrBlNo);
  };

  editMcRef(mcObject: MCReferenceResponse): void {
    this.dataService.setMessage(document.getElementById("edit").innerHTML)
    window.localStorage.removeItem("editMcRefId");
    window.localStorage.setItem("editMcRefId", mcObject.id.toString());
    this.route.navigateByUrl("/mc-reference");
  };
  addMBL(): void {
    
    this.dataService.setMessage(document.getElementById("addMbl").innerHTML)
    ;
    this.route.navigateByUrl("/mc-reference");
  };
}
