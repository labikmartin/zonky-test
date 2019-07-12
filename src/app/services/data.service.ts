import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getLoans(withRating: string) {
    return this.http.get(`/api/loans/marketplace?rating__in=${withRating}`);
  }
}
