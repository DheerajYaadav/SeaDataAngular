import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { GeneralService } from '../general.service';
import { McRefrenceServiceService } from '../mc-refrence-service.service';
import { MCReferenceResponse } from '../models/MCReferenceResponse';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  submitted = false;
  formData = false;
  mcRefList: MCReferenceResponse[];
  constructor(private mcRefService: McRefrenceServiceService, private notifyService: NotificationService, private generalService: GeneralService) { }

  ngOnInit(): void {
    this.mcRefService.getAllMbl().subscribe((data:any) => {
      this.mcRefList = data['result'].result;
      console.log(data['result'].result);
      ;
    });
  }
  generalForm = new FormGroup({

    id: new FormControl(),
    mblNo: new FormControl(),
    senderID: new FormControl('', [Validators.required]),
    receiverID: new FormControl('', [Validators.required]),
    versionNo: new FormControl('', [Validators.required]),
    indicator: new FormControl('', [Validators.required]),
    messageID: new FormControl('', [Validators.required]),
    sequenceOrControlNumber: new FormControl('', [Validators.required]),
    reportingEvent: new FormControl('Select Event Reporting', [Validators.required]),

    msgTyp: new FormControl('', [Validators.required]),
    prtofRptng: new FormControl('', [Validators.required]),
    jobNo: new FormControl('', [Validators.required]),
    reportingEvent1: new FormControl('Select Event Reporting', [Validators.required]),
    sbmtrTyp: new FormControl('', [Validators.required]),
    sbmtrCd: new FormControl('', [Validators.required]),
    authReprsntvCd: new FormControl('', [Validators.required]),


    modeOfTrnsprt: new FormControl('', [Validators.required]),
    typOfTrnsprtMeans: new FormControl('', [Validators.required]),
    trnsprtMeansId: new FormControl('', [Validators.required]),
    cnvnceRefNmbr: new FormControl('', [Validators.required]),
    totalNoOfTrnsprtEqmtMnfsted: new FormControl('', [Validators.required]),
    totalNmbrOfLines: new FormControl('', [Validators.required])

  });
  get f() { return this.generalForm.controls; }
  save() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.generalForm.invalid) {
      return;
    }
    this.generalService.create(this.generalForm.value).pipe(first())
      .subscribe(
        data => {
          console.log(data['status']);
          if (data['status'] == 200) {
            //this.route.navigateByUrl("/mctrans-doc-msr");
            this.notifyService.showSuccess(data['message'], this.generalForm.value.mblNo);
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
    this.generalForm.reset();
  }
}
