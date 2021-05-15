import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { McRefrenceServiceService } from '../mc-refrence-service.service';
import { MCReferenceResponse } from '../models/MCReferenceResponse';
import { TransmitService } from '../transmit.service';

@Component({
  selector: 'app-transmit',
  templateUrl: './transmit.component.html',
  styleUrls: ['./transmit.component.css']
})
export class TransmitComponent implements OnInit {


  mcRefList: MCReferenceResponse[];
  json= false;
  jsonObject:any;
  ab: any;
  constructor(private mcRefService: McRefrenceServiceService, private transmitService: TransmitService) { }


  transmitForm = new FormGroup({

    mblNo:  new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {

    this.mcRefService.getAllMbl().subscribe((data:any) => {
      this.mcRefList = data['result'].result;
      console.log(data['result'].result);
      ;
    });
  }

  transmit() {
    let mblNo = this.transmitForm.value.mblNo;
    console.log("item selected"+ this.transmitForm.value.mblNo);
    this.transmitService.transmitByMblNo(mblNo)
    .subscribe(data => {
      this.json = true;
      this.jsonObject = data['result'];
      this.ab = JSON.stringify(this.jsonObject);
      console.log(this.ab);
    });
  }

}
function subscribe(arg0: (data: any) => void) {
  throw new Error('Function not implemented.');
}

