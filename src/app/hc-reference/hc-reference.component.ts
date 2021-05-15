import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { McRefrenceServiceService } from '../mc-refrence-service.service';
import { NotificationService } from '../notification.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MCReference } from '../models/MCReference';
import { MCReferenceResponse } from '../models/MCReferenceResponse';
import { HCReferenceResponse } from '../models/HCReferenceResponse';

@Component({
  selector: 'app-hc-reference',
  templateUrl: './hc-reference.component.html',
  styleUrls: ['./hc-reference.component.css']
})
export class HcReferenceComponent implements OnInit {

  submitted = false;
  formData = false;
  mcRefList: MCReferenceResponse[];
  hcRefList: HCReferenceResponse[];
  mblNo: string;
  constructor(private mcRefService: McRefrenceServiceService, private data: DataService, private route: Router, private mcReferenceService: McRefrenceServiceService, private notifyService: NotificationService) {

  }
  ngOnInit(): void {
    this.mcRefService.getAllMbl().subscribe((data:any) => {
      this.mcRefList = data['result'].result;
      console.log(data['result'].result);
      ;
    });

  }

  mcRefForm = new FormGroup({
    id: new FormControl(''),
    mblNo: new FormControl('', [Validators.required]),
    subLineNo: new FormControl('', [Validators.required]),
    blNo: new FormControl('', [Validators.required]),
    blDt: new FormControl('', [Validators.required]),
    consolidatedIndctr: new FormControl('---Select Consolidted Indctr---', [Validators.required]),
    prevDec: new FormControl('---Select Previous Dec---', [Validators.required]),
    consolidatorPan: new FormControl('', [Validators.required]),

    firstPrtOfEntry: new FormControl('', [Validators.required]),
    destPrt: new FormControl('', [Validators.required]),
    nxtPrtOfUnlading: new FormControl('', [Validators.required]),
    typOfCrgo: new FormControl('---Select Type of Cargo---', [Validators.required]),
    itemTyp: new FormControl('---Select Item Type---', [Validators.required]),
    crgoMvmt: new FormControl('---Select Cargo Mvmnt---', [Validators.required]),
    natrOfCrgo: new FormControl('---Select Nature of Cargo---', [Validators.required]),
    trnshprCd: new FormControl('', [Validators.required]),
    trnshprBond: new FormControl('', [Validators.required])



  });
  get f() { return this.mcRefForm.controls; }

  save() {
    console.log("the mbl no in mcref is  "+ this.mcRefForm.value.mstrBlNo);
    window.localStorage.removeItem("mblNo");
    window.localStorage.setItem("mblNo", this.mcRefForm.value.mstrBlNo);
    this.submitted = true;
    // stop here if form is invalid
    if (this.mcRefForm.invalid) {
      return;
    }
    this.data.setMessage(this.mcRefForm.value.mstrBlNo);
    this.mcReferenceService.hcCreate(this.mcRefForm.value).pipe(first())
      .subscribe(
        data => {
          console.log(data['status']);
          if (data['status'] == 200) {
            this.hcRefList = data['result'];
            //this.route.navigateByUrl("/mctrans-doc-msr");
            this.notifyService.showSuccess(data['message'], "Dheeraj");
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
    this.mcRefForm.reset();
  }
}
