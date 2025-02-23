import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
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

  constructor(private http: HttpClient, private router: Router) { }

  signUp(username: string, password: string): Observable<any> {
    const registerRequest = { username: username, userRole: "USER", password: password }
    // console.log(registerRequest);
    return this.http.post(`${this.apiUrl}/register`, registerRequest);
  }
  isTokenValid(token: string): boolean {
    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Math.floor(new Date().getTime() / 1000);
      return decodedToken.exp > currentTime;
    } catch (error) {
      return false;
    }
  }

  logout() {
    if (!this.isTokenValid) {
      this.router.navigate(['login']);
    }
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`, { username, password });
  }
}
