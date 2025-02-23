import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class InterceptInterceptor implements HttpInterceptor {

  PUBLIC_URL = {
    login: `localhost:8080/v1/auth/authenticate`,
    register: `localhost:8080/v1/auth/register`
  }
  constructor(private router: Router, private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('I intercept it');
    if (!(request.url.includes(this.PUBLIC_URL.login)) && !(request.url.includes(this.PUBLIC_URL.register))) {
      
      const authToken = localStorage.getItem('token')!;
      console.log(`Bearer ${authToken}`);
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${authToken}`)
      });
      return this.handleRequest(authReq, next);
    }
    return this.handleRequest(request, next);
    //return next.handle(request);
  }
  handleRequest(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(tap((event: HttpEvent<unknown>) => {
      if (event instanceof HttpResponse) {

      }
    }, (error: any) => {
      if (error instanceof HttpErrorResponse && error.status === 401 || error.status === 403) {
        this.authService.logout();
      }
    }))
  }
}
