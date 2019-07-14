import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as fromStore from '../store';
import { Loan } from '../models/loan';
import { RatingsEnum } from './../models/rating';

@Component({
  selector: 'zonky-loans-list-container',
  template: `
    <div>Hello from Loans Page</div>

    <div>{{ 'yolo' | translate }}</div>

    <div>
      Average loan: {{ avgLoanAmount | currency: 'CZK':'code':null:'cs' }}
    </div>

    <zonky-risk-rating-selection
      (onRatingChange)="onLoanRatingChange($event)"
    ></zonky-risk-rating-selection>

    <div *ngFor="let loan of loans" (click)="onToDetail(loan)">
      {{ loan.name }}: {{ loan.amount }}
    </div>

    <router-outlet></router-outlet>
  `
})
export class LoansListContainerComponent implements OnInit, OnDestroy {
  loans: Loan[];
  avgLoanAmount: number;
  loading: boolean;

  private unsubscribe = new Subject<void>();

  constructor(private store: Store<fromStore.State>, private router: Router) {
    this.store
      .select(fromStore.getLoansList)
      .pipe(
        filter(loans => loans && loans.length > 0),
        takeUntil(this.unsubscribe)
      )
      .subscribe(loans => {
        console.log('Loans List: ', loans);
        this.loans = loans;
        this.avgLoanAmount = this.calcAvgLoanAmount();
      });

    this.store
      .select(fromStore.getLoanLoading)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(loading => {
        console.log('Loading: ', loading);
        this.loading = loading;
      });
  }

  ngOnInit() {
    console.log('Hello from Loans Page');
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onLoanRatingChange(loanRating: RatingsEnum) {
    console.log('Loan Rating Changed > ', loanRating);
    this.store.dispatch(new fromStore.GetLoansList(loanRating));
  }

  onToDetail(loanDetail: Loan) {
    this.router.navigate(['/detail']);

    this.store.dispatch(new fromStore.SetLoanDetail(loanDetail));
  }

  calcAvgLoanAmount() {
    if (!this.loans.length) {
      return;
    }

    const loansSum = this.loans.reduce((a, b) => {
      return a + b.amount;
    }, 0);
    const avgLoan = loansSum / this.loans.length;

    return avgLoan;
  }
}
