import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { DataService } from '../data.service';
import { ItrnyService } from '../itrny.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-itrny',
  templateUrl: './itrny.component.html',
  styleUrls: ['./itrny.component.css']
})
export class ItrnyComponent implements OnInit {

  submitted = false;
  formData = false;
  constructor(private data: DataService, private route: Router, private notifyService: NotificationService, private itrnyService: ItrnyService) {

  }
  ngOnInit(): void {

  }

  itrnyForm = new FormGroup({
    prtOfCallSeqNmbr: new FormControl('', [Validators.required]),
    prtOfCallCdd: new FormControl(),
    prtOfCallName: new FormControl(),
    nxtPrtOfCallCdd: new FormControl(),
    nxtPrtOfCallName: new FormControl(),
    modeOfTrnsprt: new FormControl('---Select Mode Of Transport---', [Validators.required]),
  });
  get f() { return this.itrnyForm.controls; }

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
            this.notifyService.showSuccess(data['message'], "Dheeraj");
            this.formData = true;
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
