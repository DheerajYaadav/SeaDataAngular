import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MCReference } from './models/MCReference';
import { McTransDocument } from './models/McTransDocument';

@Injectable({
  providedIn: 'root'
})
export class TransdocService {

  apiUrl = environment.apiUrl;

  constructor( private http:HttpClient) { }

  create(mcTransDocObject: McTransDocument)  {
    if(mcTransDocObject.hblNo){
      mcTransDocObject.type= 'HBL';

    }
    else {
      mcTransDocObject.type= 'MBL';
    }
    return this.http.post(this.apiUrl + '/trnsprtDoc/addTrnsprtDoc', mcTransDocObject);
  }
}
