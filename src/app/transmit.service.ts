import { HttpClient, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './models/ApiResponse';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransmitService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  downloadLink(mblNo: string): Observable<HttpResponse<Blob>> {
    return this.http.get<Blob>(this.apiUrl + '/transmit/createJson/' + mblNo, {
      observe: 'response',
      responseType: 'blob' as 'json'
    });
  }
  // transmitByMblNo(mblNo: string): any {
  //   return this.http.get(this.apiUrl + '/transmit/createJson/' + mblNo,{responseType: 'blob'});
  // }
}
