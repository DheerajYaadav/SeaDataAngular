import { HttpClient } from '@angular/common/http';
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

  transmitByMblNo(mblNo: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl + '/transmit/createJson/' + mblNo);
  }
}
