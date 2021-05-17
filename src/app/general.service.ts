import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiResponse } from './models/ApiResponse';
import { General } from './models/general';
import { Location } from './models/Location';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  apiUrl = environment.apiUrl;

  constructor( private http:HttpClient) { }

  create(generalObject: General)  {
    // let ob = generalObject.modeOfTrnsprt.split('-')[0];
    // generalObject.modeOfTrnsprt = ob;
    return this.http.post(this.apiUrl + '/generalDetails/addGeneralDetails', generalObject);
  }

  getJobId(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl + '/generalDetails/getJobId');
  }

  getAllLocations() {
    return this.http.get(this.apiUrl + '/Location/getAllLocation').pipe(
      map((data: Location[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   );
  }
}
