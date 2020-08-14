import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimpleserviceService {
  private apiUrl: string = '';
  constructor(private HttpClient: HttpClient) {
    this.apiUrl = 'https://reqres.in/api/';
   }

   getData() {
     return this.HttpClient.get(this.apiUrl + 'users?page=2');
   }

   getDetailsData(id: any) {
     return this.HttpClient.get(this.apiUrl + 'users/' + id);
   } 
}
