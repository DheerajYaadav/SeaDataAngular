import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { EquipmentService } from '../equipment.service';
import { McRefrenceServiceService } from '../mc-refrence-service.service';
import { MctransdocmsrService } from '../mctransdocmsr.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-transport-equipment',
  templateUrl: './transport-equipment.component.html',
  styleUrls: ['./transport-equipment.component.css']
})
export class TransportEquipmentComponent implements OnInit {

  constructor(private equipmentService: EquipmentService, private mcReferenceService: McRefrenceServiceService, private notifyService: NotificationService) { }

  submitted: boolean;
  mblNo: string;
  ngOnInit(): void {
    this.mblNo = window.localStorage.getItem("mblNo");
  }

  equipmentForm = new FormGroup({

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
    totalNmbrOfPkgs: new FormControl('', [Validators.required])
  });

  get f() { return this.equipmentForm.controls; }
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
    this.equipmentService.create(this.equipmentForm.value, this.mblNo).pipe(first())
      .subscribe(
        data => {
          console.log(data['message']);
          if (data['status'] == 200) {
            this.notifyService.showSuccess(data['message'], "Dheeraj");
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
