import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = "https://hoodappx255.herokuapp.com";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseurl + '/auth/login/',
    {headers: this.httpHeaders}
    );
  }
  
  getOneUser(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/users/' + id,
    {headers: this.httpHeaders}
    );
  }


  updateUser(user): Observable<any> {
    const body = {username: '' , email: ''};
    return this.http.put(this.baseurl + '/users/' + user.id + '/', body);
  }

  AddUser(user): Observable<any> {
    return this.http.post(this.baseurl + '/auth/signup/', user,
    {headers: this.httpHeaders})
  }
}