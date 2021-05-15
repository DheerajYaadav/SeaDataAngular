import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { McRefrenceServiceService } from '../mc-refrence-service.service';
import { NotificationService } from '../notification.service';
import { first } from 'rxjs/operators';
import { DataService } from '../data.service';
import { MctransdocmsrService } from '../mctransdocmsr.service';
import { HcRefernceService } from '../hc-refernce.service';
import { MCReferenceResponse } from '../models/MCReferenceResponse';
import { HCReferenceResponse } from '../models/HCReferenceResponse';


@Component({
  selector: 'app-hc-transport-doc-msr',
  templateUrl: './hc-transport-doc-msr.component.html',
  styleUrls: ['./hc-transport-doc-msr.component.css']
})
export class HcTransportDocMsrComponent implements OnInit {

  submitted: boolean;
  message: string;
  mblNo: string;
  msrId: number;
mcRefList: MCReferenceResponse[];
hcRefList: HCReferenceResponse[];
chosenMod: string;
  constructor(private mcRefService: McRefrenceServiceService, private hcRefService: HcRefernceService, private mcTransDocMsr: MctransdocmsrService,  private data: DataService, private mcReferenceService: McRefrenceServiceService, private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.mcRefService.getAllMbl().subscribe((data:any) => {
      this.mcRefList = data['result'].result;
      console.log(data['result'].result);
      ;
    });
  }

  transportDocMsrForm = new FormGroup({

    id: new FormControl(''),
    mblNo: new FormControl(''),
    hblNo: new FormControl(''),
    nmbrOfPkgs: new FormControl('', [Validators.required]),
    typsOfPkgs: new FormControl('', [Validators.required]),
    marksNoOnPkgs: new FormControl('', [Validators.required]),
    grossWeight: new FormControl(),
    netWeight: new FormControl(),
    unitOfWeight: new FormControl(),
    grossVolume: new FormControl(),
    unitOfVolume: new FormControl(),
    invoiceValueOfCnsgmt: new FormControl(),
    crncyCd: new FormControl(),
  });

  get f() { return this.transportDocMsrForm.controls; }

  itemDetailsForm = new FormGroup({
    crgoItemSeqNmbr: new FormControl('', [Validators.required]),
    hsCd: new FormControl('', [Validators.required]),
    crgoItemDesc: new FormControl(),
    unoCd: new FormControl('', [Validators.required]),
    imdgCd: new FormControl('', [Validators.required]),
    nmbrOfPkgs2: new FormControl(),
    typOfPkgs2: new FormControl()
  });

  get f1() { return this.itemDetailsForm.controls; }


  selectMbl() {
    console.log("item selected"+ this.transportDocMsrForm.value.mblNo);
  
    if(this.transportDocMsrForm.value.mblNo){
    this.hcRefService.getHblByMblNo(this.transportDocMsrForm.value.mblNo).subscribe((data:any) => {
      this.hcRefList = data['result'].result;
      console.log(data['result'].result);
    });
  }
  }
  reset() {
    this.submitted = false;
    this.transportDocMsrForm.reset();
  }

  resetItemDetailsForm() {
    this.submitted = false;
    this.itemDetailsForm.reset();
  }

  addItemDetails() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.itemDetailsForm.invalid) {
      return;
    }
    this.mcTransDocMsr.addItems(this.itemDetailsForm.value, this.msrId ).pipe(first())
      .subscribe(
        data => {
          console.log(data['message']);
          if (data['status'] == 200) {
            this.transportDocMsrForm.reset();
            this.notifyService.showSuccess(data['message'], this.mblNo);
            //this.route.navigate(['login']);
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
  save() {
    // stop here if form is invalid
    if (this.transportDocMsrForm.invalid) {
      return;
    }
    this.submitted = true;
    this.mcTransDocMsr.create(this.transportDocMsrForm.value).pipe(first())
      .subscribe(
        data => {
          console.log(data['message']);
          if (data['status'] == 200) {
            this.notifyService.showSuccess(data['message'], this.transportDocMsrForm.value.mblNo);
            console.log(data['result'].result.id);
            this.msrId = data['result'].result.id;
            console.log("id,,,,"+this.msrId);
            //this.route.navigate(['login']);
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
}
