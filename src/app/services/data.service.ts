import { Loan } from './../models/loan';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getLoans(withRating: string) {
    return this.http.get(
      `/api/loans/marketplace?rating__in=${withRating}`
    ) as Observable<Loan[]>;
  }
}
