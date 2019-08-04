import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
//import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
  public post(url: string, body: Object): Observable<any> {
    url = "http://localhost:3000" + url;
    return this.http.post<any>(url, body, httpOptions) // ...using post request
      .pipe(catchError((error: any) => Observable.throw(error.json().error || 'Server error'))); //...errors if any
  }
  public get(url: string): Observable<any> {
    url = "http://localhost:3000" + url;
    return this.http.get<any>(url, httpOptions) // ...using post request
      .pipe(catchError((error: any) => Observable.throw(error.json().error || 'Server error'))); //...errors if any
  }
}