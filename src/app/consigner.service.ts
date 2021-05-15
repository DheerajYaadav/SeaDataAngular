import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Consigner } from './models/Consigner';
import { map, catchError } from 'rxjs/operators';
import {throwError } from 'rxjs';
import {Observable} from "rxjs/index";
import { ApiResponse } from './models/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class ConsignerService {

  apiUrl = environment.apiUrl;
  constructor( private http:HttpClient) { }

  create(mcObject: Consigner)  {

    return this.http.post(this.apiUrl + '/consignor/addConsignor', mcObject);
  }

  
  updateConsigner(consigner: Consigner): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.apiUrl + '/consignor/updateConsignor/' +consigner.id, consigner);
  }

  deleteConsginer(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.apiUrl + '/consignor/deleteConsignor/' + id);
  }

  getConsignerById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl + '/consignor/getConsignorById/' + id);
  }

  getAllConsigner() {
    return this.http.get(this.apiUrl + '/consignor/getAllConsignor').pipe(
      map((data: Consigner[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   );
  }
}
