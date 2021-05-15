import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ItrnyComponent } from './itrny/itrny.component';
import { Itrny } from './models/Itrny';

@Injectable({
  providedIn: 'root'
})
export class ItrnyService {

  apiUrl = environment.apiUrl;

  constructor( private http:HttpClient) { }

  create(itrny: Itrny)  {

    if(itrny.hblNo){
      itrny.type = 'HBL';
    }
    else {
    itrny.type = 'MBL';
    }
    return this.http.post(this.apiUrl + '/itnry/addItnry', itrny);
  }
}
