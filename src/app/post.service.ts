import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseurl = "https://hoodappx255.herokuapp.com";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/posted/',
    {headers: this.httpHeaders}
    );
  }
  AddPost(nwPost): Observable<any> {
    return this.http.post(this.baseurl + '/api/v1/posted/', nwPost,
    {headers: this.httpHeaders})
  }
}