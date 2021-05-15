import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { McTransDocMsrComponent } from './mc-trans-doc-msr/mc-trans-doc-msr.component';
import { MCTransDocMsr } from './models/McTransDocMsr';

@Injectable({
  providedIn: 'root'
})
export class MctransdocmsrService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  create(mcObject: MCTransDocMsr) {

    if (mcObject.hblNo) {
      mcObject.type = 'HBL';

    }
    else {
      mcObject.type = 'MBL';
    }
    console.log(mcObject);
    return this.http.post(this.apiUrl + '/trnsprtDocMsr/addTrnsprtDocMsr', mcObject);
  }

  addItems(mcObject: MCTransDocMsr, id: number) {
    console.log(mcObject);
    return this.http.post(this.apiUrl + '/trnsprtDocMsr/addItemsDetailsInTrnsprtDocMsr/' + id, mcObject);
  }

}
