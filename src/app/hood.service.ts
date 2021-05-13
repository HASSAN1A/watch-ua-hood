
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoodService {

  baseurl = "https://hoodappx255.herokuapp.com";
  

  constructor(private http: HttpClient) { }

  getAllhoods(): Observable<any> {
    return this.http.get(this.baseurl + '/hoods/');
  }
}
  