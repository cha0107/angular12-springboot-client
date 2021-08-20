import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabGrCompService {
  
  private baseUrl = 'http://localhost:9090/api/tabGrComp';


  getTabGrComp(cmpId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${cmpId}`);
  }

  createTabGrComp(tabGrComp: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, tabGrComp);
  }

  updateTabGrComp(tabGrComp: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, tabGrComp);
  }

  deleteTabGrComp(cmpId: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${cmpId}`);
  }

  getTabGrCompsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  constructor(private http: HttpClient) { }
}
