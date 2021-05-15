import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { DataService } from '../data.service';
import { HcRefernceService } from '../hc-refernce.service';
import { ItrnyService } from '../itrny.service';
import { McRefrenceServiceService } from '../mc-refrence-service.service';
import { HCReferenceResponse } from '../models/HCReferenceResponse';
import { MCReferenceResponse } from '../models/MCReferenceResponse';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-hc-itnry',
  templateUrl: './hc-itnry.component.html',
  styleUrls: ['./hc-itnry.component.css']
})
export class HcItnryComponent implements OnInit {
  submitted = false;
  formData = false;
  chosenMod: string = "";
  mcRefList: MCReferenceResponse[]; 
  hcRefList: HCReferenceResponse[];
  constructor(private hcRefService: HcRefernceService, private mcRefService: McRefrenceServiceService,private data: DataService, private route: Router, private notifyService: NotificationService, private itrnyService: ItrnyService) {

  }
  ngOnInit(): void {
    this.mcRefService.getAllMbl().subscribe((data:any) => {
      this.mcRefList = data['result'].result;
      console.log(data['result'].result);
      ;
    });
  }

  itrnyForm = new FormGroup({

    id: new FormControl(),
    mblNo: new FormControl(),
    hblNo: new FormControl(),

    prtOfCallSeqNmbr: new FormControl('', [Validators.required]),
    prtOfCallCdd: new FormControl(),
    prtOfCallName: new FormControl(),
    nxtPrtOfCallCdd: new FormControl(),
    nxtPrtOfCallName: new FormControl(),
    modeOfTrnsprt: new FormControl('', [Validators.required]),
  });
  get f() { return this.itrnyForm.controls; }


  selectMbl() {
    console.log("item selected"+ this.chosenMod);
  
    this.hcRefService.getHblByMblNo(this.chosenMod).subscribe((data:any) => {
      this.hcRefList = data['result'].result;
      console.log(data['result'].result);
    });
  }
  save() {
    
    this.submitted = true;
    // stop here if form is invalid
    if (this.itrnyForm.invalid) {
      return;
    }
    this.itrnyService.create(this.itrnyForm.value).pipe(first())
      .subscribe(
        data => {
          console.log(data['status']);
          if (data['status'] == 200) {
            //this.route.navigateByUrl("/mctrans-doc-msr");
            this.notifyService.showSuccess(data['message'], this.itrnyForm.value.mblNo);
            this.formData = true;
            this.reset();
          }
          else {
            this.notifyService.showError(data['message'], false);
     }
        },
        error => {
          //this.notifyService.showError(
        });
  }

  reset() {
    this.submitted = false;
    this.itrnyForm.reset();
  }

}

