import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { General } from './models/general';
import { Location } from './models/Location';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  apiUrl = environment.apiUrl;

  constructor( private http:HttpClient) { }

  create(generalObject: General)  {

    return this.http.post(this.apiUrl + '/generalDetails/addGeneralDetails', generalObject);
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
