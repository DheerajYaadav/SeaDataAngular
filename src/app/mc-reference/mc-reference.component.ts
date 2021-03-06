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
  mcRefList: MCReferenceResponse[];
  constructor(private data: DataService, private route: Router, private mcReferenceService: McRefrenceServiceService, private notifyService: NotificationService) {

  }
  ngOnInit(): void {

  }

  mcRefForm = new FormGroup({
    id: new FormControl(''),
    lineNo: new FormControl('', [Validators.required]),
    mstrBlNo: new FormControl('', [Validators.required]),
    mstrBlDt: new FormControl('', [Validators.required]),
    consolidatedIndctr: new FormControl('C', [Validators.required]),
    prevDec: new FormControl('N', [Validators.required]),
    consolidatorPan: new FormControl('', [Validators.required]),

    firstPrtOfEntry: new FormControl('', [Validators.required]),
    destPrt: new FormControl('', [Validators.required]),
    nxtPrtOfUnlading: new FormControl('', [Validators.required]),
    typOfCrgo: new FormControl('IM', [Validators.required]),
    itemTyp: new FormControl('Other Cargo-OT', [Validators.required]),
    crgoMvmt: new FormControl('LC-Local Clearance', [Validators.required]),
    natrOfCrgo: new FormControl('C-Containerized', [Validators.required]),
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
    this.mcRefForm.reset();
  }
}
