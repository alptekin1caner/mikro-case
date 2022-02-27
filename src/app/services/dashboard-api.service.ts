import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Member } from '../models/Member';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {
  apiUrl: string = 'https://dummyapi.io/data/v1/user?limit=10';
  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('app-id', '611f33c594916dee4af13a68');

  constructor(private http: HttpClient) { }

  getData(): Observable<Member[]>{
    return this.http.get<Member[]>(`${ this.apiUrl }`, { headers: this.headers })
    .pipe(map((data: Member[]) => {
      return data;
    }));
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Status: ${ error.status }, Message: ${ error.message }`;
    }
    
    console.warn(errorMessage);
    return throwError(errorMessage);
  }
}
