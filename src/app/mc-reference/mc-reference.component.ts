import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { McRefrenceServiceService } from '../mc-refrence-service.service';
import { NotificationService } from '../notification.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MCReference } from '../models/MCReference';
import { MCReferenceResponse } from '../models/MCReferenceResponse';

@Component({
  selector: 'app-mc-reference',
  templateUrl: './mc-reference.component.html',
  styleUrls: ['./mc-reference.component.css']
})
export class McReferenceComponent implements OnInit {

  submitted = false;
  formData = false;
  buttonName = "Save";
  mcRefList: MCReferenceResponse[];
  constructor(private data: DataService, private route: Router, private mcReferenceService: McRefrenceServiceService, private notifyService: NotificationService) {

  }
  ngOnInit(): void {

    let buttonType = this.data.getMessage();
    if (buttonType === "Add MBL") {
    }
    if (buttonType === "Edit") {
      this.buttonName = "Update";
      let mcRefId = window.localStorage.getItem("editMcRefId");
      if (!mcRefId) {
        this.route.navigateByUrl("/list-mc-reference");
      }
      this.mcReferenceService.getMcRefById(+mcRefId)
        .subscribe(data => {
          console.log(mcRefId);
          this.buttonName = "Update";
          this.mcRefForm.controls.lineNo.setValue(data['result'].result.id);
          this.mcRefForm.controls.lineNo.setValue(data['result'].result.lineNo);
          this.mcRefForm.controls.mstrBlDt.setValue(data['result'].result.mstrBlDt);
          this.mcRefForm.controls.mstrBlNo.setValue(data['result'].result.mstrBlNo);
          this.mcRefForm.controls.consolidatedIndctr.setValue(data['result'].result.consolidatedIndctr);
          this.mcRefForm.controls.prevDec.setValue(data['result'].result.prevDec);
          this.mcRefForm.controls.consolidatorPan.setValue(data['result'].result.consolidatorPan);
          this.mcRefForm.controls.firstPrtOfEntry.setValue(data['result'].result.firstPrtOfEntry);
          this.mcRefForm.controls.destPrt.setValue(data['result'].result.destPrt);
          this.mcRefForm.controls.nxtPrtOfUnlading.setValue(data['result'].result.nxtPrtOfUnlading);
          this.mcRefForm.controls.typOfCrgo.setValue(data['result'].result.typOfCrgo);

          this.mcRefForm.controls.itemTyp.setValue(data['result'].result.itemTyp);

          this.mcRefForm.controls.crgoMvmt.setValue(data['result'].result.crgoMvmt);
          this.mcRefForm.controls.natrOfCrgo.setValue(data['result'].result.natrOfCrgo);

        });
    }

  }

  mcRefForm = new FormGroup({
    id: new FormControl(''),
    lineNo: new FormControl('', [Validators.required]),
    mstrBlNo: new FormControl('', [Validators.required]),
    mstrBlDt: new FormControl('', [Validators.required]),
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
    this.submitted = true;
    if (this.mcRefForm.invalid) {
      return;
    }
    this.data.setMessage(this.mcRefForm.value.mstrBlNo);
    this.mcReferenceService.create(this.mcRefForm.value).pipe(first())
      .subscribe(
        data => {
          console.log(data['status']);
          if (data['status'] == 200) {
            this.mcRefList = data['result'];
            this.route.navigateByUrl("/list-mc-reference");
            if (this.buttonName === "Save") {
              this.notifyService.showSuccess(data['message'], data['result'].result.mstrBlNo);
            }
            if (this.buttonName === "Update") {
              this.notifyService.showWarning("MBL Updated Successfully.",data['result'].result.mstrBlNo);
            }

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
