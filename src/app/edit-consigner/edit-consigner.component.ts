import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';
import { ConsignerService } from '../consigner.service';
import { Consigner } from '../models/Consigner';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-edit-consigner',
  templateUrl: './edit-consigner.component.html',
  styleUrls: ['./edit-consigner.component.css']
})
export class EditConsignerComponent implements OnInit {

  consigner: Consigner;
  constructor(private router: Router, private consignerService: ConsignerService,private notifyService: NotificationService) { }

  editConsignerForm = new FormGroup({
    id:new FormControl(),
    city: new FormControl(),
    code: new FormControl(),
    countryCode: new FormControl(),
    countrySubDiv: new FormControl(),
    countrySubDivName: new FormControl(),
    name: new FormControl(),
    postcode: new FormControl(),
    streetAddress: new FormControl(),
    typeOfCode: new FormControl(),
  })
  get f() { return this.editConsignerForm.controls; }

  ngOnInit() {
      let ConsignerId = window.localStorage.getItem("editConsignerId");
    if(!ConsignerId) {
      alert("Invalid action.")
      this.router.navigateByUrl("/list-consignor");
    }
    this.consignerService.getConsignerById(+ConsignerId)
    .subscribe( data => {
      console.log(ConsignerId);
      this.editConsignerForm.setValue(data['result']);
    });
}

onSubmit() {
  console.log(this.editConsignerForm.value.id);
  this.consignerService.updateConsigner(this.editConsignerForm.value)
    .pipe(first())
    .subscribe(
      data => {
        if(data['status'] === 200) {
          this.router.navigateByUrl("/list-consignor");
          this.notifyService.showWarning(data['message'],data['status'])
        }else {
          alert(data['message']);
        }
      },
      error => {
        alert(error);
      });
}
}