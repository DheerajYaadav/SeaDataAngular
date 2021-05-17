import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { EquipmentService } from '../equipment.service';
import { HcRefernceService } from '../hc-refernce.service';
import { McRefrenceServiceService } from '../mc-refrence-service.service';
import { MctransdocmsrService } from '../mctransdocmsr.service';
import { HCReferenceResponse } from '../models/HCReferenceResponse';
import { MCReferenceResponse } from '../models/MCReferenceResponse';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-hc-transport-equipment',
  templateUrl: './hc-transport-equipment.component.html',
  styleUrls: ['./hc-transport-equipment.component.css']
})
export class HcTransportEquipmentComponent implements OnInit {
  chosenMod: string = "";
  mcRefList: MCReferenceResponse[]; 
  hcRefList: HCReferenceResponse[];
  submitted: boolean;
  mblNo: string;
  constructor(private hcRefService: HcRefernceService, private mcRefService: McRefrenceServiceService,private equipmentService: EquipmentService, private mcReferenceService: McRefrenceServiceService, private notifyService: NotificationService) { }

  
  ngOnInit(): void {
    this.mcRefService.getAllMbl().subscribe((data:any) => {
      this.mcRefList = data['result'].result;
      console.log(data['result'].result);
      ;
    });  }

  equipmentForm = new FormGroup({

    id: new FormControl(''),
    mblNo: new FormControl(''),
    hblNo: new FormControl(''),

    eqmtSeqNo: new FormControl('', [Validators.required]),
    eqmtId: new FormControl('', [Validators.required]),
    eqmtTyp: new FormControl('', [Validators.required]),
    eqmtSize: new FormControl(),
    eqmtLoadStatus: new FormControl('', [Validators.required]),
    adtnlEqmtHold: new FormControl(),
    eqmtSealTyp: new FormControl(),
    eqmtSealNmbr: new FormControl(),
    otherEqmtId: new FormControl(),
    socFlag: new FormControl('', [Validators.required]),
    cntrAgntCd: new FormControl(),
    cntrWeight: new FormControl(),
    totalNmbrOfPkgs: new FormControl('', [Validators.required]),

    prtOfCallSeqNmbr: new FormControl('', [Validators.required]),
    prtOfCallCdd: new FormControl(),
    prtOfCallName: new FormControl(),
    nxtPrtOfCallCdd: new FormControl(),
    nxtPrtOfCallName: new FormControl(),
    modeOfTrnsprt: new FormControl('', [Validators.required]),
  });

  get f() { return this.equipmentForm.controls; }

  selectMbl() {
    console.log("item selected"+ this.chosenMod);
  
    this.hcRefService.getHblByMblNo(this.chosenMod).subscribe((data:any) => {
      this.hcRefList = data['result'].result;
      console.log(data['result'].result);
    });
  }
  reset() {
    this.submitted = false;
    this.equipmentForm.reset();
  }

  save() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.equipmentForm.invalid) {
      return;
    }
    this.equipmentService.create(this.equipmentForm.value).pipe(first())
      .subscribe(
        data => {
          console.log(data['message']);
          if (data['status'] == 200) {
            this.notifyService.showSuccess(data['message'], "Dheeraj");
            this.reset();
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

