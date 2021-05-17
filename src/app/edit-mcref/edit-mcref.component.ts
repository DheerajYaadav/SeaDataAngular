import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { DataService } from '../data.service';
import { McRefrenceServiceService } from '../mc-refrence-service.service';
import { MCReferenceResponse } from '../models/MCReferenceResponse';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-edit-mcref',
  templateUrl: './edit-mcref.component.html',
  styleUrls: ['./edit-mcref.component.css']
})
export class EditMcrefComponent implements OnInit {

  submitted = false;
  formData = false;
  mcRefList: MCReferenceResponse[];
  mcObject: MCReferenceResponse;
  constructor(private data: DataService, private route: Router, private mcReferenceService: McRefrenceServiceService, private notifyService: NotificationService) {

  }
  ngOnInit(): void {
    let mcRefId = window.localStorage.getItem("editMcRefId");
    if(!mcRefId) {
      alert("Invalid action.")
      this.route.navigateByUrl("/list-consignor");
    }
    this.mcReferenceService.getMcRefById(+mcRefId)
    .subscribe( data => {
      console.log("the data in result "+ JSON.stringify(data['result'].result));
      this.mcObject =  data['result'].result;
      console.log("the result "+ this.mcObject);
      this.editMCRefForm.setValue(this.mcObject);
    });
  }

  editMCRefForm = new FormGroup({
    id: new FormControl(''),
    lineNo: new FormControl('', [Validators.required]),
    mstrBlNo: new FormControl('', [Validators.required]),
    mstrBlDt: new FormControl('', [Validators.required]),
    consolidatedIndctr: new FormControl('', [Validators.required]),
    prevDec: new FormControl('', [Validators.required]),
    consolidatorPan: new FormControl('', [Validators.required]),
    createdAt: new FormControl(''),
    firstPrtOfEntry: new FormControl('', [Validators.required]),
    destPrt: new FormControl('', [Validators.required]),
    nxtPrtOfUnlading: new FormControl('', [Validators.required]),
    typOfCrgo: new FormControl('', [Validators.required]),
    itemTyp: new FormControl('', [Validators.required]),
    crgoMvmt: new FormControl('', [Validators.required]),
    natrOfCrgo: new FormControl('', [Validators.required]),
    trnshprCd: new FormControl('', [Validators.required]),
    trnshprBond: new FormControl('', [Validators.required])


  });
  get f() { return this.editMCRefForm.controls; }

  save() {
    this.submitted = true;
    if (this.editMCRefForm.invalid) {
      return;
    }
    this.data.setMessage(this.editMCRefForm.value.mstrBlNo);
    this.mcReferenceService.create(this.editMCRefForm.value).pipe(first())
      .subscribe(
        data => {
          console.log(data['status']);
          if (data['status'] == 200) {
            this.mcRefList = data['result'];
            this.route.navigateByUrl("/list-mc-reference");
              this.notifyService.showSuccess(data['message'], data['result'].result.mstrBlNo);
            this.formData = true;
          }
          else {
            this.notifyService.showError(data['message'], false);
            // this.route.navigate(['login']);
          }
        },
        error => {
          //this.notifyService.showError(
        });
  }

  reset() {
    this.submitted = false;
    this.editMCRefForm.reset();
  }
}
