import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HCReferenceResponse } from './models/HCReferenceResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HcRefernceService {

  apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

 
  getHblByMblNo(mblNo: string) {
    return this.http.get(this.apiUrl + '/hCRef/getHCRefBymblNo/' + mblNo).pipe(
      map((data: HCReferenceResponse[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   );
  }
}
