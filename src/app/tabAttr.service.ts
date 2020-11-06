import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabAttrService {

  private baseUrl = 'http://localhost:9090/api/tabAttr';

  constructor(private http: HttpClient) { }

  getTabAttr(attrNo: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${attrNo}`);
  }

  createTabAttr(tabAttr: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, tabAttr);
  }

  updateTabAttr(tabAttr: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, tabAttr);
  }

  deleteTabAttr(attrNo: string): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${attrNo}`);
  }

  getTabAttrsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
