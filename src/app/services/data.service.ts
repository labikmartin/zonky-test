import { Loan } from './../models/loan';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { RatingsEnum } from '../models/rating';

@Injectable({ providedIn: 'root' })
export class DataService {
  loans: BehaviorSubject<Loan[]> = new BehaviorSubject([]);
  selectedLoan: BehaviorSubject<Loan> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  getLoans(withRating: string) {
    return this.http.get(
      `/api/loans/marketplace?rating__in=${withRating}`
    ) as Observable<Loan[]>;
  }

  storeLoans(loans: Loan[]) {
    this.loans.next(loans);
  }

  storeSelectedLoan(loan: Loan) {
    this.selectedLoan.next(loan);
  }
}
