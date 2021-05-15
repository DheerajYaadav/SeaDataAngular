import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ConsignerService } from '../consigner.service';
import { Consigner } from '../models/Consigner';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-consigner',
  templateUrl: './consigner.component.html',
  styleUrls: ['./consigner.component.css']
})
export class ConsignerComponent implements OnInit {

  constructor(private route: Router, private consignerService: ConsignerService, private notifyService: NotificationService) { }

  ngOnInit(): void {
  }
  submitted = false;
  formData = false;
  consigner:Consigner
  consignerForm = new FormGroup({
    city: new FormControl(),
    code: new FormControl(),
    countryCode: new FormControl(),
    countrySubDiv: new FormControl(),
    countrySubDivName: new FormControl(),
    name: new FormControl(),
    postcode: new FormControl(),
    streetAddress: new FormControl(),
    typeOfCode: new FormControl(),
  });
  get f() { return this.consignerForm.controls; }

  reset() {
    this.submitted = false;
    this.consignerForm.reset();
  }
  add() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.consignerForm.invalid) {
      return;
    }
    this.consignerService.create(this.consignerForm.value).pipe(first())
      .subscribe(
        data => {
          console.log(data['status']);
          if (data['status'] == 200) {
            //this.route.navigateByUrl("/mctrans-doc-msr");
            this.formData = true;
            this.route.navigateByUrl("/list-consigner");
            this.notifyService.showSuccess(data['message'],this.consignerForm.value.name);
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
