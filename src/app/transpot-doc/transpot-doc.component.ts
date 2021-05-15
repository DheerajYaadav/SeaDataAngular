import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { McRefrenceServiceService } from '../mc-refrence-service.service';
import { MCReference } from '../models/MCReference';
import { NotificationService } from '../notification.service';
import { TransdocService } from '../transdoc.service';

@Component({
  selector: 'app-transpot-doc',
  templateUrl: './transpot-doc.component.html',
  styleUrls: ['./transpot-doc.component.css']
})
export class TranspotDocComponent implements OnInit {

  submitted = false;
  formData = false;
  mcRefList:MCReference[];
  mblNo: string;
  constructor(private notifyService: NotificationService, private transDocService: TransdocService, private mcRefService: McRefrenceServiceService) { }

  ngOnInit(): void {
    //  this.mblNo = window.localStorage.getItem("mblNo");
    // console.log("the mbl no is /..."+this.mblNo);

    this.mcRefService.getAllMbl().subscribe((data:any) => {
      this.mcRefList = data['result'].result;
      console.log(data['result'].result);
      ;
    });

  }

  transportDocForm = new FormGroup({

    id:new FormControl(''),
    mblNo: new FormControl('', [Validators.required]),

    prtOfAcptCdd: new FormControl('', [Validators.required]),
    prtOfAcptName: new FormControl(),
    prtOfReceiptCdd: new FormControl('', [Validators.required]),
    prtOfReceiptName: new FormControl(),
    cnsgnrsName: new FormControl('', [Validators.required]),
    cnsgnrsCd: new FormControl(),

    cnsgnrCdTyp: new FormControl(),
    cnsgnrStreetAddress: new FormControl('', [Validators.required]),
    cnsgnrCity: new FormControl('', [Validators.required]),
    cnsgnrCntrySubDivName: new FormControl(),
    cnsgnrCntrySubDivCd: new FormControl(),
    cnsgnrCntryCd: new FormControl('', [Validators.required]),
    cnsgnrPstcd: new FormControl(),


    cnsgnesName: new FormControl('', [Validators.required]),
    cnsgnesCd: new FormControl(),
    typOfCd: new FormControl(),
    cnsgneStreetAddress: new FormControl('', [Validators.required]),
    cnsgneCntrySubDivName: new FormControl(),
    cnsgneCity: new FormControl('', [Validators.required]),
    cnsgneCntrySubDiv: new FormControl(),

    cnsgneCntryCd: new FormControl('', [Validators.required]),
    cnsgnePstcd: new FormControl(),
    nameOfAnyOtherNotfdParty: new FormControl('', [Validators.required]),
    panOfNotfdParty: new FormControl(),
    typOfNotfdPartyCd: new FormControl(),
    notfdPartyStreetAddress: new FormControl('', [Validators.required]),
    notfdPartyCity: new FormControl('', [Validators.required]),

    notfdPartyCntrySubDivName: new FormControl(),
    notfdPartyCntrySubDiv: new FormControl(),
    notfdPartyCntryCd: new FormControl(),
    notfdPartyPstcd: new FormControl(),
    goodsDescAsPerBl: new FormControl('', [Validators.required]),
    ucrTyp: new FormControl(),
    ucrCd: new FormControl()



  });
  get f() { return this.transportDocForm.controls; }

  save() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.transportDocForm.invalid) {
      return;
    }
    this.transDocService.create(this.transportDocForm.value).pipe(first())
      .subscribe(
        data => {
          console.log(data['status']);
          if (data['status'] == 200) {
            //this.route.navigateByUrl("/mctrans-doc-msr");
            this.notifyService.showSuccess(data['message'],this.mblNo);
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
    this.transportDocForm.reset();
  }
}
