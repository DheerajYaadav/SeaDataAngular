import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Equipment } from './models/Equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  create(equipmentObject: Equipment) {

    if (equipmentObject.hblNo) {
      equipmentObject.type = 'HBL';
    }
    else {
      equipmentObject.type = 'MBL';
    }
    return this.http.post(this.apiUrl + '/trnsprtEqmt/addTrnsprtEqmt/', equipmentObject);
  }
}
