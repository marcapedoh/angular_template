import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenereicService {

  constructor(private httpClient: HttpClient) { }

  create(component: string, payload: any) {
    return this.httpClient.post(`http://localhost:8080/v1/${component}/create`, payload);
  }
  findAll(component: string) {
    return this.httpClient.get(`http://localhost:8080/v1/${component}/all`);
  }
}
