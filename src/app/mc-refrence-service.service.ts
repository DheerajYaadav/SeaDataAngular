import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MCReference } from './models/MCReference';
import { HCReference } from './models/HCReference';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ApiResponse } from './models/ApiResponse';
import { MCReferenceResponse } from './models/MCReferenceResponse';
import { HCReferenceResponse } from './models/HCReferenceResponse';

@Injectable({
  providedIn: 'root'
})
export class McRefrenceServiceService {
  apiUrl = environment.apiUrl;

  constructor( private http:HttpClient) { }

  create(mcObject: MCReference)  {
    mcObject.type = 'MBL';
    return this.http.post(this.apiUrl + '/mCRef/addmCRef', mcObject);
  }

  hcCreate(hcObject: HCReference)  {
    hcObject.type = 'HBL';
    return this.http.post(this.apiUrl + '/hCRef/addHCRef', hcObject);
  }

  
  updateMcRef(mcObject: MCReferenceResponse): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.apiUrl + '/mCRef/updateMcRef/' +mcObject.id, mcObject);
  }

  deleteMcRef(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.apiUrl + '/mCRef/deletemCRef/' + id);
  }

  getMcRefById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl + '/mCRef/getMCRefById/' + id);
  }

  
  getMcRefId(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl + '/mCRef/getMcRefId');
  }
  getAllMbl() {
    return this.http.get(this.apiUrl + '/mCRef/getAllMCRef/true').pipe(
      map((data: MCReferenceResponse[]) => {
        return data;
      }), catchError( error => {
        return throwError( 'Something went wrong!' );
      })
   );
  }
}
