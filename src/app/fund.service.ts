import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from './fund/fund.model';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private http: HttpClient) { }

  getFunds(): Observable<any> {
    return this.http.get("http://localhost:8082/api/funds");
  }

  getFund(fundId: number): Observable<any> {
    return this.http.get(`http://localhost:8082/api/funds/${fundId}`);
  }

  deleteFund(fundId: number | undefined): Observable<any> {
    return this.http.delete(`http://localhost:8082/api/funds/${fundId}`);
  }

  updateFund(fund: Fund): Observable<any>{
    return this.http.patch(`http://localhost:8082/api/funds/${fund.id}`, fund);
  }

  createFund(fund: Fund): Observable<any>{
    return this.http.post(`http://localhost:8082/api/funds`, fund);
  }
}