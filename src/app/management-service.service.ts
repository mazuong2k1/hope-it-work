import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementServiceService {

  private apiUrl = 'http://34.116.153.166:3000/api';
  private  headers = new HttpHeaders({
    'Content-Type': 'application/json',
 
  });
  constructor(private http: HttpClient) {}

  submitPart1(body : any): Observable<any> {
    const url = `${this.apiUrl}/confirm`;
    return this.http.post(url, body , { headers: this.headers });
  }
  submitPart2(body : any): Observable<any> {
    const url = `${this.apiUrl}/confirm`;
    return this.http.post(url, body , { headers: this.headers });
  }
}
