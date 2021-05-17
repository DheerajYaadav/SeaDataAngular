import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { McRefrenceServiceService } from '../mc-refrence-service.service';
import { MCReferenceResponse } from '../models/MCReferenceResponse';
import { TransmitService } from '../transmit.service';
import * as fileSaver from 'file-saver';
import { HttpResponse } from '@angular/common/http';

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

    this.transmitService.downloadLink(mblNo)
    .subscribe(
      (resp: HttpResponse<Blob>) => {
        var contentDisposition = resp.headers.get('content-disposition');
        console.log(contentDisposition);
        let  data = resp.body;
        console.log(data);
        var filename = contentDisposition.split(';')[1].split('filename')[1].split('=')[1].trim();
        fileSaver.saveAs(data, filename);
      });
  }
  }

