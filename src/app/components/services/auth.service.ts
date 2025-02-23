import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export enum UserType {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/v1/auth';

  constructor(private http: HttpClient) { }

  signUp(username: string, password: string): Observable<any> {
    const registerRequest={ username:username, userRole:"USER", password:password }
   // console.log(registerRequest);
    return this.http.post(`${this.apiUrl}/register`, registerRequest);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, { username, password });
  }
}
